import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const cartApi: any = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    addToCart: build.mutation({
      query: (data: any) => ({
        url: "/add-to-cart",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.cart],
    }),

    cartItemsByUserId: build.query({
      query: (userId: string) => ({
        url: `/mycart/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.cart],
    }),

    deleteCart: build.mutation({
      query: (id: string) => ({
        url: `/mycart/${id}`,
        method: "DELETE",
      }),
      providesTags: [tagTypes.cart],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useCartItemsByUserIdQuery,
  useDeleteCartMutation,
} = cartApi;
