import React, { memo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Animated, Image, TouchableOpacity, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon from "../../icon"
import Spacer from "../../spacer"
import Typography from "../../typography"
import TableInfo from "../table-info"
import { stylesheet } from "./styles"

export type TableRowProps = {
  data: {
    name: string
    job: string
    admissionDate: string
    phone: string
    image: string
  }
}

const TableRow = ({ data }: TableRowProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const [animation] = useState(new Animated.Value(0))

  const { t } = useTranslation()
  const { styles } = useStyles(stylesheet)

  const handlePressToggleCollapse = () => {
    Animated.timing(animation, {
      toValue: collapsed ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start()
    setCollapsed((oldState) => !oldState)
  }

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 160],
  })

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-180deg"],
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressToggleCollapse}>
        <View style={styles.header}>
          <Image source={{ uri: data.image }} style={styles.image} />
          <Typography heading="h3">{data.name}</Typography>
          <Animated.View
            style={[
              styles.icon,
              { transform: [{ rotate: rotateInterpolate }] },
            ]}
          >
            <Icon name={"chevron-down"} />
          </Animated.View>
        </View>
      </TouchableOpacity>

      <Animated.View style={[styles.content, { height: heightInterpolate }]}>
        <Spacer size={20} />
        <TableInfo label={t("job")} value={data.job} />
        <TableInfo label={t("admissionDate")} value={data.admissionDate} />
        <TableInfo label={t("phone")} value={data.phone} />
      </Animated.View>
    </View>
  )
}

export default memo(TableRow)
