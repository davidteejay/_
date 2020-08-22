import { LOADING, REFRESHING } from '../types'

const initialState = {
  loading: false,
  refreshing: false,
}

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload,
      }
    case REFRESHING:
      return {
        ...state,
        refreshing: payload,
      }
    default:
      return state
  }
}

export default loadingReducer
