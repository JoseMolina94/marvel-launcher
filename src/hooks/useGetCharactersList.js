import React, { useEffect } from 'react'
import { useGetList } from "./core/useGetList";

export const useGetCharactersList = () => {
  const {
    data: characters,
    call: getCharacters,
    loading,
    refreshList,
    paginate
  } = useGetList({
    path: 'https://gateway.marvel.com:443/v1/public/characters',
    limit: 5,
    responsePath: 'data.results'
  })

  useEffect(() => {
    getCharacters()
  }, [paginate?.page])

  return {
    characters,
    paginate,
    loading,
    refreshList
  }
}