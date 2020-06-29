import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

import { red } from '../config/colors'

export default ({
  backgroundColor = '#ffffff',
  color = red,
  transparent = false
}) => (
  <View style={{
    ...styles.container,
    backgroundColor: transparent ? `${backgroundColor}cc` : backgroundColor
  }}>
    <ActivityIndicator
      color={color}
      animating
      size="large"
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999999,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
