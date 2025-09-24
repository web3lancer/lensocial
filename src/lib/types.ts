export interface ImageType {
  url: string;
  hint: string;
}

export interface User {
  name: string;
  handle: string;
  avatar: ImageType;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: ImageType;
  video?: string;
  timestamp: Date;
  likes: number;
  comments: number;
}

export interface UserProfile extends User {
  bio: string;
  portfolio: {
    id: string;
    url: string;
    hint: string;
    description: string;
  }[];
  achievements: string[];
}
