import { useTranslation } from "react-i18next"
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native"
import { useStyles } from "react-native-unistyles"

import { Spacer, Typography } from "@/components"

import { stylesheet } from "./styles"

export type TryAgainProps = TouchableOpacityProps & {
  contentContainerStyle?: ViewProps["style"]
}

const TryAgain = ({ contentContainerStyle, style, ...rest }: TryAgainProps) => {
  const { t } = useTranslation()
  const { styles } = useStyles(stylesheet)

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Typography heading="h3">{t("error")}</Typography>

      <Spacer size={10} />
      <TouchableOpacity style={[styles.button, style]} {...rest}>
        <Typography heading="h3">{t("tryAgain")}</Typography>
      </TouchableOpacity>
    </View>
  )
}

export default TryAgain
