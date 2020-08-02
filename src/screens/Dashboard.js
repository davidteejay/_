import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import globalStyles from '../config/globalStyles'
import Text, { BoldText, LightText } from '../components/Text'
import Header from '../components/Header'

const Dashboard = ({ navigation }) => {
  const links = [
    { label: 'Claims Request', to: '' },
    { label: 'New Policy', to: 'InsuranceMgt' },
    { label: 'Renewal Endorsement', to: 'RenewalEndorsement' },
    { label: 'Additional Endorsement', to: 'AdditionalEndorsement' },
    { label: 'Cancellation Endorsement', to: 'CancellationEndorsement' },
    { label: 'Deletion Endorsement', to: 'DeletionEndorsement' },
    { label: 'Verify Insurance', to: '' },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ScrollView style={styles.content}>
          <BoldText style={styles.title}>Welcome, Chii</BoldText>
          <Text style={styles.subtitle}>Broker ID: #234512</Text>
          <View style={styles.row}>
            <View style={styles.card}>
              <BoldText style={styles.number}>31,245</BoldText>
              <LightText style={styles.text}>Total Number of Policies</LightText>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{ ...styles.card, width: '48%' }}>
              <BoldText style={styles.number}>31%</BoldText>
              <LightText style={styles.text}>Gross Claims Ratio</LightText>
            </View>
            <View style={{ ...styles.card, width: '48%' }}>
              <BoldText style={styles.number}>24%</BoldText>
              <LightText style={styles.text}>Gross Commission</LightText>
            </View>
          </View>
          <View style={styles.row}>
            {links.map(({ label, to }) => (
              <TouchableOpacity
                style={[styles.card, styles.row]}
                key={to === '' ? label : to}
                onPress={() => navigation.navigate(to)}
              >
                <LightText style={styles.text}>{label}</LightText>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={22}
                  color="#333"
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ height: 20 }} />
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
  title: {
    fontSize: 26,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    ...globalStyles.shadow,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  number: {
    fontSize: 32,
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
  },
})

export default Dashboard
