import React from 'react'
import {Grid, Text} from "@chakra-ui/react";

export const InfoSquare = props => {
  const {
    label = '',
    value = ''
  } = props

  return (
    <Grid
      templateColumns='1fr 1fr'
      gap={2}
      alignItems='center'
      textAlign='center'
      borderWidth='1px'
      borderRadius='5px'
      px={2}
      justifySelf='center'
      maxW='150px'
      bg='#1E2328'
      _hover={{
        cursor: 'default'
      }}
    >
      <Text fontSize='lg'>
        {label}:
      </Text>
      <Text fontSize='4xl'>
        {value}
      </Text>
    </Grid>
  )
}