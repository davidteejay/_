/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView,
  ScrollView, TouchableOpacity, UIManager,
  LayoutAnimation, Platform,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Text, { BoldText, LightText } from '../components/Text'
import Header from '../components/Header'
import Button from '../components/Button'
import Input, { Dropdown, DatePicker, Checkbox } from '../components/Input'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const NewCustomer = ({ navigation }) => {
  const [customerType, setType] = useState(null)
  const [currentForm, setCurrentForm] = useState('customerDetails')
  const [customer, setCustomer] = useState({
    individual: {
      customerDetails: {
        title: {
          index: 1,
          type: 'dropdown',
          value: null,
          placeholder: 'Title',
          dropdownItems: [
            { label: 'Mr', value: 'Mr' },
            { label: 'Mrs', value: 'Mrs' },
            { label: 'Ms', value: 'Ms' },
            { label: 'Miss', value: 'Miss' },
            { label: 'Other', value: 'Other' },
          ],
        },
        surname: {
          index: 2,
          type: 'textbox',
          value: '',
          placeholder: 'Surname',
        },
        firstName: {
          index: 3,
          type: 'textbox',
          value: '',
          placeholder: 'First Name',
        },
        otherName: {
          index: 4,
          type: 'textbox',
          value: '',
          placeholder: 'Other Name',
        },
        occupation: {
          index: 5,
          type: 'textbox',
          value: '',
          placeholder: 'Occupation',
        },
        dateOfBirth: {
          index: 6,
          type: 'date',
          value: null,
          placeholder: 'Date of Birth',
        },
        gender: {
          index: 7,
          type: 'dropdown',
          value: null,
          placeholder: 'Gender',
          dropdownItems: [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
          ],
        },
        phone: {
          index: 8,
          type: 'textbox',
          value: '',
          placeholder: 'Phone Number',
          keyboardType: 'phone-pad',
        },
        maritalStatus: {
          index: 9,
          type: 'dropdown',
          value: null,
          placeholder: 'Marital Status',
          dropdownItems: [
            { label: 'Single', value: 'Single' },
            { label: 'Married', value: 'Married' },
            { label: 'Divorced', value: 'Married' },
          ],
        },
        street: {
          index: 10,
          type: 'textbox',
          value: '',
          placeholder: 'Street',
        },
        country: {
          index: 11,
          type: 'dropdown',
          value: null,
          placeholder: 'Country',
          dropdownItems: [
            { label: 'Nigeria', value: 'Nigeria' },
          ],
        },
        state: {
          index: 13,
          type: 'dropdown',
          value: null,
          placeholder: 'State',
          dropdownItems: [
            { label: 'Lagos', value: 'Lagos' },
          ],
        },
        town: {
          index: 14,
          type: 'dropdown',
          value: null,
          placeholder: 'Town',
          dropdownItems: [
            { label: 'Lekki', value: 'Lekki' },
          ],
        },
        email: {
          index: 15,
          type: 'textbox',
          value: '',
          placeholder: 'Email',
          keyboardType: 'email-address',
        },
        meansOfIdentification: {
          index: 16,
          type: 'dropdown',
          value: null,
          placeholder: 'Means of Identification',
          dropdownItems: [
            { label: 'Driver\'s License', value: 'Driver\'s License' },
            { label: 'National ID', value: 'National ID' },
            { label: 'Voters Card', value: 'Voters Card' },
            { label: 'International Passport', value: 'International Passport' },
          ],
        },
        identificationNumber: {
          index: 17,
          type: 'textbox',
          value: '',
          placeholder: 'Identification Number',
        },
        bvn: {
          index: 18,
          type: 'textbox',
          value: '',
          placeholder: 'BVN',
          keyboardType: 'numeric',
        },
      },
      declaration: {
        agree: {
          index: 1,
          type: 'checkbox',
          value: false,
          placeholder: 'I Agree',
        },
        date: {
          index: 2,
          type: 'date',
          value: null,
          placeholder: 'Date',
        },
      },
    },
    corperate: {
      customerDetails: {
        companyName: {
          index: 1,
          type: 'textbox',
          value: '',
          placeholder: 'Company Name',
        },
        companyAddress: {
          index: 2,
          type: 'textbox',
          value: '',
          placeholder: 'Company Address',
        },
        country: {
          index: 3,
          type: 'dropdown',
          value: null,
          placeholder: 'Country',
          dropdownItems: [
            { label: 'Nigeria', value: 'Nigeria' },
          ],
        },
        state: {
          index: 4,
          type: 'dropdown',
          value: null,
          placeholder: 'State',
          dropdownItems: [
            { label: 'Lagos', value: 'Lagos' },
          ],
        },
        town: {
          index: 5,
          type: 'dropdown',
          value: null,
          placeholder: 'Town',
          dropdownItems: [
            { label: 'Lekki', value: 'Lekki' },
          ],
        },
        phone: {
          index: 8,
          type: 'textbox',
          value: '',
          placeholder: 'Phone Number',
          keyboardType: 'phone-pad',
        },
        email: {
          index: 7,
          type: 'textbox',
          value: '',
          placeholder: 'Email',
          keyboardType: 'email-address',
        },
        rcNumber: {
          index: 8,
          type: 'textbox',
          value: '',
          placeholder: 'Incorporation/RC Number',
        },
        taxNumber: {
          index: 9,
          type: 'textbox',
          value: '',
          placeholder: 'Tax Identification Number',
        },
      },
      directorsInfo: {
        title: {
          index: 1,
          type: 'dropdown',
          value: null,
          placeholder: 'Title',
          dropdownItems: [
            { label: 'Mr', value: 'Mr' },
            { label: 'Mrs', value: 'Mrs' },
            { label: 'Ms', value: 'Ms' },
            { label: 'Miss', value: 'Miss' },
            { label: 'Other', value: 'Other' },
          ],
        },
        surname: {
          index: 2,
          type: 'textbox',
          value: '',
          placeholder: 'Surname',
        },
        firstName: {
          index: 3,
          type: 'textbox',
          value: '',
          placeholder: 'First Name',
        },
        otherName: {
          index: 4,
          type: 'textbox',
          value: '',
          placeholder: 'Other Name',
        },
        occupation: {
          index: 5,
          type: 'textbox',
          value: '',
          placeholder: 'Occupation',
        },
        dateOfBirth: {
          index: 6,
          type: 'date',
          value: null,
          placeholder: 'Date of Birth',
        },
        gender: {
          index: 7,
          type: 'dropdown',
          value: null,
          placeholder: 'Gender',
          dropdownItems: [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
          ],
        },
        phone: {
          index: 8,
          type: 'textbox',
          value: '',
          placeholder: 'Phone Number',
          keyboardType: 'phone-pad',
        },
        email: {
          index: 9,
          type: 'textbox',
          value: '',
          placeholder: 'Email',
          keyboardType: 'email-address',
        },
        meansOfIdentification: {
          index: 10,
          type: 'dropdown',
          value: null,
          placeholder: 'Means of Identification',
          dropdownItems: [
            { label: 'Driver\'s License', value: 'Driver\'s License' },
            { label: 'National ID', value: 'National ID' },
            { label: 'Voters Card', value: 'Voters Card' },
            { label: 'International Passport', value: 'International Passport' },
          ],
        },
        identificationNumber: {
          index: 11,
          type: 'textbox',
          value: '',
          placeholder: 'Identification Number',
        },
      },
      declaration: {
        agree: {
          index: 1,
          type: 'checkbox',
          value: false,
          placeholder: 'Agree',
        },
        date: {
          index: 2,
          type: 'date',
          value: null,
          placeholder: 'Date',
        },
      },
    },
  })

  const handleSetCustomer = (key, value) => {
    const newDetails = {
      ...customer[customerType][currentForm],
      [key]: {
        ...customer[customerType][currentForm][key],
        value,
      },
    }

    /*
      I noticed that each time an input was changed, the input field
      was going to the bottom. To avoid this, I added an index to the
      object, and after changing the value, sorted the data using this index. Weird, right? 😂
    */
    const { length } = Object.keys(newDetails)
    let i = 1;
    let sorted = {}

    while (i <= length) {
      for (const item in newDetails) {
        if (newDetails[item].index === i) {
          sorted = {
            ...sorted,
            [item]: newDetails[item],
          }
        }
      }

      // eslint-disable-next-line no-plusplus
      i++;
    }

    setCustomer({
      ...customer,
      [customerType]: {
        ...customer[customerType],
        [currentForm]: sorted,
      },
    })
  }

  const buttonPress = () => {
    LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 300 })

    if (currentForm === 'declaration') {
      // submit form
    } else if (currentForm === 'directorsInfo') {
      setCurrentForm('declaration')
    } else if (currentForm === 'customerDetails') {
      if (customerType === 'individual') setCurrentForm('declaration')
      else setCurrentForm('directorsInfo')
    }
  }

  const backPress = () => {
    LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 300 })

    if (currentForm === 'declaration') {
      if (customerType === 'individual') setCurrentForm('customerDetails')
      else setCurrentForm('directorsInfo')
    } else if (currentForm === 'directorsInfo') {
      setCurrentForm('customerDetails')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Add New Customer"
          back
        />
        <ScrollView style={styles.content}>
          <Dropdown
            placeholder="Select Customer Type"
            selectedValue={customerType}
            onValueChange={(val) => {
              LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 300 })

              setCurrentForm('customerDetails')
              setType(val)
            }}
            items={[
              { label: 'Corperate Customer', value: 'corperate' },
              { label: 'Individual Customer', value: 'individual' },
            ]}
          />
          {customerType && (
            <TouchableOpacity
              style={styles.title}
              onPress={backPress}
              activeOpacity={1}
            >
              {currentForm !== 'customerDetails' && (
                <MaterialIcons
                  name="keyboard-backspace"
                  size={22}
                  color="#000"
                  style={{ marginRight: 10 }}
                />
              )}
              <BoldText style={styles.formTitle}>
                {currentForm === 'customerDetails'
                  ? 'Customer Details'
                  : currentForm === 'directorsInfo'
                    ? 'Director\'s Information'
                    : 'Declaration'}
              </BoldText>
            </TouchableOpacity>
          )}
          {currentForm === 'declaration' && (
            <LightText style={styles.declaration}>
              I/We hereby declare that the statements, answers given by Me/Us are true and complete to the best of my/our knowledge and belief. I/We hereby understand and agree that the statements, answers and particulars provided herein above are the basis on which this insurance is being granted and that if, after the insurance is effected, it is found that any of the statements, answers or particulars are incorrect or untrue in any respect, the company shall have no liability under this insurance.
            </LightText>
          )}
          {customerType && Object.keys(customer[customerType][currentForm]).map((item, i) => {
            const {
              type, value, dropdownItems, placeholder, keyboardType,
            } = customer[customerType][currentForm][item]

            switch (type) {
              case 'textbox':
                return (
                  <Input
                    key={i}
                    value={value}
                    placeholder={placeholder}
                    keyboardType={keyboardType ?? 'default'}
                    onChangeText={(val) => handleSetCustomer(item, val)}
                  />
                )
              case 'dropdown':
                return (
                  <Dropdown
                    key={i}
                    selectedValue={value}
                    placeholder={placeholder}
                    items={dropdownItems}
                    onValueChange={(val) => handleSetCustomer(item, val)}
                  />
                )
              case 'date':
                return (
                  <DatePicker
                    key={i}
                    selectedDate={value}
                    placeholder={placeholder}
                    onDateChange={(val) => handleSetCustomer(item, val)}
                  />
                )
              case 'checkbox':
                return (
                  <View
                    style={styles.checkBoxCover}
                    key={i}
                  >
                    <Checkbox
                      onValueChange={() => handleSetCustomer(item, !value)}
                      value={value}
                    />
                    <Text>{placeholder}</Text>
                  </View>
                )
              default:
                return null
            }
          })}
          {customerType && (
            <Button
              text={currentForm === 'declaration' ? 'Submit' : 'Next'}
              onPress={buttonPress}
            />
          )}
          <View style={{ height: 50 }} />
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
  formTitle: {
    fontSize: 18,
  },
  checkBoxCover: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  declaration: {
    lineHeight: 23,
    fontSize: 15,
    textAlign: 'justify',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
})

export default NewCustomer
