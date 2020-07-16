import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons, Feather } from '@expo/vector-icons'

import globalStyles from '../config/globalStyles'
import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import { FAB } from '../components/Button'

const Document = () => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => null}
    >
      <Feather
        name="file-text"
        color="#666"
        size={56}
        style={{ marginVertical: 15 }}
      />
      <View style={styles.itemBottom}>
        <BoldText style={styles.itemTitle}>Document Title</BoldText>
        <Text style={styles.itemDate}>Document Date</Text>
      </View>
    </TouchableOpacity>
  )
}

const n = 8

const DocumentsMgt = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Documents"
          hasSearch
        />
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.itemContainer}
        >
          {[...Array(n)].map((e, i) => (
            <Document key={i} />
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  filterText: {
    fontSize: 16,
    marginLeft: 7,
  },
  item: {
    ...globalStyles.shadow,
    backgroundColor: '#ccc',
    // padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // overflow: 'hidden',
    // backgroundColor
  },
  itemTitle: {
    fontSize: 15,
  },
  itemSubtitle: {
    fontSize: 15,
    marginVertical: 5,
  },
  itemDate: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },
  itemCover: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemBottom: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
})

export default DocumentsMgt
