import React from 'react'
import {Grid, Text} from "@chakra-ui/react";
import {sectionStyles} from "../../styles";

export const AdvertisingPoster = props => {
  const {
    title = '',
    description = '',
    advertising = ''
  } = props

  return (
    <Grid
      {...sectionStyles}
      backgroundImage={`url(${advertising})`}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      alignContent='flex-end'
    >
      <Grid
        opacity='80%'
        bg='#0E0F10'
        gap={4}
      >
        <Text fontSize='2xl'>
          {title}
        </Text>

        <Text fontSize='sm'>
          {description}
        </Text>
      </Grid>
    </Grid>
  )
}