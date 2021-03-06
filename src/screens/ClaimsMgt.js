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

const ClaimItem = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Claim')}
    >
      <BoldText style={styles.itemTitle}>Claim Title</BoldText>
      <Text style={styles.itemSubtitle}>Claim Type</Text>
    </TouchableOpacity>
  )
}

const n = 8

const ClaimsMgt = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Claims"
          hasSearch
        />
        <ScrollView style={styles.content}>
          {[...Array(n)].map((e, i) => (
            <ClaimItem
              key={i}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
      <FAB
        backgroundColor="#fff"
        size={50}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}
        >
          <MaterialIcons
            name="filter-list"
            size={22}
            color="#333"
          />
          <Text style={{ marginLeft: 10 }}>Filter Claims</Text>
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

export default ClaimsMgt
