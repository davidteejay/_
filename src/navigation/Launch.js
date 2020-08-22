import React, { useEffect } from 'react'
import { View, AsyncStorage } from 'react-native'
import { useDispatch } from 'react-redux'

import { SAVE_TOKEN, SAVE_USER } from '../types'

const Launch = ({ navigation }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    AsyncStorage
      .multiGet(['user', 'token'])
      .then(([user, token]) => {
        if (user[1] && token[1]) {
          dispatch({
            type: SAVE_TOKEN,
            payload: JSON.parse(token[1]),
          })

          dispatch({
            type: SAVE_USER,
            payload: JSON.parse(user[1]),
          })

          navigation.navigate('Main')
        } else navigation.navigate('Auth')
      })
      .catch(() => navigation.navigate('Auth'))
  }, []);

  return <View style={{ flex: 1, backgroundColor: '#fff' }} />
};

export default Launch
