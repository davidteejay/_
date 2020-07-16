import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import Drawer from '../components/Drawer'

import Dashboard from '../screens/Dashboard'
import AdditionalEndorsement from '../screens/AdditionalEndorsement'
import RenewalEndorsement from '../screens/RenewalEndorsement'
import EditEndorsement from '../screens/EditEndorsement'
import CancellationEndorsement from '../screens/CancellationEndorsement'
import DeletionEndorsement from '../screens/DeletionEndorsement'

import InsuranceMgt from '../screens/InsuranceMgt'
import Insurance from '../screens/Insurance'
import NewPolicy from '../screens/NewPolicy'

import CustomerPolicyMgt from '../screens/CustomerPolicyMgt'

import ClaimsMgt from '../screens/ClaimsMgt'

import NotificationsMgt from '../screens/NotificationsMgt'

import DocumentsMgt from '../screens/DocumentsMgt'

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
    },
  },
  AdditionalEndorsement: {
    screen: AdditionalEndorsement,
    navigationOptions: {
      headerShown: false,
    },
  },
  RenewalEndorsement: {
    screen: RenewalEndorsement,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditEndorsement: {
    screen: EditEndorsement,
    navigationOptions: {
      headerShown: false,
    },
  },
  CancellationEndorsement: {
    screen: CancellationEndorsement,
    navigationOptions: {
      headerShown: false,
    },
  },
  DeletionEndorsement: {
    screen: DeletionEndorsement,
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

const CustomerPoliciesStack = createStackNavigator({
  CustomerPolicies: {
    screen: CustomerPolicyMgt,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const ClaimsStack = createStackNavigator({
  ClaimsMgt: {
    screen: ClaimsMgt,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const NotificationsStack = createStackNavigator({
  NotificationsMgt: {
    screen: NotificationsMgt,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const DocumentsStack = createStackNavigator({
  DocumentsMgt: {
    screen: DocumentsMgt,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const Main = createDrawerNavigator({
  DashboardStack,
  InsuranceStack,
  CustomerPoliciesStack,
  ClaimsStack,
  NotificationsStack,
  DocumentsStack,
}, {
  initialRouteName: 'DashboardStack',
  drawerWidth: 300,
  contentComponent: Drawer,
})

export default Main
