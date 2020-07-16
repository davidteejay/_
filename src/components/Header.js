import React from 'react'
import {
  View, StyleSheet, TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Text from './Text'
import globalStyles from '../config/globalStyles'

const Header = ({
  navigation,
  title = '',
  backgroundColor = 'transparent',
  color = '#333',
  back = false,
  hasSearch = false,
  backFunc = null,
  RightComponent = null,
  style = null,
}) => (
  <SafeAreaView>
    <View style={{
      backgroundColor,
      ...styles.container,
      ...style,
    }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (backFunc) backFunc()
          else if (back) navigation.goBack()
          else navigation.openDrawer()
        }}
      >
        <Ionicons
          name={back ? 'ios-arrow-back' : 'ios-menu'}
          size={22}
          color={color}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          ...styles.headerText,
          color,
        }}
      >
        {title}
      </Text>
      {hasSearch ? (
        <TouchableOpacity
          style={styles.button}
        >
          <Ionicons
            name="ios-search"
            size={22}
            color={color}
          />
        </TouchableOpacity>
      ) : RightComponent || <View style={{ width: 40 }} />}
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    ...globalStyles.shadow,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
})

export default Header
