import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    borderWidth: 1,
    borderColor: theme.colors.gray["10"],
    padding: theme.spacing.little["8"],
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
}))
