import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const categoryApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    categories: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/categories",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.category],
    }),
    postCategory: build.mutation({
      query: (data: any) => ({
        url: "/categories",
        method: "POST",
        data,
      }),
      invalidateTags: [tagTypes.category],
    }),
  }),
});

export const { useCategoriesQuery, usePostCategoryMutation } = categoryApi;
