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

const Claim = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Claim Title"
          back
        />
        <ScrollView style={styles.content}>

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
    ...globalStyles.card,
  },
  itemTitle: {
    fontSize: 17,
  },
  itemSubtitle: {
    fontSize: 15,
    marginTop: 5,
  },
})

export default Claim
