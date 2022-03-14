import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getProducts: builder.query<any, any>({
      query: () => `/products`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetProductsQuery } = productsApi
