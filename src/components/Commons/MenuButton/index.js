import React from 'react'
import {Grid, Text, Box} from "@chakra-ui/react";
import {SelectionSignal} from "../SelectionSignal";
import Link from 'next/link'
import {useRouter} from "next/router";

export const MenuButton = props => {
  const {
    label = '',
    handler = () => {},
    height = 'auto',
    withSelector = false,
    route = ''
  } = props
  const router = useRouter()

  const ButtonBody = () => {
    return (
      <Grid
        bgGradient='linear(to-t, #221E1F, black)'
        h={height}
        alignItems='center'
        justifyContent='center'
        position='relative'
        onClick={() => {
          !route && handler()
        }}
      >
        {
          (withSelector && router.route === route) &&
          <Box
            position='absolute'
            top={-4}
            right='43%'
          >
            <SelectionSignal />
          </Box>
        }

        <Text
          fontSize={24}
          color={
            router.route === route ? '#C89B3C' : 'white'
          }
        >
          {label}
        </Text>
      </Grid>
    )
  }

  return ( route ?
    <Link
      href={route}
    >
      <ButtonBody />
    </Link>
      : <ButtonBody />
  )
}