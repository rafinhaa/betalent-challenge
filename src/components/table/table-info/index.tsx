import { memo } from "react"
import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Typography from "../../typography"
import { stylesheet } from "./styles"

export type TableItemProps = {
  label: string
  value: string
}

const TableItem = ({ label, value }: TableItemProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <View style={styles.contentRow}>
        <Typography heading="h2">{label}</Typography>
        <Typography heading="h3">{value}</Typography>
      </View>
      <View style={styles.dashed} />
    </View>
  )
}

export default memo(TableItem)
