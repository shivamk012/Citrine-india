import Api from '../services/api'

export default{
  txnid (id) {
    return Api().get(`payment/txnid/${id}`)
  },
  hash (payload) {
    return Api().post('payment/hash', payload)
  },
  payu (payload) {
    return Api().post('https://test.payu.in/_payment', payload)
  }
}
  