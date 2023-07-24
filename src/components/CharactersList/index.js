import React from 'react'
import { Grid } from "@chakra-ui/react";
import { CharacterCard } from "../CharacterCard";
import { CharacterListLoader } from "./loader";

export const CharactersList = props => {
  const {
    characters,
    loading
  } = props

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        sm: '1fr 1fr',
        lg: 'repeat(5, 1fr)'
      }}
      gap={4}
    >
      { !loading ?
        characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))
        : <CharacterListLoader />
      }
    </Grid>
  )
}