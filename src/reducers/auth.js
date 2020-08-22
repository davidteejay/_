import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { SAVE_USER, LOGOUT, SAVE_TOKEN } from '../types'

const initialState = {
  loggedIn: false,
  user: null,
  token: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_USER:
      AsyncStorage.setItem('user', JSON.stringify(payload))
      return {
        ...state,
        user: payload,
        loggedIn: payload !== null,
      }
    case SAVE_TOKEN:
      AsyncStorage.setItem('token', JSON.stringify(payload))
      axios.defaults.headers.Authorization = payload.userToken ? `Bearer ${payload.userToken}` : null;

      return {
        ...state,
        token: payload,
      }
    case LOGOUT:
      AsyncStorage.multiRemove(['user', 'token'])
      return {
        ...state,
        loggedIn: false,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

export default authReducer
