import Api from '../services/api'

export default{
  save (credentials) {
    return Api().post('admin/product/create', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
  