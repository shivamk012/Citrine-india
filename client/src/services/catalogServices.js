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
  get (id) {
    return Api().get(`admin/product/${id}`)
  },
  productAndRelated (pname) {
    return Api().get(`product/${pname}`)
  },
  update (credentials, id) {
    return Api().post(`admin/product/${id}/edit`, credentials, { headers: {
      "Content-Type": "multipart/form-data"
    }})
  },
  removeImage (keys) {
    return Api().delete('admin/remove/img', keys)
  }
  // deleteitem (id) {
  //   return Api().delete('admin/product/delete', id)
  // }
}
