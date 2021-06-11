import Api from '../services/api'

export default{
  
  index (search, page) {
    return Api().get('admin/users', {
      params: {
        page,
        search: search
      }
    })
  },
  user (id) {
    return Api().get(`admin/users/${id}`)
  }
}

  