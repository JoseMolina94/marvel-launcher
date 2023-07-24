import React from 'react'
import {Image} from "@chakra-ui/react";

export const Logo = props => {
  const{
    width = '170px',
    height = 'auto'
  } = props

  return (
    <Image
      atl='MARVEL'
      src='marvel_logo.png'
      w={width}
      h={height}
      justifySelf='center'
      alignSelf='center'
    />
  )
}