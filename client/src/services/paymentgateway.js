import Api from '../services/api'

export default{
    pay (credentials) {
        return Api().post('https://test.payu.in/_payment', credentials, { headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "accept" : "	application/json"
        }})
    }
  }