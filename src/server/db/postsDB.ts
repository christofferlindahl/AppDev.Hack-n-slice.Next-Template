import { PostModel } from "../models";

const PostsDB = () => {
  const posts: PostModel[] = [];

  const addPost = (post: PostModel) => {
    posts.push(post);
  };

  const getAll = () => posts;

  return {
    addPost,
    getAll,
  };
};

export const postsDB = PostsDB();
