import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native'

// import Text from '../components/Text'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'
import Text, { BoldText } from '../components/Text'
import globalStyles from '../config/globalStyles'

const RenewalEndorsement = ({ navigation }) => {
  const [policyNumber, setPolicyNumber] = useState('')
  const [form, viewForm] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          back
          navigation={navigation}
          title="Renewal Endorsement"
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
              <Text style={styles.formTitle}>Policy #9565923</Text>
              <View style={globalStyles.underline} />
              <BoldText style={styles.th}>DESCRIPTION</BoldText>
              <Text style={styles.td}>
                Irure esse enim magna sit cupidatat anim proident.
                Labore officia aliquip est non fugiat laborum id nisi ut cupidatat.
              </Text>
              <BoldText style={styles.th}>EXPIRY DATE</BoldText>
              <Text style={styles.td}>
                30 April, 2021
              </Text>
              <View style={styles.buttonCover}>
                <Button
                  text="Renew"
                  fullWidth={false}
                  style={styles.button}
                  onPress={() => {
                    Alert.alert(
                      'Renew Policy',
                      'Are you sure you want to renew this policy?',
                      [{ text: 'No' }, { text: 'Yes' }],
                    )
                  }}
                />
                <Button
                  text="Edit"
                  fullWidth={false}
                  style={styles.button}
                  onPress={() => navigation.navigate('EditEndorsement')}
                />
              </View>
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
    padding: 20,
  },
  inputButton: {
    width: '40%',
    alignSelf: 'center',
  },
  form: {
    marginTop: 50,
  },
  formTitle: {
    fontSize: 28,
    // marginBottom: 15,
  },
  th: {
    fontSize: 16,
    marginBottom: 10,
  },
  td: {
    marginBottom: 35,
    lineHeight: 20,
  },
  buttonCover: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    width: '45%',
  },
})

export default RenewalEndorsement
