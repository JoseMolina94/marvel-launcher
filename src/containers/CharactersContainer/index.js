import React from 'react'
import {useGetCharactersList} from "../../hooks/useGetCharactersList";
import {Grid} from "@chakra-ui/react";
import {MoviesGoals} from "../../components/MoviesGoals";
import {Video} from "../../components/Commons/Video";
import {Poster} from "../../components/Commons/Poster";
import {CharactersList} from "../../components/CharactersList";
import {Paginate} from "../../components/Commons/Paginate";

export const CharactersContainer = () => {
  const {
    characters,
    paginate,
    loading
  } = useGetCharactersList()

  return (
    <Grid gap={4}>
      <Grid
        gap={4}
        templateColumns='1fr 1.25fr'
      >
        <MoviesGoals />
        <Grid
          gap={4}
          templateColumns='repeat(2, 1fr)'
        >
          <Video
            src='https://www.youtube.com/embed/oDav-JfidL0'
            title='Injustice 2: Announce Trailer'
          />
          <Poster
            title='Secret Invasion'
            src='https://static3.cbrimages.com/wordpress/wp-content/uploads/2022/01/Secret-Invasion-Beard-Nick-Fury.jpeg'
          />
        </Grid>
      </Grid>

      <CharactersList
        characters={characters}
        loading={loading}
      />

      <Paginate {...paginate} />
    </Grid>
  )
}