/* eslint-disable import/prefer-default-export */
import { Alert } from 'react-native'

import {
  GET_RISKS, REFRESHING,
} from '../types'
import sendRequest from '../helpers/sendRequest'
import { refreshUserToken } from './auth'

export const getRisks = () => async (dispatch) => {
  dispatch({
    type: REFRESHING,
    payload: true,
  })

  try {
    const { data } = await sendRequest('broker/getbrokerrisks')
    console.log(data)

    dispatch({
      type: GET_RISKS,
      payload: data,
    })
  } catch (err) {
    console.log(err.response ? err.response : err)

    if (err.response.status === 401) dispatch(refreshUserToken(() => dispatch(getRisks())))
    else {
      Alert.alert(
        '',
        err.response ? err.response.data.message : err,
        [{ text: 'Dismiss' }],
      )
    }
  } finally {
    dispatch({
      type: REFRESHING,
      payload: false,
    })
  }
}
