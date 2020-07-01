import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import globalStyles from '../config/globalStyles'
import Text, { BoldText, LightText } from '../components/Text'
import Header from '../components/Header'

const Insurance = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Insurance Management"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default Insurance
