import React from 'react'
import {Grid, Image, Text} from "@chakra-ui/react";
import { InfoSquare } from "../Commons/InfoSquare";

export const CharacterCard = props => {
  const {
    character
  } = props

  return (
    <Grid
      gap={4}
      justifyContent='center'
      borderWidth='1px'
      borderRadius='10px'
      borderColor='#3B3B40'
      bg='#0E0F10'
      backgroundImage='url(card-bg.png)'
      color='#F0E6D2'
      h='500px'
      pt={4}
      pb={6}
      _hover={{
        cursor: 'default'
      }}
    >
      <Grid
        backgroundImage='url(marks.svg)'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        alignItems='center'
        justifyContent='center'
        h='57px'
      >
        <Text
          textAlign='center'
          w='85px'
          fontSize='85%'
        >
          {character?.name}
        </Text>
      </Grid>

      <Grid
        boxSize={48}
        backgroundImage='url(level-circle.png)'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          borderRadius='full'
          boxSize={32}
          justifySelf='center'
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
        />
      </Grid>

      <InfoSquare
        label='Comics'
        value={character?.comics?.available}
      />

      <InfoSquare
        label='Movies'
        value={character?.stories?.available}
      />
    </Grid>
  )
}