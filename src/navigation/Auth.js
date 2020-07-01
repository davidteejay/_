import { createStackNavigator } from 'react-navigation-stack'

import Login from '../screens/Login'
import ForgotPassword from '../screens/ForgotPassword'

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
}, {
  initialRouteName: 'Login',
})

export default AuthNavigator
