import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray[5],
    borderRadius: 999,
    width: 45,
    height: 45,
  },
  notifications: {},
  badge: {
    position: "absolute",
    top: -8,
    right: -4,
    padding: 4,
    backgroundColor: theme.colors.blue.primary,
    borderRadius: 999,
    zIndex: 1,
  },
}))
