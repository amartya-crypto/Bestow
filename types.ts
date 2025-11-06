export enum NgoCategory {
  FOOD = 'Food',
  CLOTHES = 'Clothes',
  ELECTRONICS = 'Electronics',
  EDUCATION = 'Education',
}

export interface NGO {
  id: number;
  name: string;
  category: NgoCategory;
  description: string;
  imageUrl: string;
  location: string;
}

export interface GalleryPost {
  id: number;
  author: string;
  timestamp: string;
  story: string;
  imageUrl: string;
}

export interface UserStats {
  name: string;
  points: number;
  badges: { name: string; icon: string; }[];
  progress: { month: string; points: number; }[];
}

export interface AiMessage {
  sender: 'user' | 'ai';
  text: string;
}
