/* eslint-disable import/prefer-default-export */
import { Alert } from 'react-native'

import {
  GET_ALL_STAFF, LOADING, REFRESHING,
} from '../types'
import sendRequest from '../helpers/sendRequest'
import { refreshUserToken } from './auth'

export const getAllStaff = () => async (dispatch) => {
  dispatch({
    type: REFRESHING,
    payload: true,
  })

  try {
    const { data } = await sendRequest('broker/getallbrokerstaff')
    console.log(data)
  } catch (err) {
    console.log(err.response ? err.response : err)

    if (err.response.status === 401) dispatch(refreshUserToken(() => dispatch(getAllStaff())))
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

export const addStaff = (staff, callback) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  })

  try {
    const { data } = await sendRequest('broker/createbrokerstaff', 'post', staff)
    console.log(data)
  } catch (err) {
    console.log(err.response ? err.response : err)

    if (err.response.status === 401) {
      dispatch(refreshUserToken(() => dispatch(addStaff(staff, callback))))
    } else {
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
