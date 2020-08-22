import axios from 'axios'
import { API_URL } from '../config/constants'

const sendRequest = (route, method = 'get', data = null) => {
  const config = {
    data,
  }
  config.method = method
  const url = `${API_URL}/${route}`

  return axios(url, config)
}

export default sendRequest
