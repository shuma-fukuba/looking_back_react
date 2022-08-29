import axios from 'axios'
import { RequestOption, Response } from './types'
import handleError from './error'

export default {
  get: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params } = option

    try {
      const res = await axios.get<T>(url, {
        params,
        url,
      })

      return {
        data: res.data,
        status: res.status,
      }
    } catch (e) {
      throw handleError(e)
    }
  },
  post: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params } = option

    try {
      const res = await axios.post<T>(url, params, {})

      return {
        data: res.data,
        status: res.status,
      }
    } catch (e) {
      throw handleError(e)
    }
  },
  put: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params } = option

    try {
      const res = await axios.put<T>(url, params, {})

      return {
        data: res.data,
        status: res.status,
      }
    } catch (e) {
      throw handleError(e)
    }
  },
  delete: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params } = option

    try {
      const res = await axios.delete<T>(url, {
        data: params,
      })

      return {
        data: res.data,
        status: res.status,
      }
    } catch (e) {
      throw handleError(e)
    }
  },
}
