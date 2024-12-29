import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DiscussionWhereInput = {
  author?: StringNullableFilter;
  comment?: CommentWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
