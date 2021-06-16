import Api from '../services/api'

export default{
  txnid () {
    return Api().get('payment/txnid')
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
  