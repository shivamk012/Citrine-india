import Api from '../services/api'

export default{
  save (credentials) {
    return Api().post('admin/product/create', credentials, { headers: {
      "Content-Type": "multipart/form-data"
    }})
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
  