import Api from '../services/api'

export default{
  
  post (body) {
    return Api().post('cart', body)
  },
  delete (productId, userId) {
    return Api().delete(`cart/${userId}/${productId}`)
  },
  index (id) {
    return Api().get(`cart/${id}`)
  }

}

  