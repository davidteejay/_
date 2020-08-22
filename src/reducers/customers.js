import { GET_CORPERATE_CUSTOMERS, GET_INDIVIDUAL_CUSTOMERS, LOADING } from '../types'

const initialState = {
  corperate: [],
  individual: [],
}

const customerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CORPERATE_CUSTOMERS:
      return {
        ...state,
        corperate: payload,
      }
    case GET_INDIVIDUAL_CUSTOMERS:
      return {
        ...state,
        individual: payload,
      }
    default:
      return state
  }
}

export default customerReducer
