import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView,
  ScrollView, TouchableOpacity, Modal,
  Alert,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// import Text from '../components/Text'
import Header from '../components/Header'
import Input, { DatePicker } from '../components/Input'
import Button from '../components/Button'
import Text, { BoldText } from '../components/Text'
import globalStyles from '../config/globalStyles'

const CancellationEndorsement = ({ navigation }) => {
  const [policyNumber, setPolicyNumber] = useState('')
  const [form, viewForm] = useState(false)
  const [visible, setVisible] = useState(false)

  const [cancelData, setCancelData] = useState({
    reason: '',
    cancellationDate: null,
  })

  const handleCancelData = (key, value) => {
    setCancelData({
      ...cancelData,
      [key]: value,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          back
          navigation={navigation}
          title="Cancellation Endorsement"
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
                  text="Cancel"
                  fullWidth={false}
                  style={styles.button}
                  onPress={() => {
                    Alert.alert(
                      'Cancel Policy',
                      'Are you sure you want to cancel this policy?',
                      [{ text: 'No' }, { text: 'Yes', onPress: () => setVisible(true) }],
                    )
                  }}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
        onDismiss={() => setVisible(false)}
      >
        <View style={globalStyles.modalCover}>
          <View style={globalStyles.modal}>
            <TouchableOpacity
              style={globalStyles.closeModal}
              onPress={() => setVisible(false)}
            >
              <Ionicons
                name="ios-close"
                color="#333"
                size={26}
              />
            </TouchableOpacity>
            <ScrollView style={globalStyles.modalContent}>
              <DatePicker
                selectedDate={cancelData.cancellationDate}
                onDateChange={(val) => handleCancelData('cancellationDate', val)}
                placeholder="Cancellation Date"
              />
              <Input
                value={cancelData.reason}
                onChangeText={(val) => handleCancelData('reason', val)}
                multiline
                placeholder="Reason for cancellation"
                style={{ height: 100 }}
              />
              <Button
                text="Submit"
                fullWidth={false}
                style={{ ...styles.button, alignSelf: 'center' }}
                onPress={() => setVisible(false)}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
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

export default CancellationEndorsement
