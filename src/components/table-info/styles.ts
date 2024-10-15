import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    overflow: "hidden",
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashed: {
    borderWidth: 1,
    borderColor: theme.colors.gray["10"],
    borderStyle: "dashed",
  },
}))
