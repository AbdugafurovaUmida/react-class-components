type ResponseApi<P> = {
  limit: number
  skip: number | null
  total: number | null | undefined
  products: P[]
}

export default ResponseApi
