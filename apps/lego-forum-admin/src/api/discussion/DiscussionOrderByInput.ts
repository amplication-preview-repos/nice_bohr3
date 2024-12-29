import { SortOrder } from "../../util/SortOrder";

export type DiscussionOrderByInput = {
  author?: SortOrder;
  commentId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
