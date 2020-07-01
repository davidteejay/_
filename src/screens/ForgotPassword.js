import React, { useState } from 'react'
import {
  View, SafeAreaView, StyleSheet,
  KeyboardAvoidingView, Platform, TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Text from '../components/Text'
import Input from '../components/Input'
import Button from '../components/Button'

const ForgotPassword = ({ navigation }) => {
  const [data, setData] = useState({
    brokerId: '',
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <MaterialIcons
              color="#333"
              size={22}
              name="keyboard-backspace"
            />
          </TouchableOpacity>
          <View style={styles.body}>
            <Text style={styles.title}>Forgot Password</Text>
            <Input
              value={data.brokerId}
              onChangeText={(val) => handleData('brokerId', val)}
              placeholder="Broker ID"
            />
            <Button
              text="Submit"
              style={styles.button}
            />
          </View>
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
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  body: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 50,
  },
  button: {
    marginTop: 20,
  },
})

export default ForgotPassword
