import React from 'react'
import {Grid, Icon, Text} from "@chakra-ui/react";
import {MdNavigateNext, MdNavigateBefore} from "react-icons/md";

export const Paginate = props => {
  const {
    page = 1,
    maxPages = 1,
    onChangePage = (nextPage) => {}
  } = props

  const buttonsStyle = {
    _hover: {
      cursor: 'pointer'
    },
    h: 8,
    w: 8,
    borderRadius: 'full',
    bg: '#C89B3C',
    color: 'black'
  }

  return (
    <Grid
      templateColumns='auto 1fr auto'
      gap={2}
      justifySelf='center'
      alignSelf='center'
      alignContent='center'
    >
      <Icon
        as={MdNavigateBefore}
        {...buttonsStyle}
        onClick={() => onChangePage(-1)}
      />
      <Text fontSize='xl'>
        {page} / {parseInt(maxPages)}
      </Text>
      <Icon
        as={MdNavigateNext}
        {...buttonsStyle}
        onClick={() => onChangePage(1)}
      />
    </Grid>
  )
}