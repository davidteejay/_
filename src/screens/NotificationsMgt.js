import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import globalStyles from '../config/globalStyles'
import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import { darkRed } from '../config/colors'

const Notification = ({ read }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => null}
    >
      <View>
        <View style={!read ? { ...styles.dot, backgroundColor: 'transparent' } : styles.dot} />
      </View>
      <View style={styles.itemCover}>
        <BoldText style={styles.itemTitle}>Notification Title</BoldText>
        <Text style={styles.itemSubtitle}>Notification Subtitle</Text>
        <Text style={styles.itemDate}>Notification Date</Text>
      </View>
      <View>
        <MaterialIcons
          name="delete"
          color="#f00"
          size={22}
        />
      </View>
    </TouchableOpacity>
  )
}

const n = 8

const NotificationsMgt = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Notifications"
        />
        <ScrollView style={styles.content}>
          {[...Array(n)].map((e, i) => (
            <Notification
              key={i}
              read={i < 5}
            />
          ))}
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
  filterContainer: {
    // paddingVertical: 20,
    marginBottom: 20,
  },
  filterButton: {
    ...globalStyles.shadow,
    alignSelf: 'flex-end',
    borderRadius: 4,
    borderColor: '#333',
    // borderWidth: .5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 16,
    marginLeft: 7,
  },
  item: {
    ...globalStyles.shadow,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 17,
  },
  itemSubtitle: {
    fontSize: 15,
    marginVertical: 5,
  },
  itemDate: {
    fontSize: 13,
    color: '#666',
  },
  itemCover: {
    flex: 1,
    paddingHorizontal: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 15,
    backgroundColor: darkRed,
  },
})

export default NotificationsMgt
