import { baseApi } from "./baseApi";
import { tagTypes } from "@/redux/tag-types";

export const userApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    getUserById: build.query({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    addUser: build.mutation({
      query: (data: any) => ({
        url: `/auth/signup`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    allUsers: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetUserByIdQuery, useAddUserMutation, useAllUsersQuery } =
  userApi;
