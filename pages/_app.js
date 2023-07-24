import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { MainLayout } from "../src/components/layouts/MainLayout";
import { extendTheme } from '@chakra-ui/react'
import Fonts from '../src/styles/fonts'

function MyApp({ Component, pageProps }) {
  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }
  const theme = extendTheme({ config })

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
