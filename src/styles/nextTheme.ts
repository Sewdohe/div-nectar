import { createTheme, NextUIProvider, Theme, Text } from "@nextui-org/react"

export const darkTheme: Theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#50fa7b',
      pink: '#ff79c6',
      purple: '#bd93f9',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
      background: '#282a36',
      text: '#f8f8f2',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
    },
    space: {},
    fonts: {}
  }
})
