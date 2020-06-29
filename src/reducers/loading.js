import { LOADING } from '../types'

const initialState = false

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return payload
    default:
      return state
  }
}

export default loadingReducer
