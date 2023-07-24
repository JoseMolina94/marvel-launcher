import React, { useEffect } from 'react'
import { useGetOne } from "./core/useGetOne";

export const useGetLastedComic = () => {
  const {
    data: comic,
    call: getComic,
    loading,
    refresh,
  } = useGetOne({
    path: 'https://gateway.marvel.com:443/v1/public/comics',
  })

  useEffect(() => {
    getComic(107121)
  }, [])

  return {
    comic,
    loading,
    refresh
  }
}