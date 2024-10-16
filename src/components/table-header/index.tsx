import React, { memo } from "react"
import { useTranslation } from "react-i18next"
import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { Typography } from ".."
import { stylesheet } from "./styles"

export type TableHeaderProps = object

const TableHeader = () => {
  const { t } = useTranslation()
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography heading="h2">{t("photo")}</Typography>
        <Typography heading="h2">{t("name")}</Typography>
      </View>
      <View testID="circle" style={styles.icon} />
    </View>
  )
}

export default memo(TableHeader)
