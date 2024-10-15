import { memo } from "react"
import { View, ViewProps } from "react-native"

export type spaceProps = ViewProps & {
  size: number
}

const space = ({ size, style, ...rest }: spaceProps) => {
  return <View style={[{ height: size }, style]} {...rest} />
}

export default memo(space)
