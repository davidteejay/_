import React from 'react'
import {
  TouchableOpacity, ActivityIndicator, SafeAreaView,
} from 'react-native'

import Text from './Text'
import { darkRed } from '../config/colors'
import globalStyles from '../config/globalStyles'

const Button = ({
  style = null,
  textStyle = null,
  fullWidth = true,
  transparent = false,
  isRounded = true,
  text,
  backgroundColor = darkRed,
  color = '#fff',
  isLoading = false,
  disabled = false,
  onPress = () => null,
  IconComponent = null,
  ...props
}) => (
  <TouchableOpacity
    style={{
      paddingHorizontal: 20,
      borderWidth: transparent ? 1 : 0,
      borderColor: transparent
        ? disabled || isLoading
          ? '#999'
          : backgroundColor
        : '#fff0',
      borderStyle: 'solid',
      borderRadius: !isRounded ? 7 : 25,
      height: 45,
      width: fullWidth ? '100%' : 'auto',
      backgroundColor: transparent ? 'transparent'
        : disabled
          ? '#999'
          : backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
    onPress={onPress}
    activeOpacity={disabled ? 1 : 0.5}
    disabled={disabled || isLoading}
    {...props}
  >
      {isLoading
        ? <ActivityIndicator animating color={color} size="small" />
        : IconComponent ?? (
          <Text
            style={{
              color: transparent
                ? disabled
                  ? '#999'
                  : backgroundColor
                : disabled
                  ? '#555'
                  : color,
              fontSize: 15,
              // marginTop: Platform.OS === 'ios' ? 5 : 0,
              ...textStyle,
            }}
          >
            {text}
          </Text>
        )}
  </TouchableOpacity>
)

export const FAB = ({
  style = null,
  backgroundColor = darkRed,
  onPress = () => null,
  icon,
  size = 60,
  ...props
}) => (
  <SafeAreaView>
    <TouchableOpacity
      style={{
        ...globalStyles.shadow,
        position: 'absolute',
        bottom: 10,
        right: 30,
        borderRadius: size / 2,
        height: size,
        width: size,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 5,
        ...style,
      }}
      onPress={onPress}
      {...props}
    >
      {props.children && props.children}
    </TouchableOpacity>
  </SafeAreaView>
)

export default Button
