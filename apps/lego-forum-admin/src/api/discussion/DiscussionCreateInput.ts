import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";

export type DiscussionCreateInput = {
  author?: string | null;
  comment?: CommentWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
