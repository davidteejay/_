import React, { useState } from 'react'
import {
  View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity,
  KeyboardAvoidingView, Platform, Modal,
  Alert,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Input, { Dropdown } from '../components/Input'
import Header from '../components/Header'
import globalStyles from '../config/globalStyles'
import Text, { BoldText } from '../components/Text'
import Button from '../components/Button'

const NewPolicy = ({ navigation }) => {
  const [userSearch, setSearch] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [policy, setPolicy] = useState({
    insuredName: '',
    address: '',
    occupation: '',
    periodOfInsurance: {
      type: null,
      startDate: null,
      endDate: null,
      duration: null,
    },
  })

  const [user, setUser] = useState(null)
  const [userModal, setUserModal] = useState(false)

  const handleUserSearch = (key, value) => {
    setSearch({
      ...userSearch,
      [key]: value,
    })
  }

  const handlePolicy = (key, value) => {
    setPolicy({
      ...policy,
      [key]: value,
    })
  }

  const handlePeriodOfInsurance = (key, value) => {
    setPolicy({
      ...policy,
      periodOfInsurance: {
        ...policy.periodOfInsurance,
        [key]: value,
      },
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={styles.container}>
          <Header
            navigation={navigation}
            title="Add New Policy"
            back
          />
          <ScrollView style={styles.content}>
            {!user ? (
              <View style={styles.inputCover}>
                <BoldText style={styles.inputTitle}>Enter User Details</BoldText>
                <Input
                  value={userSearch.name}
                  onChangeText={(val) => handleUserSearch('name', val)}
                  placeholder="Name"
                />
                <Input
                  value={userSearch.email}
                  onChangeText={(val) => handleUserSearch('email', val)}
                  placeholder="Email"
                  keyboardType="email-address"
                />
                <Input
                  value={userSearch.phone}
                  onChangeText={(val) => handleUserSearch('phone', val)}
                  placeholder="Phone"
                  keyboardType="phone-pad"
                />
                <Button
                  text="Search"
                  fullWidth={false}
                  style={styles.inputButton}
                  onPress={() => setUserModal(true)}
                />
              </View>
            ) : (
              <View style={styles.inputCover}>
                <BoldText style={styles.inputTitle}>{user?.name}</BoldText>
                <Text style={styles.inputSubTitle}>
                  {user?.email}
                   &nbsp;|&nbsp;
                  {user?.phone}
                </Text>
              </View>
            )}
            {user && (
              <View style={styles.form}>
                <Input
                  value={policy.insuredName}
                  onChangeText={(val) => handlePolicy('insuredName', val)}
                  placeholder="Insured Name"
                />
                <Input
                  value={policy.address}
                  onChangeText={(val) => handlePolicy('address', val)}
                  placeholder="Address"
                />
                <Input
                  value={policy.occupation}
                  onChangeText={(val) => handlePolicy('occupation', val)}
                  placeholder="Occupation"
                />
                <BoldText style={styles.label}>Period of Insurance</BoldText>
                <Dropdown
                  selectedValue={policy.periodOfInsurance.type}
                  items={[
                    { label: 'Pro rata', value: 'Pro rata' },
                    { label: 'Annual', value: 'Annual' },
                  ]}
                  onValueChange={(val) => handlePeriodOfInsurance('type', val)}
                  placeholder="Select Type"
                />
              </View>
            )}
          </ScrollView>
        </View>
        <Modal
          visible={userModal}
          transparent
          animationType="fade"
          onRequestClose={() => setUserModal(false)}
          onDismiss={() => setUserModal(false)}
        >
          <View style={globalStyles.modalCover}>
            <View style={globalStyles.modal}>
              <TouchableOpacity
                style={globalStyles.closeModal}
                onPress={() => setUserModal(false)}
              >
                <Ionicons
                  name="ios-close"
                  color="#333"
                  size={26}
                />
              </TouchableOpacity>
              <ScrollView style={globalStyles.modalContent}>
                <TouchableOpacity
                  style={styles.userItem}
                  onPress={() => {
                    Alert.alert(
                      '',
                      'Please confirm that the user details are correct',
                      [{ text: 'Cancel' }, {
                        text: 'Confirm',
                        onPress: () => {
                          setUser({
                            name: 'Chibuokem O.',
                            email: 'chibuokem_tolu@hotmail.com',
                            phone: '07038125957',
                          })
                          setUserModal(false)
                        },
                      }],
                    )
                  }}
                >
                  <BoldText style={{ ...styles.inputTitle, marginBottom: 5 }}>
                    Chibuokem Onyekwelu
                  </BoldText>
                  <Text style={styles.inputSubTitle}>
                    chibuokem_tolu@hotmail.com | 07038125957
                  </Text>
                </TouchableOpacity>
                <Button
                  text="Create New Customer"
                  style={styles.modalButton}
                  onPress={() => {
                    setUserModal(false)
                    navigation.navigate('NewCustomer')
                  }}
                />
              </ScrollView>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
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
  inputCover: {
    ...globalStyles.shadow,
    ...globalStyles.card,
    padding: 20,
  },
  inputTitle: {
    fontSize: 17,
    marginBottom: 10,
  },
  inputSubTitle: {
    fontSize: 14,
  },
  inputButton: {
    width: '40%',
    alignSelf: 'center',
  },
  userItem: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  modalButton: {
    width: '60%',
    alignSelf: 'center',
    marginTop: 30,
  },
  label: {
    fontSize: 16,
  },
})

export default NewPolicy
