import React from 'react'
import {
  View, StyleSheet, SafeAreaView, TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'

import Text, { BoldText, LightText } from './Text'
import { darkRed } from '../config/colors'
import { logout } from '../actions/auth'

const links = [
  { label: 'Dashboard', to: 'DashboardStack' },
  { label: 'Insurance', to: 'InsuranceStack' },
  { label: 'Customer Policies', to: 'CustomerPoliciesStack' },
  { label: 'Claims', to: 'ClaimsStack' },
  { label: 'Notifications', to: 'NotificationsStack' },
  { label: 'Documents', to: 'DocumentsStack' },
  { label: 'Enquiries (Support)', to: 'SupportStack' },
  { label: 'Customers', to: 'CustomersStack' },
  { label: 'Staff', to: 'StaffStack' },
  // { label: 'Insights', to: 'InsightsStack' },
  { label: 'FAQs', to: 'FAQsStack' },
]

const Drawer = ({ navigation }) => {
  const { navigate, state: { index } } = navigation
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.topPanel}>
          <View style={styles.logo} />
          <BoldText style={styles.topText}>Broker ID: #234512</BoldText>
          <TouchableOpacity>
            <LightText style={styles.topBottomText}>View Profile</LightText>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          {links.map(({ label, to }, i) => (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigate(to)}
              key={to}
            >
              <Text
                style={index === i
                  ? { ...styles.menuItemText, color: darkRed }
                  : styles.menuItemText}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.menuItem, styles.logout]}
        onPress={() => {
          dispatch(logout())
          navigate('Auth')
        }}
      >
        <Text style={{ ...styles.menuItemText, color: '#f00' }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {},
  topPanel: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  logo: {
    marginVertical: 20,
    backgroundColor: darkRed,
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  topText: {
    fontSize: 17,
    marginTop: 5,
  },
  topBottomText: {
    fontSize: 14,
    marginTop: 5,
  },
  menu: {
    marginTop: 30,
  },
  menuItem: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
  logout: {
    position: 'absolute',
    left: 0,
    bottom: 30,
    width: '100%',
  },
})

export default Drawer
