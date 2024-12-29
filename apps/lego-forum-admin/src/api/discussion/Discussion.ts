import { Comment } from "../comment/Comment";

export type Discussion = {
  author: string | null;
  comment?: Comment | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
