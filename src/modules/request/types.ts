export type RequestOption = {
  url: string
  params?: any
}

export type Response<T> = {
  data: T
  status: number
}
