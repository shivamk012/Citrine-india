import Api from '../services/api'

export default{
  
  getUsers () {
    return Api().get('admin/users')
  },
  user (id) {
    return Api().get(`admin/users/${id}`)
  }
}

  