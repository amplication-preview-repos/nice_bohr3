import { DiscussionCreateNestedManyWithoutCommentsInput } from "./DiscussionCreateNestedManyWithoutCommentsInput";
import { PostCreateNestedManyWithoutCommentsInput } from "./PostCreateNestedManyWithoutCommentsInput";

export type CommentCreateInput = {
  discussions?: DiscussionCreateNestedManyWithoutCommentsInput;
  posts?: PostCreateNestedManyWithoutCommentsInput;
};
