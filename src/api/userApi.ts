import { createAxios } from './createAxios'

export type UserProfile = {
  id: string
  name: string
  city: string
  email: string
}

const axiosClient = createAxios('application/json')

export const userApi = {
  getProfile: (): Promise<UserProfile> => axiosClient.get('/public-profile'),
}
