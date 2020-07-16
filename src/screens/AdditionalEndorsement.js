import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView,
  ScrollView,
} from 'react-native'

// import Text from '../components/Text'
import Header from '../components/Header'
import Input, { Dropdown } from '../components/Input'
import Button from '../components/Button'

const AdditionalEndorsement = ({ navigation }) => {
  const [policyNumber, setPolicyNumber] = useState('')
  const [form, viewForm] = useState(false)
  const [formData, setFormData] = useState({
    customerName: 'Chibuokem Onyekwelu',
    rates: '10',
    insuranceDuration: '60',
    clauses: '',
    category: 'Category 1',
  })

  const handleFormData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          back
          navigation={navigation}
          title="Addtional Endorsement"
        />
        <ScrollView style={styles.content}>
          <Input
            value={policyNumber}
            onChangeText={(val) => setPolicyNumber(val)}
            placeholder="Enter Policy Number"
            keyboardType="numeric"
          />
          <Button
            text="Search"
            fullWidth={false}
            style={styles.inputButton}
            onPress={() => viewForm(true)}
          />
          {form && (
            <View style={styles.form}>
              <Input
                value={formData.customerName}
                onChangeText={(val) => handleFormData('customerName', val)}
                editable={false}
                label="Customer Name"
              />
              <Input
                value={policyNumber}
                onChangeText={(val) => setPolicyNumber(val)}
                editable={false}
                label="Policy Number"
              />
              <Input
                value={formData.rates}
                onChangeText={(val) => handleFormData('rates', val)}
                editable={false}
                label="Rates"
              />
              <Input
                value={formData.insuranceDuration}
                onChangeText={(val) => handleFormData('insuranceDuration', val)}
                editable={false}
                label="Insurance Duration"
              />
              <Input
                value={formData.clauses}
                onChangeText={(val) => handleFormData('clauses', val)}
                editable={false}
                label="Clauses"
              />
              <Dropdown
                selectedValue={formData.category}
                onValueChange={(val) => handleFormData('rates', val)}
                items={[
                  { label: 'Category 1', value: 'Category 1' },
                  { label: 'Category 2', value: 'Category 2' },
                ]}
                label="Category"
              />
            </View>
          )}
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
    padding: 30,
  },
  inputButton: {
    width: '40%',
    alignSelf: 'center',
  },
  form: {
    marginTop: 30,
  },
})

export default AdditionalEndorsement
