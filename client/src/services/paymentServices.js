import Api from '../services/api'

export default{
  txnid () {
    return Api().get('payment/txnid')
  },
  hash (payload) {
    console.log('payload', payload)
    return Api().post('payment/hash', payload)
  },
  payu (payload) {
    return Api().post('https://test.payu.in/_payment', payload)
  }
}
  