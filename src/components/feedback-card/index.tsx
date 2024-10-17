import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native"
import { useStyles } from "react-native-unistyles"

import Spacer from "../spacer"
import Typography from "../typography"
import { stylesheet } from "./styles"

export type EmptyEmployeesListProps = TouchableOpacityProps & {
  contentContainerStyle?: ViewProps["style"]
  message: string
  buttonLabel: string
}

const EmptyEmployeesList = ({
  contentContainerStyle,
  style,
  message,
  buttonLabel,
  ...rest
}: EmptyEmployeesListProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Typography heading="h3">{message}</Typography>

      <Spacer size={10} />
      <TouchableOpacity style={[styles.button, style]} {...rest}>
        <Typography heading="h3">{buttonLabel}</Typography>
      </TouchableOpacity>
    </View>
  )
}

export default EmptyEmployeesList
