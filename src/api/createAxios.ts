import axios, { AxiosInstance } from 'axios'

export const createAxios = (contentType: string) => {
  const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      'Content-Type': contentType,
    },
  })

  axiosClient.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  axiosClient.interceptors.response.use(
    async (response) => {
      return response.data
    },
    async (error) => {
      return error.response.data
    },
  )

  return axiosClient
}
