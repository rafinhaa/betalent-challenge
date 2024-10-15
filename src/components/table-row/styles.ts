import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.gray["10"],
    paddingHorizontal: theme.spacing.regular["16"],
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: theme.colors.white.neutral,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  image: {
    width: 34,
    height: 34,
    borderRadius: 21.5,
  },
  icon: {
    marginLeft: "auto",
  },
  content: {
    gap: theme.spacing.regular["16"],
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
