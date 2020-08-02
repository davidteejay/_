import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import globalStyles from '../config/globalStyles'
import Button, { FAB } from '../components/Button'

const CustomerItem = ({ navigation, expired }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Customer')}
    >
      <BoldText style={styles.itemTitle}>Customer Name</BoldText>
      <Text style={styles.itemSubtitle}>customer@email.com</Text>
      <View style={styles.tagCover}>
        <View style={expired ? [styles.tag, styles.otherTag] : [styles.tag, styles.dateTag]}>
          <Text style={styles.tagText}>
            {expired ? 'Corperate Customer' : 'Individual Customer'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const n = 8

const CustomerMgt = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Customers"
          hasSearch
        />
        <ScrollView style={styles.content}>
          <Button
            text="+ Add New Customer"
            style={styles.addButton}
            textStyle={styles.addButtonText}
            fullWidth={false}
            onPress={() => navigation.navigate('NewCustomer')}
          />
          {[...Array(n)].map((e, i) => (
            <CustomerItem
              key={i}
              navigation={navigation}
              expired={i % 2 === 0}
            />
          ))}
        </ScrollView>
      </View>
      <FAB
        backgroundColor="#fff"
        size={50}
      >
        <View style={styles.fab}>
          <MaterialIcons
            name="filter-list"
            size={22}
            color="#333"
          />
          <Text style={{ marginLeft: 10 }}>Filter Customers</Text>
        </View>
      </FAB>
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
  tagCover: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#4caf50',
  },
  tagExpired: {
    backgroundColor: '#d32f2f',
  },
  dateTag: {
    backgroundColor: '#1976d2',
  },
  otherTag: {
    backgroundColor: '#f57c00',
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  addButton: {
    alignSelf: 'flex-end',
    height: 35,
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 14,
  },
  fab: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
})

export default CustomerMgt
