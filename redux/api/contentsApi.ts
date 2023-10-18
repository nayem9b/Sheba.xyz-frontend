import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const contentsApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    allContents: build.query({
      query: () => ({
        url: "/contents",
        method: "GET",
      }),
      providesTags: [tagTypes.content],
    }),

    deleteContent: build.mutation({
      query: (id: string) => ({
        url: `/contents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const { useAllContentsQuery, useDeleteContentsMutation } = contentsApi;
