import React, { useState } from 'react'

export const useGetList = props => {
  const {
    path = '',
    limit = 20
  } = props
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [maxPages, setMaxPages] = useState(0)
  const [total, setTotal] = useState(0)
  const apikey = 'ea0e33d5878e7925c11fbc1b41e5fa9f' //the public key...

  const call = async (filters = {}) => {
    setLoading(true)

    const fetchParams = {
      apikey,
      limit,
      offset: (page - 1) * limit,
      ...filters
    }

    await fetch(`${path}?${new URLSearchParams(fetchParams)})`)
      .then(data => data.json())
      .then(response => {
        console.log('res', response)
        setData(response.data.results)
        setTotal(response.data.total)
        setMaxPages(response.data.total / limit)
        setLoading(false)
      })
  }

  const onChangePage = (valueChange) => {
    const pageToChange = page + valueChange
    if (pageToChange < 1) {
      setPage(1)
    }
    else if (pageToChange >= maxPages) {
      setPage(page)
    }
    else {
      setPage(pageToChange)
    }
  }

  const refreshList = async () => {
    await call()
  }

  return {
    call,
    data,
    paginate: {
      page,
      setPage,
      limit,
      total,
      maxPages,
      onChangePage
    },
    loading,
    refreshList
  }
}