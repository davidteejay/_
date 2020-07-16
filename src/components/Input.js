/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import {
  TextInput, View, TouchableOpacity, Platform, Picker,
  ActionSheetIOS, StyleSheet,
} from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { DatePicker as NativePicker } from 'native-base'

import Text from './Text'

const Input = ({
  color = '#333',
  backgroundColor = 'transparent',
  label = null,
  value,
  onChangeText,
  style = null,
  coverStyle = null,
  multiline = false,
  placeholder = '',
  error = null,
  showText = true,
  width = '100%',
  secureTextEntry = false,
  isSearchBox = false,
  ...props
}) => {
  const [show, setShow] = useState(false)

  return (
    <View style={{ width, ...coverStyle }}>
      {label && <Text style={{ fontSize: 12 }}>{label}</Text>}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: color,
          borderBottomWidth: 1,
          borderStyle: 'solid',
        }}
      >
        {isSearchBox && (
          <Ionicons
            color="#333"
            name="ios-search"
            size={18}
            style={{ paddingHorizontal: 7 }}
          />
        )}
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={color}
          onChangeText={onChangeText}
          multiline={multiline}
          secureTextEntry={secureTextEntry && !show}
          clearButtonMode="while-editing"
          style={{
            flex: 1,
            color,
            fontFamily: 'Montserrat-Medium',
            paddingTop: multiline ? 15 : 0,
            paddingBottom: multiline ? 15 : 0,
            height: multiline ? 200 : 45,
            backgroundColor,
            ...style,
          }}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={{ paddingHorizontal: 7 }}
            onPress={() => setShow(!show)}
          >
            <Ionicons
              color="#333"
              name={show ? 'ios-eye-off' : 'ios-eye'}
              size={18}
            />
          </TouchableOpacity>
        )}
      </View>
      {showText && (
        <Text
          style={{
            color: '#f00',
            fontSize: 12,
            marginTop: 10,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  )
}

export const Checkbox = ({ value, onValueChange, backgroundColor = '#000' }) => (
  <TouchableOpacity
    style={{
      height: 20,
      width: 20,
      borderRadius: 20,
      borderColor: backgroundColor,
      borderWidth: 1.5,
      marginRight: 10,
      backgroundColor: value ? backgroundColor : 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onPress={onValueChange}
  >
    <MaterialIcons
      size={22}
      color="#fff"
      name="done"
    />
  </TouchableOpacity>
)

export const Dropdown = ({
  selectedValue,
  onValueChange,
  items,
  label = null,
  placeholder = '',
  style = null,
  error = null,
  backgroundColor = 'transparent',
  ...props
}) => {
  return (
    <View style={{ marginBottom: 10, ...style }}>
      {label && <Text style={{ fontSize: 12 }}>{label}</Text>}
      {Platform.OS === 'android' ? (
        <View style={{ ...styles.picker, backgroundColor }}>
          <Picker
            selectedValue={selectedValue}
            style={{ width: '100%' }}
            onValueChange={onValueChange}
            itemStyle={selectedValue ? styles.pickerItem : { ...styles.pickerItem, color: '#0005' }}
            mode="dropdown"
            {...props}
          >
            <Picker.Item label={placeholder} value={null} />
            {items.map((item) => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))}
          </Picker>
        </View>
      ) : (
          <TouchableOpacity
            style={{
              ...styles.picker,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
            activeOpacity={1}
            onPress={() => {
              ActionSheetIOS.showActionSheetWithOptions({
                options: ['Cancel', ...items.map((item) => item.label)],
                cancelButtonIndex: 0,
              }, (index) => {
                if (index !== 0) {
                  index -= 1
                  onValueChange(items[index].value)
                }
              })
            }}
            {...props}
          >
            <Text style={selectedValue ? styles.pickerItem : { ...styles.pickerItem, color: '#333' }}>{selectedValue || placeholder}</Text>
            <MaterialIcons
              color="#333"
              size={18}
              name="arrow-drop-down"
            />
          </TouchableOpacity>
      )}
      <Text
        style={{
          color: '#f00',
          fontSize: 12,
          marginTop: 10,
        }}
      >
        {error}
      </Text>
    </View>
  )
}

export const DatePicker = ({
  label = null,
  placeholder = 'Select Date',
  onDateChange = () => null,
  defaultDate = new Date(),
  selectedDate = null,
  backgroundColor = 'transparent',
  color = '#333',
  disabled = false,
  style = null,
  ...props
}) => (
    <View style={{ marginBottom: 10, ...style }}>
      {label && <Text style={{ fontSize: 12 }}>{label}</Text>}
      <View style={{ ...styles.picker, backgroundColor }}>
        <NativePicker
          defaultDate={defaultDate}
          animationType="fade"
          disabled={disabled}
          placeHolderText={placeholder}
          placeHolderTextStyle={{ color, fontFamily: 'Montserrat-Medium', fontSize: 14 }}
          textStyle={{ color, fontFamily: 'Montserrat-Medium', fontSize: 14 }}
          androidMode="calendar"
          onDateChange={onDateChange}
          {...props}
        >
          <Text style={{ color, fontSize: 12 }}>
            {new Date(selectedDate).toLocaleDateString() || placeholder}
          </Text>
        </NativePicker>
      </View>
    </View>
)

export default Input

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 0,
  },
  pickerItem: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
  },
})
