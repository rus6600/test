import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { drinkType } from "../types";

const baseUrl = " https://www.thecocktaildb.com/api/json/v1/1";

export const api = createApi({
  reducerPath: "api",
  keepUnusedDataFor: 5000,
  tagTypes: ["api"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getItemByName: builder.query<{ drinks: drinkType[] }, string>({
      queryFn: async (arg) => {
        try {
          const response = await fetch(`${baseUrl}/search.php?s=${arg}`);
          return { data: await response.json() };
        } catch (e) {
          return { error: e.message };
        }
      },
    }),
  }),
});

export const { useGetItemByNameQuery } = api;
