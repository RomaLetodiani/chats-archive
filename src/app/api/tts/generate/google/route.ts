import { env } from '@/env';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { NextResponse } from 'next/server';

// Initialize Google Text-to-Speech client
const client = new TextToSpeechClient({
  credentials: {
    project_id: env.GOOGLE_CLOUD_PROJECT_ID,
    client_email: env.GOOGLE_CLOUD_CLIENT_EMAIL,
    client_id: env.GOOGLE_CLOUD_CLIENT_ID,
    private_key_id: env.GOOGLE_CLOUD_PRIVATE_KEY_ID,
    private_key: env.GOOGLE_CLOUD_PRIVATE_KEY.replace(/\\n/g, '\n')
  }
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { message: 'Invalid or missing "text" parameter' },
        { status: 400 }
      );
    }

    // Define TTS request
    const ttsRequest = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'LINEAR16' } // WAV format
    } as const;

    // Request TTS audio from Google
    const [response] = await client.synthesizeSpeech(ttsRequest);

    if (!response.audioContent) {
      throw new Error('No audio content received from TTS service.');
    }

    // Return audio content as response
    return new NextResponse(response.audioContent, {
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Disposition': 'attachment; filename="tts-audio.wav"'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to generate TTS audio' },
      { status: 500 }
    );
  }
}
