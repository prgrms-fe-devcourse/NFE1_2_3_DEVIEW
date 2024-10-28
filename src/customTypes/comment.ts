export type TComment = {
  _id: string;
  postId: string;
  content: string;
  author: string;
  thumbsCount: number;
  createdAt: string;
  updatedAt: string;
  __v: string;
  thumbed: boolean;
};

export type CommonCommentRequestProps = Pick<TComment, "postId" | "content"> & {
  commentId: string;
  page: number;
  limit: number;
};

export type CommonCommentResponseProps = {
  comments: TComment[];
  currentPage: number;
  totalPages: number;
  totalComments: number;
};