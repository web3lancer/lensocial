import { User } from './user';

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  createdAt: Date;
}
