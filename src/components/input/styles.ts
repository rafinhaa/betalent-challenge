import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.gray[5],
    paddingHorizontal: theme.spacing.regular["16"],
    paddingVertical: 14,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.little["4"],
  },
  input: {
    flex: 1,
    fontFamily: theme.fonts.regular,
  },
}))
