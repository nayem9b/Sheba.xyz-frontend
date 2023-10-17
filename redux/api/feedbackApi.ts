import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const feedbackApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    postFeedback: build.mutation({
      query: (data: any) => ({
        url: "/my-feedback",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),

    getAllFeedbacks: build.query({
      query: () => ({
        url: "/all-feedbacks",
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const { usePostFeedbackMutation, useGetAllFeedbacksQuery } = feedbackApi;