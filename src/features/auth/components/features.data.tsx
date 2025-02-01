import { Download, FileText, Languages, Layers } from 'lucide-react';

export const Features = [
  {
    title: 'Document-to-Voice Conversion',
    description:
      'Supports uploading various document formats (e.g., PDF, DOCX, TXT) to convert text into speech, making it easy for users to generate audio from lengthy content.',
    icon: <FileText className='h-5 w-5 text-blue-400' />
  },
  {
    title: 'High-Quality MP3 Downloads',
    description:
      'Users can download the generated speech as high-quality MP3 files, enabling offline use and content sharing across multiple platforms.',
    icon: <Download className='h-5 w-5 text-green-400' />
  },
  {
    title: 'Batch Processing for Large Files',
    description:
      'Handles large documents efficiently, with the ability to process and convert text into segmented audio files for convenient playback.',
    icon: <Layers className='h-5 w-5 text-purple-400' />
  },
  {
    title: 'Multi-Language and Format Support',
    description:
      'While focusing on Georgian, the system can also handle multilingual content and adapt audio output for diverse use cases, ensuring versatility.',
    icon: <Languages className='h-5 w-5 text-orange-400' />
  }
];
