import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (builder) => ({
    GetAllBanner: builder.query({
      query: () => `/banner`,
    }),
    GetCategoryList: builder.query({
      query: () => "/category",
    }),
    GetFlashSale: builder.query({
      query: () => "/flash",
    }),
    GetCategory: builder.query({
      query: () => "/category",
    }),
    GetAllProduct: builder.query({
      query: () => '/product'
    }),
    GetSubCategory: builder.query({
      query: () => '/sub-category'
    }),
    GetAllBestSelling: builder.query({
      query: () => '/bestSelling'
    }),
    GetExploreProduct: builder.query({
      query: () => '/explore-product'
    }),
    GetSingleProductDetails: builder.query({
      query: (id)=> `/product/${id}`
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductQuery,
  useGetCategoryQuery,
  useGetAllBannerQuery,
  useGetCategoryListQuery,
  useGetFlashSaleQuery,
  useGetSubCategoryQuery,
  useGetAllBestSellingQuery,
  useGetExploreProductQuery,
  useGetSingleProductDetailsQuery,
} = exclusiveApi;
