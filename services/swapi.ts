import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ResponseApi from '../types/api'
import People from '../types/people'

export const swaApi = createApi({
  reducerPath: 'swaApi',
  tagTypes: ['swaApi'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getHeroesByPage: builder.query<ResponseApi<People>, number>({
      query: (page) => `people?page=${page}`,
    }),

    getHeroByID: builder.query<People, number>({
      query: (id) => `people/${id}`,
    }),
    search: builder.mutation<ResponseApi<People>, string>({
      query: (search) => `people?search=${search}`,
    }),
  }),
})

export const { useGetHeroesByPageQuery, useGetHeroByIDQuery, useSearchMutation } = swaApi
