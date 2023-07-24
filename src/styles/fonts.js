import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
          font-family: "Fritz Regular";
          src: url("https://db.onlinewebfonts.com/t/89ca59e17b453acf05ac99ecd0ebc1b0.eot");
          src: url("https://db.onlinewebfonts.com/t/89ca59e17b453acf05ac99ecd0ebc1b0.eot?#iefix")format("embedded-opentype"),
          url("https://db.onlinewebfonts.com/t/89ca59e17b453acf05ac99ecd0ebc1b0.woff2")format("woff2"),
          url("https://db.onlinewebfonts.com/t/89ca59e17b453acf05ac99ecd0ebc1b0.woff")format("woff"),
          url("https://db.onlinewebfonts.com/t/89ca59e17b453acf05ac99ecd0ebc1b0.ttf")format("truetype"),
          url("https://db.onlinewebfonts.com/t/89ca59e17b453acf05ac99ecd0ebc1b0.svg#Fritz Regular")format("svg");
      }
      `}
  />
)
export default Fonts