import Api from '../services/api'

export default{
  
  post (body) {
    return Api().post('cart', body)
  },
  delete (productId, userId) {
    return Api().delete(`cart/${userId}/${productId}`)
  },
  quantityChange (payload) {
    return Api().post('cart/quantityChange', payload)
  },
  isActive (id) {
    return Api().get(`cart/active/${id}`)
  }
}

  