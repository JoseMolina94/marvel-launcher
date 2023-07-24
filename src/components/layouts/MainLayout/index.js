import React, { useState, useEffect, useRef } from 'react'
import {Grid, Box, Icon} from "@chakra-ui/react";
import {Logo} from "../../Commons/Logo";
import {MenuButton} from "../../Commons/MenuButton";
import {MdSettings, MdNotifications} from "react-icons/md";

export const MainLayout = ({children}) => {
  const [navBarSize, setNavBarSize] = useState(null)
  const navBarRef = useRef(null)
  const borderWidth = 1

  useEffect(() => {
    /*Con esto se el tamaño del navbar superior, en caso de cambios en el codigo del mismo que afecten su tamaño,
    el componente del cuerpo siempre se reajuste automatico*/
    setNavBarSize(navBarRef?.current?.clientHeight || 0)
  }, [navBarRef?.current])

  return (
    <Grid
      fontFamily='Fritz Regular'
      backgroundImage="url('/background.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize='cover'
    >
      <Grid
        ref={navBarRef}
        w='100%'
        color='white'
        bg='black'
        templateColumns='0.7fr 1fr 1.5fr 0.25fr'
        alignItems='center'
        borderBottom={`solid ${borderWidth}px #221E1F`}
      >
        <Logo />
        <Grid
          gap={4}
          templateColumns='1fr 1fr'
        >
          <MenuButton
            label='Home'
            height={`${navBarSize}px`}
            withSelector
            route='/'
          />
          <MenuButton
            label='Characters'
            height={`${navBarSize}px`}
            withSelector
            route='/characters'
          />
        </Grid>
        <Box />
        <Grid templateColumns='repeat(2, 1fr)'>
          <Icon as={MdNotifications} boxSize={6} color='#C89B3C' />
          <Icon as={MdSettings} boxSize={6} />
        </Grid>
      </Grid>

      <Box
        h={`calc(100vh - ${navBarSize + borderWidth}px)`}
        color='white'
        p={12}
        overflowY='auto'
      >
        <Box>
          {children}
        </Box>
      </Box>
    </Grid>
  )
}