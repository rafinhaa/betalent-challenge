import { memo } from "react"
import { Text, TextProps } from "react-native"
import { UnistylesVariants, useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export type TypographyProps = TextProps & UnistylesVariants<typeof stylesheet>

const Typography = ({ children, heading, style, ...rest }: TypographyProps) => {
  const { styles } = useStyles(stylesheet, { heading })
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  )
}
export default memo(Typography)
