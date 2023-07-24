import React from 'react'
import {Grid, Skeleton} from "@chakra-ui/react";
import { useGeneralFunctions } from "../../hooks/useGeneralFunctions";

export const CharacterListLoader = () => {
  const {
    buildArray
  } = useGeneralFunctions()

  return (
    buildArray(5).map((index) => (
      <Skeleton
        w='100%'
        h='500px'
        key={index}
        borderWidth='1px'
        borderRadius='10px'
        borderColor='#3B3B40'
      />
    ))
  )
}