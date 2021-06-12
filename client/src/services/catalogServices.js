// use product instead of catalog

import Api from '../services/api'

export default{
  save (credentials) {
    return Api().post('admin/product/create', credentials, { headers: {
      "Content-Type": "multipart/form-data"
    }})
  },
  index (search, page) {
    return Api().get('admin/product', {
      params: {
        page,
        search: search
      }
    })
  },
  edit (id) {
    return Api().get(`admin/product/${id}`)
  }
}
