import { Project, Service, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'NEURAL FLORA',
    category: 'Generative Nature',
    imageUrl: 'https://picsum.photos/seed/chrome1/800/1000',
    year: '2024',
    description: 'Exploration of synthetic biology through latent space interpolation.'
  },
  {
    id: '02',
    title: 'LIQUID ARCHITECTURE',
    category: 'Spatial Computing',
    imageUrl: 'https://picsum.photos/seed/chrome2/800/1000',
    year: '2025',
    description: 'Impossible geometry rendered for virtual metaverse environments.'
  },
  {
    id: '03',
    title: 'CYBER COUTURE',
    category: 'Digital Fashion',
    imageUrl: 'https://picsum.photos/seed/chrome3/800/1000',
    year: '2024',
    description: 'Wearable NFT assets designed with fluid dynamics simulation.'
  },
  {
    id: '04',
    title: 'VOID TYPE',
    category: 'Typography',
    imageUrl: 'https://picsum.photos/seed/chrome4/800/1000',
    year: '2023',
    description: 'Experimental kinetic typography system for AI branding.'
  },
  {
    id: '05',
    title: 'AETHER',
    category: 'Brand Identity',
    imageUrl: 'https://picsum.photos/seed/chrome5/800/1000',
    year: '2025',
    description: 'Corporate identity for a quantum computing startup.'
  },
  {
    id: '06',
    title: 'SYNTHETIC SOUL',
    category: 'Editorial',
    imageUrl: 'https://picsum.photos/seed/chrome6/800/1000',
    year: '2024',
    description: 'Magazine editorial layout generated entirely by neural networks.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'AI VISUAL DIRECTION',
    description: 'Curating and directing AI models to produce high-fidelity, consistent visual languages for brands.',
    tags: ['Midjourney', 'Stable Diffusion', 'Flux']
  },
  {
    id: 's2',
    title: 'GENERATIVE BRANDING',
    description: 'Creating dynamic identity systems that evolve and adapt using procedural algorithms.',
    tags: ['Identity', 'System Design', 'Motion']
  },
  {
    id: 's3',
    title: '3D/AI HYBRIDIZATION',
    description: 'Merging traditional 3D workflows (Blender/C4D) with AI texture and geometry generation.',
    tags: ['Cinema4D', 'Octane', 'AI Texturing']
  },
  {
    id: 's4',
    title: 'PROMPT ENGINEERING',
    description: 'Developing proprietary prompt libraries to secure unique aesthetic moats for clients.',
    tags: ['NLP', 'Context', 'Optimization']
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: '#', display: 'LINKEDIN' },
  { platform: 'Instagram', url: '#', display: 'INSTAGRAM' },
  { platform: 'TikTok', url: '#', display: 'TIKTOK' },
  { platform: 'Email', url: 'mailto:hello@ai-designer.future', display: 'HELLO@FUTURE.AI' }
];