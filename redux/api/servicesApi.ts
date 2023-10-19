import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const servicesApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    addServices: build.mutation({
      query: (data: any) => ({
        url: `/create-service`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),

    services: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/services`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.service],
    }),
    upcomingServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/servicestatus/upcoming`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.service],
    }),
    availableServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/servicestatus/available`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.service],
    }),

    singleServices: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id: string) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useServicesQuery,
  useDeleteServiceMutation,
  useSingleServicesQuery,
  useUpcomingServicesQuery,
  useAvailableServicesQuery,
} = servicesApi;
