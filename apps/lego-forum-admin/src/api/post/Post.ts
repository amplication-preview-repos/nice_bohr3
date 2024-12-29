import { Comment } from "../comment/Comment";

export type Post = {
  author: string | null;
  comment?: Comment | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
