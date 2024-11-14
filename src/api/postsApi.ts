import { baseApi } from "./baseApi";

interface PostResponse {
  id: string;
  message: string;
  date: Date;
}

interface AddPostRequestBody {
  message: string;
}

const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation<PostResponse, AddPostRequestBody>({
      query: (body) => ({
        url: `/posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    getPosts: builder.query<PostResponse[], void>({
      query: () => `/posts`,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useAddPostMutation, useGetPostsQuery } = postsApi;
