import { PostListItem } from "@components/Common/PostListItem";
import { TPost } from "@customTypes/post";

type PostListProps = {
  posts: TPost[];
  isRankedList?: boolean;
};

export const PostList = ({ posts, isRankedList = false }: PostListProps) => {
  return (
    <div className="py-2">
      {posts.map((post, i) => {
        return isRankedList ? (
          <PostListItem key={i} postItem={post} ranked={i + 1} />
        ) : (
          <PostListItem key={i} postItem={post} />
        );
      })}
    </div>
  );
};
