import { SAVE_USER, LOGOUT, SAVE_TOKEN, SAVE_CSP_ID, NO_SERVICE } from '../types'

const initialState = {
  loggedIn: false,
  user: null,
  token: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default authReducer
