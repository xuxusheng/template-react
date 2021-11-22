import { AxiosResponse } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'

// export type Await<T> = T extends PromiseLike<infer U> ? U : T

export function createQueryHook<T, U>(
  key: string,
  func: (args: T) => Promise<AxiosResponse<U>>,
  defaultOptions: UseQueryOptions<Awaited<ReturnType<typeof func>>> = {}
) {
  return (
    params: T,
    options: UseQueryOptions<Awaited<ReturnType<typeof func>>> = {}
  ) => {
    return useQuery<Awaited<ReturnType<typeof func>>>(
      params ? [key, params] : key,
      () => func(params),
      { ...defaultOptions, ...options }
    )
  }
}
