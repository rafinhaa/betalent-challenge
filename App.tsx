import { StatusBar } from "expo-status-bar"
import { useTranslation } from "react-i18next"
import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

import "@/locales"
import "@/theme"

export default function App() {
  const { t } = useTranslation()
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text>{t("startingMessage")}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[0],
    alignItems: "center",
    justifyContent: "center",
  },
}))
