import Api from '../services/api'

export default{
  
  post (body) {
    return Api().post('cart', body)
  },
  user (id) {
    return Api().get(`admin/users/${id}`)
  },
  index (id) {
    return Api().get(`cart/${id}`)
  }

}

  