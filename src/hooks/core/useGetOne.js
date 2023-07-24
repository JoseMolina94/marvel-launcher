import React, { useState } from 'react'

export const useGetOne = props => {
  const {
    path = ''
  } = props
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const call = async (id) => {
    setLoading(true)

    await fetch(`${path}/${id}?apikey=ea0e33d5878e7925c11fbc1b41e5fa9f`)
      .then(data => data.json())
      .then(response => {
        setData(response.data.results[0])
        setLoading(false)
      })
  }

  const refresh = async () => {
    await call()
  }

  return {
    refresh,
    call,
    data,
    loading
  }

}