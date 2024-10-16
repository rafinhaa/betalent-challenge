import React, { memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { TextInput, TextInputProps, View, ViewProps } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon, { IconProps } from "../icon"
import { stylesheet } from "./styles"

export type InputProps = TextInputProps & {
  icon?: IconProps["name"]
  contentContainerStyle?: ViewProps["style"]
}

const Input = ({
  contentContainerStyle,
  style: inputStyle,
  icon,
  onChangeText,
  ...rest
}: InputProps) => {
  const [value, setValue] = useState("")

  const { styles, theme } = useStyles(stylesheet)
  const { t } = useTranslation()

  const iconName = icon || "magnify"
  const clearValue = value.length > 0

  const handleChangeText = (text: string) => {
    setValue(text)
    onChangeText && onChangeText(text)
  }

  const handleClearInput = useCallback(() => {
    setValue("")
    onChangeText && onChangeText("")
  }, [onChangeText])

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Icon name={iconName} size="lg" color="secondary" />
      <TextInput
        placeholder={t("search")}
        placeholderTextColor={theme.colors.black.neutral}
        style={[styles.input, inputStyle]}
        autoCapitalize="none"
        autoComplete={"off"}
        autoCorrect={false}
        value={value}
        onChangeText={handleChangeText}
        {...rest}
      />
      {clearValue && (
        <Icon
          name="close"
          size="lg"
          color="secondary"
          onPress={handleClearInput}
        />
      )}
    </View>
  )
}

export default memo(Input)
