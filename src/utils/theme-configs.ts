import { DefaultTheme } from "@react-navigation/native";



export const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1a1c29',
  },
}