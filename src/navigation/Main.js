import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import Drawer from '../components/Drawer'

import Dashboard from '../screens/Dashboard'

import InsuranceMgt from '../screens/InsuranceMgt'
import Insurance from '../screens/Insurance'
import NewPolicy from '../screens/NewPolicy'

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const InsuranceStack = createStackNavigator({
  InsuranceMgt: {
    screen: InsuranceMgt,
    navigationOptions: {
      headerShown: false,
    },
  },
  Insurance: {
    screen: Insurance,
    navigationOptions: {
      headerShown: false,
    },
  },
  NewPolicy: {
    screen: NewPolicy,
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
