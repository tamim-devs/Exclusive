// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => "/products",
    }),
    GetBestSellingProduct: builder.query({
      query: () => "/products/category/smartphones",
    }),
    GetProductCategoryList: builder.query({
      query: () => "/products/category-list",
    }),
    GetSingleProductDetails: builder.query({
      query: (id) => `products/${id}`,
    }),
    GetProductByCategory: builder.query({
      query: (categoryName) => `/products/category/${categoryName}`
    })
    // getPokemonByName: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// to use this "use + GetAllProduct + Query"
export const {
  useGetAllProductQuery,
  useGetBestSellingProductQuery,
  useGetProductCategoryListQuery,
  useGetSingleProductDetailsQuery,
  useGetProductByCategoryQuery,
} = productApi;
