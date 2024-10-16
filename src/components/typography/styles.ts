import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => {
  const defaultHeading = {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    lineHeight: 24.42,
  }

  return {
    text: {
      color: theme.colors.black.neutral,

      variants: {
        heading: {
          h1: defaultHeading,
          h2: {
            fontFamily: theme.fonts.medium,
            fontSize: 16,
            lineHeight: 19.54,
          },
          h3: {
            fontFamily: theme.fonts.regular,
            fontSize: 16,
            lineHeight: 19.09,
          },
          badge: {
            fontFamily: theme.fonts.badge,
            color: theme.colors.white.neutral,
            fontSize: 10,
            lineHeight: 12.1,
          },
          default: defaultHeading,
        },
      },
    },
  }
})
