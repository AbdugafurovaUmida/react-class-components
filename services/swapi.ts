import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ResponseApi from '../types/api'
import People from '../types/people'

export const swaApi = createApi({
  reducerPath: 'swaApi',
  tagTypes: ['swaApi'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getHeroesByPage: builder.query<ResponseApi<People>, { search?: string; page?: string }>({
      query: ({ search, page }) => {
        return page ? `people?search=${search}&page=${page}` : `people?search=${search}`
      },
    }),
    getHeroByID: builder.query<People, number>({
      query: (id) => `people/${id}/`,
    }),
  }),
})

export const { useGetHeroesByPageQuery, useGetHeroByIDQuery } = swaApi

export const { getHeroesByPage } = swaApi.endpoints
