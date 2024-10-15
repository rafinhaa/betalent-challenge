import MCIcon from "@expo/vector-icons/MaterialCommunityIcons"
import { memo } from "react"
import { useStyles } from "react-native-unistyles"

type RestProps = Omit<React.ComponentProps<typeof MCIcon>, "size" | "color">

export type IconProps = RestProps & {
  size?: "md" | "lg" | "xl" | number
  color?: "primary" | "secondary"
}

const Icon = ({ size = "xl", color = "primary", ...rest }: IconProps) => {
  const { theme } = useStyles()

  const colorMap = {
    primary: theme.colors.blue.primary,
    secondary: theme.colors.black.neutral,
  }[color]

  const sizeMap = {
    md: 16,
    lg: 24,
    xl: 32,
  }

  const sizes = typeof size === "number" ? size : sizeMap[size]

  return (
    <MCIcon
      testID={`${rest.name}-icon`}
      color={colorMap}
      size={sizes}
      {...rest}
    />
  )
}

export default memo(Icon)
