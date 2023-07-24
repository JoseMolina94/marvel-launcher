import React from 'react'
import { Grid, Tooltip } from "@chakra-ui/react";
import { sectionStyles } from "../../../styles";

export const Poster = props => {
  const {
    src = '',
    title = ''
  } = props

  return (
    <Tooltip label={title} placeholder='bottom'>
      <Grid
        {...sectionStyles}
        alignItems='center'
        overflow='hidden'
        backgroundImage={`url(${src})`}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        _hover={{
          cursor: 'pointer'
        }}
      />
    </Tooltip>
  )
}