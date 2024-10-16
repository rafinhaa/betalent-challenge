import { memo } from "react"
import { useTranslation } from "react-i18next"
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  View,
  ViewProps,
} from "react-native"
import { useStyles } from "react-native-unistyles"

import Typography from "../typography"
import { stylesheet } from "./styles"

export type LoadingProps = ActivityIndicatorProps & {
  contentContainerStyle?: ViewProps["style"]
  loading?: boolean
  showLabel?: boolean
  label?: string
}

const Loading = ({
  loading = true,
  showLabel = true,
  label,
  contentContainerStyle,
  ...rest
}: LoadingProps) => {
  const { t } = useTranslation()
  const { styles, theme } = useStyles(stylesheet)

  return (
    loading && (
      <View style={[styles.container, contentContainerStyle]}>
        <ActivityIndicator
          size="large"
          color={theme.colors.blue.primary}
          {...rest}
        />
        {showLabel && (
          <Typography heading="h2">{label || t("loading")}</Typography>
        )}
      </View>
    )
  )
}

export default memo(Loading)
