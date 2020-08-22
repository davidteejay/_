import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity, Dimensions, RefreshControl,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { TabView } from 'react-native-tab-view'
import { useDispatch, useSelector } from 'react-redux'

import { getAllCustomers } from '../actions/customers'

import Text, { BoldText } from '../components/Text'
import Header from '../components/Header'
import globalStyles from '../config/globalStyles'
import Button, { FAB } from '../components/Button'
import { darkRed } from '../config/colors'

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

const IndividualCustomers = ({ navigation }) => {
  const dispatch = useDispatch()
  const { customers: { individual } } = useSelector((state) => state)

  return (
    <ScrollView
      style={styles.tabContent}
    >
      <CustomerItem
        navigation={navigation}
        expired={false}
      />
    </ScrollView>
  )
}

const CorperateCustomers = ({ navigation }) => {
  const { customers: { corperate } } = useSelector((state) => state)

  return (
    <ScrollView
      style={styles.tabContent}
    >
      <CustomerItem
        navigation={navigation}
        expired
      />
    </ScrollView>
  )
}

const CustomerMgt = ({ navigation }) => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', label: 'Individual' },
    { key: 'second', label: 'Corperate' },
  ]);

  const dispatch = useDispatch()
  const { refreshing } = useSelector((state) => state.loading)
  useEffect(() => {
    dispatch(getAllCustomers())
  }, [])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return (
          <IndividualCustomers
            navigation={navigation}
          />
        )
      case 'second':
        return (
          <CorperateCustomers
            navigation={navigation}
          />
        )
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="Customers"
          hasSearch
        />
        <ScrollView
          style={styles.content}
          stickyHeaderIndices={[1]}
          refreshControl={(
            <RefreshControl
              colors={[darkRed]}
              tintColor={darkRed}
              refreshing={refreshing}
              onRefresh={() => dispatch(getAllCustomers())}
            />
          )}
        >
          <View style={{ padding: 20 }}>
            <Button
              text="+ Add New Customer"
              style={styles.addButton}
              textStyle={styles.addButtonText}
              fullWidth={false}
              onPress={() => navigation.navigate('NewCustomer')}
            />
          </View>
          <ScrollView
            style={{ width: '100%' }}
            contentContainerStyle={styles.tabHeader}
          >
            <TouchableOpacity
              style={styles.tab}
              onPress={() => setIndex(0)}
            >
              <Text style={{ color: index === 0 ? '#000' : '#aaa' }}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab}
              onPress={() => setIndex(1)}
            >
              <Text style={{ color: index === 1 ? '#000' : '#aaa' }}>Corperate</Text>
            </TouchableOpacity>
          </ScrollView>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={() => null}
          />

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
  content: {},
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
    marginBottom: 0,
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
  tabHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  tab: {
    width: '50%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  tabContent: {
    padding: 20,
  },
})

export default CustomerMgt
