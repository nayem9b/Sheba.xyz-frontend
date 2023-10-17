import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const bookingApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    createBooking: build.mutation({
      query: (data: any) => ({
        url: "/book",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    allBookings: build.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),

    bookingsByUserId: build.query({
      query: (userId: string) => ({
        url: `/mybooking/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),

    getSingleBooking: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),

    deleteBooking: build.mutation({
      query: (userId: string) => ({
        url: `/mybooking/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    updateBooking: build.mutation({
      query: (data: any) => ({
        url: `/bookings/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAllBookingsQuery,
  useSingleBookingQuery,
  useCreateBookingMutation,
  useBookingsByUserIdQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useGetSingleBookingMutation,
} = bookingApi;
