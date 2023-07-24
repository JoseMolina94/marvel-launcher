import React from 'react'
import {Box} from "@chakra-ui/react";

export const SelectionSignal = () => {

  const style = {
    borderColor: '#C89B3C',
    borderWidth: '2px'
  }

  return (
    <Box
      transform='rotate(45deg)'
      boxSize='32px'
      {...style}
    >
      <Box {...style} boxSize='24px'>
        <Box {...style} boxSize='16px' />
      </Box>
    </Box>
  )
}