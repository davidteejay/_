import { GET_ALL_STAFF } from '../types'

const initialState = {
  all: null,
}

const staffReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_STAFF:
      return {
        ...state,
        all: payload,
      }
    default:
      return state
  }
}

export default staffReducer
