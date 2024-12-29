import { DiscussionUpdateManyWithoutCommentsInput } from "./DiscussionUpdateManyWithoutCommentsInput";
import { PostUpdateManyWithoutCommentsInput } from "./PostUpdateManyWithoutCommentsInput";

export type CommentUpdateInput = {
  discussions?: DiscussionUpdateManyWithoutCommentsInput;
  posts?: PostUpdateManyWithoutCommentsInput;
};
