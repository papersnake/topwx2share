import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://free-api.heweather.com/v5'
})

class Api {
  static getWeather (city) {
    return Promise.resolve(instance.get('/forecast', {
      params: {
        city: city,
        key: 'de5f033e21904c6886bc1fe682bc16a5'
      }
    }))
  }
}

export default Api
