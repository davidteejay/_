/* eslint-disable no-param-reassign */
import React from 'react'
import {
  TextInput, View, TouchableOpacity, Platform, Picker,
  ActionSheetIOS,
} from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import Text, { BoldText } from './Text'

export default ({
  isRounded = true,
  color = '#000',
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
  ...props
}) => (
  <View style={{ marginBottom: 10, ...coverStyle }}>
    {label && <BoldText style={{ marginBottom: 15 }}>{label}</BoldText>}
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={color.includes('#')
        ? `${color}${color.length === 5 || color.length === 9
          ? ''
          : color.length === 4
            ? 5
            : 55
        }`
        : color}
      onChangeText={onChangeText}
      multiline={multiline}
      style={{
        width: '100%',
        color,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 15,
        paddingTop: multiline ? 15 : 0,
        paddingBottom: multiline ? 15 : 0,
        height: multiline ? 200 : 50,
        backgroundColor,
        borderRadius: isRounded ? 25 : 7,
        ...style,
      }}
      {...props}
    />
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
}) => {
  return (
    <View style={{ marginBottom: 10, ...style }}>
      {label && <BoldText style={{ marginBottom: 15 }}>{label}</BoldText>}
      {Platform.OS === 'android' ? (
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedValue}
            style={{ width: '100%' }}
            onValueChange={onValueChange}
            itemStyle={selectedValue ? styles.pickerItem : { ...styles.pickerItem, color: '#0005' }}
            mode="dropdown"
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
          >
            <Text style={selectedValue ? styles.pickerItem : { ...styles.pickerItem, color: '#0005' }}>{selectedValue || placeholder}</Text>
            <Ionicons
              color="#0005"
              size={18}
              name="ios-arrow-drop-down"
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

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 25,
  },
  pickerItem: {
    color: '#000',
    fontFamily: 'Gotham-Book',
  },
})
