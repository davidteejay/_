import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { sendTicket } from '../actions/support'

import Text from '../components/Text'
import Header from '../components/Header'
import Input, { Dropdown } from '../components/Input'
import Button from '../components/Button'

const Support = ({ navigation }) => {
  const [data, setData] = useState({
    title: '',
    message: '',
    priority: 'medium',
  })

  const handleData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    })
  }

  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.loading)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Support"
        />
        <ScrollView style={styles.content}>
          <Text style={styles.title}>
            Fill this form to send a message to support.
            A response will be sent to you within 24 hours.
          </Text>
          <Input
            value={data.title}
            onChangeText={(val) => handleData('title', val)}
            placeholder="Title"
          />
          <Dropdown
            placeholder="Select Priority"
            selectedValue={data.priority}
            onValueChange={(val) => handleData('priority', val)}
            items={[
              { label: 'Low', value: 'low' },
              { label: 'Medium', value: 'medium' },
              { label: 'High', value: 'high' },
            ]}
          />
          <Input
            value={data.message}
            onChangeText={(val) => handleData('message', val)}
            placeholder="Message"
            multiline
          />
          <Button
            text="Send"
            isLoading={loading}
            disabled={data.title === '' || data.message === ''}
            onPress={() => dispatch(sendTicket(data))}
          />
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
    fontSize: 14,
    marginBottom: 15,
  },
})

export default Support
