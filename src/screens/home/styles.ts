import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: theme.spacing.regular["20"],
  },
}))
