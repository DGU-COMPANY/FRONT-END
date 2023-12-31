import { userApi, UserProfile } from '@/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type TUseProfileQueryOptions = Omit<
  UseQueryOptions<UserProfile>,
  'queryKey' | 'queryFn'
>

export const useProfile = (options?: TUseProfileQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ['profile'],
    queryFn: userApi.getProfile,
  })
}
