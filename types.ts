export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  display: string;
}