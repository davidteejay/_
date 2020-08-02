import React from 'react'
import {
  View, StyleSheet, SafeAreaView,
  ScrollView,
} from 'react-native'

import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import globalStyles from '../config/globalStyles'
import Button, { FAB } from '../components/Button'

const Customer = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Customer Name"
          back
        />
        <ScrollView style={styles.content}>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
})

export default Customer
