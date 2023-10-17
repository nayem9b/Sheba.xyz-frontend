import { baseApi } from "./baseApi";
import { tagTypes } from "@/redux/tag-types";

export const reviewApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    postReview: build.mutation({
      query: (data: any) => ({
        url: "/review",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.reviews],
    }),

    allReviews: build.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),
  }),
});

export const { usePostReviewMutation, useAllReviewsQuery } = reviewApi;
