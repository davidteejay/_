import React from 'react'
import {
  View, Text, SafeAreaView, StyleSheet,
} from 'react-native'

const Login = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Login</Text>
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

export default Login
