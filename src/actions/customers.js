/* eslint-disable import/prefer-default-export */
import { Alert } from 'react-native'

import {
  GET_CORPERATE_CUSTOMERS, GET_INDIVIDUAL_CUSTOMERS, REFRESHING,
} from '../types'
import sendRequest from '../helpers/sendRequest'
import { refreshUserToken } from './auth'

export const getAllCustomers = () => async (dispatch) => {
  dispatch({
    type: REFRESHING,
    payload: true,
  })

  try {
    const individual = await sendRequest('broker/getallcustomerindividual')
    console.log(individual)

    const corperate = await sendRequest('broker/getallcustomercorperate')
    console.log(corperate)
  } catch (err) {
    console.log(err.response ? err.response : err)

    if (err.response.status === 401) dispatch(refreshUserToken(() => dispatch(getAllCustomers())))
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
