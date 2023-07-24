import React from 'react'

export const useGeneralFunctions = () => {

  const buildArray = (length) => {
    const arr = []
    for (let i = 0; i <= length - 1; i++) {
      arr.push(i)
    }
    return arr
  }

  return {
    buildArray
  }
}