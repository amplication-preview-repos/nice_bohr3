import { Discussion } from "../discussion/Discussion";
import { Post } from "../post/Post";

export type Comment = {
  createdAt: Date;
  discussions?: Array<Discussion>;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
};
