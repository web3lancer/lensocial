import { User } from './user';
import { Post } from './post';

export interface Comment {
  id: string;
  author: User;
  post: Post;
  content: string;
  createdAt: Date;
}
