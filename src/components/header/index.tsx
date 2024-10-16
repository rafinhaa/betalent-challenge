import React, { memo } from "react"
import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon from "../icon"
import Typography from "../typography"
import { stylesheet } from "./styles"

export type InputProps = object

const Input = (_props: InputProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={[styles.container]}>
      <View style={styles.avatar}>
        <Typography heading="h3">CG</Typography>
      </View>
      <View style={styles.notifications}>
        <View style={styles.badge}>
          <Typography heading="badge">02</Typography>
        </View>
        <Icon name="bell-outline" color="secondary" />
      </View>
    </View>
  )
}

export default memo(Input)
