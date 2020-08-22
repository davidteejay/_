import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity, Modal, RefreshControl,
} from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'

import { getAllStaff, addStaff as addNewStaff } from '../actions/staff'

import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import globalStyles from '../config/globalStyles'
import Button, { FAB } from '../components/Button'
import Input, { Dropdown } from '../components/Input'
import { darkRed } from '../config/colors'

const StaffItem = ({ showStaff }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={showStaff}
    >
      <BoldText style={styles.itemTitle}>Staff Name</BoldText>
      <Text style={styles.itemSubtitle}>
        Staff Role | staff@email.com
      </Text>
    </TouchableOpacity>
  )
}

const n = 8

const StaffMgt = ({ navigation }) => {
  const [staffModal, setStaffModal] = useState(false)
  const [addStaff, setAddStaff] = useState(false)
  const [newStaff, setNewStaff] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    email: '',
  })

  const dispatch = useDispatch()
  const { loading: { loading, refreshing }, staff: { all } } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllStaff())
  }, [])

  const showStaffModal = () => {
    setAddStaff(false)
    setStaffModal(true)
  }

  const showAddStaffModal = () => {
    setAddStaff(true)
    setStaffModal(true)
  }

  const handleSetNewStaff = (key, value) => {
    setNewStaff({
      ...newStaff,
      [key]: value,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Staff"
          hasSearch
        />
        <ScrollView
          style={styles.content}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              colors={[darkRed]}
              tintColor={darkRed}
              onRefresh={() => dispatch(getAllStaff())}
            />
          )}
        >
          {[...Array(n)].map((e, i) => (
            <StaffItem
              key={i}
              showStaff={showStaffModal}
            />
          ))}
        </ScrollView>
      </View>
      <FAB
        backgroundColor="#fff"
        onPress={showAddStaffModal}
      >
        <MaterialIcons
          name="add"
          size={22}
          color="#333"
        />
      </FAB>
      <Modal
        visible={staffModal}
        animationType="fade"
        transparent
        onDismiss={() => setStaffModal(false)}
        onRequestClose={() => setStaffModal(false)}
      >
        <View style={globalStyles.modalCover}>
          <View style={globalStyles.modal}>
            <TouchableOpacity
              style={globalStyles.closeModal}
              onPress={() => setStaffModal(false)}
            >
              <Ionicons
                name="ios-close"
                color="#333"
                size={26}
              />
            </TouchableOpacity>
            <ScrollView style={globalStyles.modalContent}>
              {addStaff
                ? (
                  <>
                    <Text style={styles.formTitle}>Add New Staff</Text>
                    <Input
                      value={newStaff.firstName}
                      onChangeText={(val) => handleSetNewStaff('firstName', val)}
                      placeholder="First Name"
                    />
                    <Input
                      value={newStaff.otherName}
                      onChangeText={(val) => handleSetNewStaff('otherName', val)}
                      placeholder="Other Name"
                    />
                    <Input
                      value={newStaff.lastName}
                      onChangeText={(val) => handleSetNewStaff('lastName', val)}
                      placeholder="Last Name"
                    />
                    <Input
                      value={newStaff.email}
                      onChangeText={(val) => handleSetNewStaff('email', val)}
                      placeholder="Email Address"
                      keyboardType="email-address"
                    />
                    <Button
                      text="Add"
                      isLoading={loading}
                      disabled={newStaff.email === '' || newStaff.lastName === '' || newStaff.firstName === ''}
                      onPress={() => dispatch(addNewStaff(newStaff, () => setStaffModal(false)))}
                    />
                  </>
                )
                : (
                  <>
                    <BoldText style={styles.itemTitle}>Staff Name</BoldText>
                    <Text style={styles.itemSubtitle}>
                      Staff Role | staff@email.com
                    </Text>
                    <View style={styles.buttonCover}>
                      <Button
                        style={styles.staffButton}
                        IconComponent={(
                          <MaterialIcons
                            name="create"
                            color="#fff"
                            size={22}
                          />
                        )}
                        onPress={() => setAddStaff(true)}
                        backgroundColor="#1e88e5"
                      />
                      <Button
                        style={styles.staffButton}
                        IconComponent={(
                          <MaterialIcons
                            name="power-settings-new"
                            color="#fff"
                            size={22}
                          />
                        )}
                        backgroundColor="#d84315"
                      />
                      <Button
                        style={styles.staffButton}
                        IconComponent={(
                          <MaterialIcons
                            name="delete"
                            color="#fff"
                            size={22}
                          />
                        )}
                        backgroundColor="#e53935"
                      />
                    </View>
                  </>
                )}
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
  item: {
    ...globalStyles.shadow,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 17,
  },
  itemSubtitle: {
    fontSize: 15,
    marginTop: 5,
  },
  formTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 17,
  },
  buttonCover: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 10,
    paddingTop: 15,
  },
  staffButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    paddingHorizontal: 0,
  },
})

export default StaffMgt
