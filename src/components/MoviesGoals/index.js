import React, { useState, useEffect, useRef } from 'react'
import { Grid, Box, Text, Image } from "@chakra-ui/react";
import { sectionStyles } from "../../styles";

export const MoviesGoals = () => {
  const [goal, setGoal] = useState(0)
  const [current, setCurrent] = useState(0)
  const [barSize, setBarSize] = useState(0)
  const containerRef = useRef(null)

  const hollywoodDecides = ({max, min}) => {
    const goalValue = Math.random() * (max - min) + min
    const currentValue = Math.random() * (goalValue - 1) + 1

    setGoal(parseInt(goalValue))
    setCurrent(parseInt(currentValue))
  }

  const getStats = () => {
    const stat = (current / goal) * 100
    return (stat * barSize) / 100
  }

  useEffect(() => {
    hollywoodDecides({
      max: 1000,
      min: 200
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBarSize(containerRef?.current?.clientWidth || 0)
    })
  }, [])

  useEffect(() => {
    setBarSize(containerRef?.current?.clientWidth || 0)
  }, [containerRef?.current?.clientWidth])

  return (
    <Grid
      {...sectionStyles}
      alignItems='center'
      gap={2}
      templateRows='50px 120px'
    >
      <Text
        fontSize='lg'
        textAlign='center'
        alignSelf='flex-end'
      >
        PROGRESS OF FILMS PRODUCED
      </Text>

      <Grid
        w='100%'
        h='120px'
      >
        <Grid
          fontSize='10px'
          textAlign='right'
          alignSelf='flex-end'
          color='#C89B3C'
          //pr={2}
          position='relative'
          right='10%'
        >
          <Text>
            {goal} Films
          </Text>
          <Text>
            Production Goal
          </Text>
        </Grid>


        <Grid
          transform='skew(-45deg)'
          h='100%'
          w='80%'
          justifySelf='center'
          alignSelf='center'
          ref={containerRef}
          border='solid 2px #C89B3C'
          p={1}
        >
          <Box
            bg='white'
            position='relative'
            overflow='hidden'
          >
            <Image
              src='separators-bar.png'
              position='absolute'
              w='80%'
              h={containerRef?.current?.clientHeight * 0.95}
              left='10%'
              top={-1}
            />
            <Box
              bg='#22ABBA'
              h='100%'
              w={getStats()}
            />
          </Box>
        </Grid>

        <Grid
          position='relative'
          left={getStats() + 'px'}
          fontSize='10px'
          color='#22ABBA'
          alignSelf='flex-start'
        >
          <Text>
            {current} Films
          </Text>
          <Text>
            Produced
          </Text>
        </Grid>

      </Grid>


    </Grid>
  )
}