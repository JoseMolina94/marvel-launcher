import React from 'react'
import { Grid, Tooltip } from "@chakra-ui/react";
import { sectionStyles } from "../../../styles";

export const Video = props => {
  const {
    src = '',
    title = 'video',
    width = '100%',
    height = '200px'
  } = props

  return (
    <Tooltip label='Injustice 2: Announce Trailer' placeholder='bottom'>
      <Grid
        {...sectionStyles}
        _hover={{
          cursor: 'pointer'
        }}
        overflow='hidden'
      >
        <iframe
          width={width}
          height={height}
          src={src}
          title={title}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </Grid>
    </Tooltip>
  )
}