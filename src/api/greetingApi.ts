import { baseApi } from "./baseApi";

interface GreetingResponse {
  greeting: string;
}

interface GreetingRequestBody {
  name: string;
}

const greetingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postGreeting: builder.mutation<GreetingResponse, GreetingRequestBody>({
      query: (body) => ({
        url: `/greeting`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { usePostGreetingMutation } = greetingApi;
