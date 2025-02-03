import { Download, FileText, Languages, Layers } from 'lucide-react';

export const Features = [
  {
    title: 'Intelligent Conversational AI',
    description:
      'Engage with an AI-driven bot that understands natural language and crafts dynamic, context-aware responses for an authentic chat experience.',
    icon: <FileText className='h-5 w-5 text-blue-400' />
  },
  {
    title: 'Real-Time Messaging',
    description:
      'Experience seamless, instantaneous communication with rapid response times that keep your conversations flowing naturally.',
    icon: <Download className='h-5 w-5 text-green-400' />
  },
  {
    title: 'Context-Aware Dialogues',
    description:
      'Enjoy multi-turn conversations where the chatbot remembers context, ensuring every reply is relevant and engaging.',
    icon: <Layers className='h-5 w-5 text-purple-400' />
  },
  {
    title: 'Multilingual Communication',
    description:
      'Break language barriers with built-in support for multiple languages, enabling richer interactions across a global user base.',
    icon: <Languages className='h-5 w-5 text-orange-400' />
  }
];
