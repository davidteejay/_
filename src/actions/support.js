/* eslint-disable import/prefer-default-export */
import { Alert } from 'react-native'

import {
  LOADING,
} from '../types'
import sendRequest from '../helpers/sendRequest'
import { refreshUserToken } from './auth'

export const sendTicket = (ticket) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  })

  try {
    const { data } = await sendRequest('broker/createsupportticket', 'post', ticket)
    console.log(data)
    Alert.alert(
      '',
      data.message,
      [{ text: 'Dismiss' }],
    )
  } catch (err) {
    console.log(err.response ? err.response : err)

    if (err.response.status === 401) dispatch(refreshUserToken(() => dispatch(sendTicket(ticket))))
    else {
      Alert.alert(
        '',
        err.response ? err.response.data.message : err,
        [{ text: 'Dismiss' }],
      )
    }
  } finally {
    dispatch({
      type: LOADING,
      payload: false,
    })
  }
}
