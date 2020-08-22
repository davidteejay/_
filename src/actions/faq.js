/* eslint-disable import/prefer-default-export */
import { Alert } from 'react-native'

import {
  GET_FAQS, LOADING,
} from '../types'
import sendRequest from '../helpers/sendRequest'
import { refreshUserToken } from './auth'

export const getFAQs = () => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  })

  try {
    const { data } = await sendRequest('broker/getallfaq')
    console.log(data)
  } catch (err) {
    console.log(err.response ? err.response : err)

    if (err.response.status === 401) dispatch(refreshUserToken(() => dispatch(getFAQs())))
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
