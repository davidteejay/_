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
import CustomerPolicy from '../screens/CustomerPolicy'

import ClaimsMgt from '../screens/ClaimsMgt'
import Claim from '../screens/Claim'

import NotificationsMgt from '../screens/NotificationsMgt'

import DocumentsMgt from '../screens/DocumentsMgt'

import Support from '../screens/Support'

import CustomerMgt from '../screens/CustomerMgt'
import NewCustomer from '../screens/NewCustomer'
import Customer from '../screens/Customer'

import StaffMgt from '../screens/StaffMgt'

import FAQs from '../screens/FAQs'

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
  NewCustomer: {
    screen: NewCustomer,
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
  CustomerPolicy: {
    screen: CustomerPolicy,
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
  Claim: {
    screen: Claim,
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

const SupportStack = createStackNavigator({
  Support: {
    screen: Support,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const CustomersStack = createStackNavigator({
  CustomerMgt: {
    screen: CustomerMgt,
    navigationOptions: {
      headerShown: false,
    },
  },
  NewCustomer: {
    screen: NewCustomer,
    navigationOptions: {
      headerShown: false,
    },
  },
  Customer: {
    screen: Customer,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const StaffStack = createStackNavigator({
  StaffMgt: {
    screen: StaffMgt,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const FAQsStack = createStackNavigator({
  FAQs: {
    screen: FAQs,
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
  SupportStack,
  CustomersStack,
  StaffStack,
  FAQsStack,
}, {
  initialRouteName: 'DashboardStack',
  drawerWidth: 300,
  contentComponent: Drawer,
})

export default Main
