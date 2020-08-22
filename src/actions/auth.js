import { Alert } from 'react-native'

import {
  LOGOUT, SAVE_TOKEN, SAVE_USER, LOADING,
} from '../types'
import sendRequest from '../helpers/sendRequest'

export const refreshUserToken = (callback) => async (dispatch, store) => {
  try {
    const { accessToken, refreshToken } = store().auth.token
    console.warn('expired', { accessToken, refreshToken })

    const { data } = await sendRequest(`account/refreshtoken?authenticationToken=${accessToken}&refreshToken=${refreshToken}`, 'post')

    console.log(data)
    if (data.success) {
      dispatch({
        type: SAVE_TOKEN,
        payload: data.data,
      })

      callback()
    } else {
      Alert.alert(
        '',
        data.message,
        [{ text: 'Dismiss' }],
      )
    }
  } catch (err) {
    console.log(err.response ? err.response : err)

    Alert.alert(
      '',
      err.response ? err.response.data.message : err,
      [{ text: 'Dismiss' }],
    )
  }
}

export const login = (user, navigation) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  })

  try {
    const { data } = await sendRequest('account/login', 'post', user)
    console.log(data)

    if (data.success) {
      const {
        email, userId, refreshToken, userToken,
      } = data.data

      dispatch({
        type: SAVE_USER,
        payload: { email, userId },
      })

      dispatch({
        type: SAVE_TOKEN,
        payload: { refreshToken, accessToken: userToken },
      })

      navigation.navigate('Main')
    } else {
      Alert.alert(
        '',
        data.message,
        [{ text: 'Dismiss' }],
      )
    }
  } catch (err) {
    console.log(err.response ? err.response.data.message : err)

    Alert.alert(
      '',
      err.response ? err.response.data.message : err,
      [{ text: 'Dismiss' }],
    )
  } finally {
    dispatch({
      type: LOADING,
      payload: false,
    })
  }
}

export const forgotPassword = () => {}

export const logout = () => ({ type: LOGOUT })
