import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://sheba-backend-5gd0cndez-nayem9b.vercel.app/api/v1",
  }),

  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
