import React from 'react'
import { TouchableOpacity, ActivityIndicator, Platform } from 'react-native'

import Text from './Text'

const Button = ({
  style = null,
  textStyle = null,
  fullWidth = true,
  transparent = false,
  isRounded = true,
  text,
  backgroundColor = '#1a237e',
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
      borderWidth: 1,
      borderColor: transparent
        ? disabled || isLoading
          ? '#999'
          : backgroundColor
        : '#fff',
      borderStyle: 'solid',
      borderRadius: !isRounded ? 7 : 25,
      height: 50,
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
              marginTop: Platform.OS === 'ios' ? 5 : 0,
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
  backgroundColor = '#1a237e',
  onPress = () => null,
  icon,
  size = 60,
  ...props
}) => (
  <TouchableOpacity
    style={{
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
)

export default Button
