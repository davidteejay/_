import React, { useState } from 'react'
import {
  View, SafeAreaView, StyleSheet,
  KeyboardAvoidingView, Platform, TouchableOpacity,
} from 'react-native'

import Text from '../components/Text'
import Input from '../components/Input'
import { darkRed } from '../config/colors'
import Button from '../components/Button'

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    brokerId: '',
    password: '',
  })

  const handleData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    })
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Text style={{ color: '#fff' }}>Logo</Text>
          </View>
          <Text style={styles.title}>Login to your Portal</Text>
          <Input
            value={data.brokerId}
            onChangeText={(val) => handleData('brokerId', val)}
            placeholder="Broker ID"
          />
          <Input
            value={data.password}
            onChangeText={(val) => handleData('password', val)}
            placeholder="Password"
            secureTextEntry
          />
          <Button
            text="Login"
            style={styles.button}
          />
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 30,
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: darkRed,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 17,
  },
})

export default Login
