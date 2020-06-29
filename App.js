import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { useFonts } from '@use-expo/font';
// import * as SplashScreen from 'expo-splash-screen';

import AppNavigator from './src/navigation'
import store from './src/store'

export default () => {
  // useEffect(() => {
  //   handleSplash()
  // }, [])

  // const handleSplash = async () => {
  //   await SplashScreen.preventAutoHideAsync()
  // }

  // const hideSplash = async () => {
  //   await SplashScreen.hideAsync()
  // }

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./src/assets/fonts/Montserrat/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  // hideSplash()
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  )
}
