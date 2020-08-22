import { combineReducers } from 'redux'

import loading from './loading'
import auth from './auth'
import faq from './faq'
import staff from './staff'
import insurance from './insurance'
import customers from './customers'

export default combineReducers({
  loading,
  auth,
  faq,
  staff,
  insurance,
  customers,
})
