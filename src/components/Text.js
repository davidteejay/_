import React from 'react'
import { Text as NativeText } from 'react-native'

export default ({ style, ...props }) => (
  <NativeText
    style={{
      fontFamily: 'Montserrat-Regular',
      ...style,
    }}
    {...props}
  >
    {props.children}
  </NativeText>
)

export const LightText = ({ style, ...props }) => (
  <NativeText
    style={{
      fontFamily: 'Montserrat-Light',
      ...style,
    }}
    {...props}
  >
    {props.children}
  </NativeText>
)

export const MediumText = ({ style, ...props }) => (
  <NativeText
    style={{
      fontFamily: 'Montserrat-Medium',
      ...style,
    }}
    {...props}
  >
    {props.children}
  </NativeText>
)

export const BoldText = ({ style, ...props }) => (
  <NativeText
    style={{
      fontFamily: 'Montserrat-Bold',
      ...style,
    }}
    {...props}
  >
    {props.children}
  </NativeText>
)
