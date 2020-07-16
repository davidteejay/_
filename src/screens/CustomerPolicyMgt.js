import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import globalStyles from '../config/globalStyles'
import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import { FAB } from '../components/Button'

const PolicyItem = ({ navigation, expired }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('')}
    >
      <BoldText style={styles.itemTitle}>Policy Title</BoldText>
      <View style={styles.tagCover}>
        <View style={expired ? [styles.tag, styles.tagExpired] : styles.tag}>
          <Text style={styles.tagText}>
            {expired ? 'Expired' : 'In Progress'}
          </Text>
        </View>
        {!expired && (
          <View style={[styles.tag, styles.dateTag]}>
            <Text style={styles.tagText}>
              {expired ? 'Expired' : 'In Progress'}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const n = 8

const PolicyMgt = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Customer Policies"
          hasSearch
        />
        <ScrollView style={styles.content}>
          {/* <View style={styles.filterContainer}>
            <TouchableOpacity
              style={styles.filterButton}
            >
              <Ionicons
                name="ios-funnel"
                size={18}
                color="#333"
              />
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View> */}
          {[...Array(n)].map((e, i) => (
            <PolicyItem
              key={i}
              expired={i % 2 === 0}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
      <FAB
        backgroundColor="#fff"
      >
        <MaterialIcons
          name="filter-list"
          size={22}
          color="#333"
        />
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
    padding: 30,
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
    marginTop: 10,
  },
  tag: {
    paddingVertical: 3,
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
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
})

export default PolicyMgt
