import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.gray["10"],
    padding: 14,
    paddingRight: 27,
    backgroundColor: theme.colors.blue[10],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    flex: 1,
  },
  icon: {
    height: 8,
    width: 8,
    backgroundColor: theme.colors.black.neutral,
    borderRadius: 4,
  },
}))
