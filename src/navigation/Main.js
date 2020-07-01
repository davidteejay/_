import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import Drawer from '../components/Drawer'

import Dashboard from '../screens/Dashboard'

import Insurance from '../screens/Insurance'

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const InsuranceStack = createStackNavigator({
  Insurance: {
    screen: Insurance,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const Main = createDrawerNavigator({
  DashboardStack,
  InsuranceStack,
}, {
  initialRouteName: 'DashboardStack',
  drawerWidth: 300,
  contentComponent: Drawer,
})

export default Main
