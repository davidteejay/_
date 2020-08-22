import { GET_RISKS } from '../types'

const initialState = {
  risks: null,
}

const insuranceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RISKS:
      return {
        ...state,
        risks: payload,
      }
    default:
      return state
  }
}

export default insuranceReducer
