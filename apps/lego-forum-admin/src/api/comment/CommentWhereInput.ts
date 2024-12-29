import { DiscussionListRelationFilter } from "../discussion/DiscussionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type CommentWhereInput = {
  discussions?: DiscussionListRelationFilter;
  id?: StringFilter;
  posts?: PostListRelationFilter;
};
