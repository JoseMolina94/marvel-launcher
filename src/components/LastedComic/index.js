import React from 'react'
import { useGetLastedComic } from "../../hooks/useGetLastedComic";
import { Grid, Text, Skeleton } from '@chakra-ui/react'
import { sectionStyles } from "../../styles";

export const LastedComic = () => {
  const {
    comic,
    loading
  } = useGetLastedComic()

  return (
    <Grid
      {...sectionStyles}
      w='100%'
      h='100%'
      backgroundImage={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
      backgroundRepeat='no-repeat'
      backgroundSize='contain'
      backgroundPosition='center'
      overflow='hidden'
      alignItems='flex-end'
    >
      {
        !loading ?
          <Grid
            opacity='80%'
            bg='#0E0F10'
          >
            <Text fontSize='2xl'>
              A new Comic "{comic?.title}" is here!!
            </Text>
          </Grid>
          : <Skeleton w='100%' h='100%' />
      }
    </Grid>
  )
}