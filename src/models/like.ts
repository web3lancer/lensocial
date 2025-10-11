import { User } from './user';
import { Post } from './post';

export interface Like {
  id: string;
  user: User;
  post: Post;
}
