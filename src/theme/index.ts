import { UnistylesRegistry } from "react-native-unistyles"

import { lightTheme } from "./themes"

UnistylesRegistry.addThemes({
  light: lightTheme,
}).addConfig({
  adaptiveThemes: true,
})
