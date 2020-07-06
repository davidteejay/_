import React from 'react'
import { Text as NativeText } from 'react-native'

export default ({ style, ...props }) => (
  <NativeText
    style={{
      fontFamily: 'Montserrat-Medium',
      color: '#333',
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
      fontFamily: 'Montserrat-Regular',
      color: '#333',
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
      color: '#333',
      ...style,
    }}
    {...props}
  >
    {props.children}
  </NativeText>
)
