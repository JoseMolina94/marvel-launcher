import React from 'react'
import {Grid} from "@chakra-ui/react";
import { LastedComic } from "../../components/LastedComic";
import { Video } from "../../components/Commons/Video";
import { Poster } from "../../components/Commons/Poster";
import { AdvertisingPoster } from "../../components/AdvertisingPoster";

export const HomeContainer = () => {

  return (
    <Grid
      templateColumns='0.5fr 1fr'
      h='500px'
      gap={4}
    >
      <LastedComic />

      <Grid gap={4} templateRows='0.3fr 1fr'>
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

        <AdvertisingPoster
          title='Marvel Battle'
          description='Enter the world of Marvel with your favorite hero, villain or anti-hero, with the new multiplayer game'
          advertising='marvel-battle.jpg'
        />
      </Grid>
    </Grid>
  )
}