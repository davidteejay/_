import React, { useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'

import { getRisks } from '../actions/insurance'

import globalStyles from '../config/globalStyles'
import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import { FAB } from '../components/Button'
import { darkRed } from '../config/colors'

const InsuranceItem = ({ navigation, data }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Insurance')}
    >
      <BoldText style={styles.itemTitle}>{data?.subrisksMemberField}</BoldText>
      <Text style={styles.itemSubtitle}>{data?.riskField}</Text>
    </TouchableOpacity>
  )
}

const Insurance = ({ navigation }) => {
  const dispatch = useDispatch()
  const { loading: { refreshing }, insurance: { risks } } = useSelector((state) => state)
  useEffect(() => {
    dispatch(getRisks())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Insurance Management"
          hasSearch
        />
        <ScrollView
          style={styles.content}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              colors={[darkRed]}
              tintColor={darkRed}
              onRefresh={() => dispatch(getRisks())}
            />
          )}
        >
          {risks?.map((risk, i) => (
            <InsuranceItem
              key={i}
              navigation={navigation}
              data={risk}
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
          <Text style={{ marginLeft: 10 }}>Filter Policies</Text>
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
    textTransform: 'capitalize',
  },
  itemSubtitle: {
    fontSize: 15,
    marginTop: 5,
  },
})

export default Insurance
