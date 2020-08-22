import { GET_FAQS } from '../types'

const initialState = []

const faqReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FAQS:
      return payload
    default:
      return state
  }
}

export default faqReducer
