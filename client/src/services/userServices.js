import Api from '../services/api'

export default{
  
  index (search, page) {
    return Api().get('admin/users/get', {
      params: {
        page,
        search: search
      }
    })
  },
  user (id) {
    return Api().get(`admin/users/${id}`)
  },
  previousOrders (id) {
    return Api().get(`dashboard/previousorders/${id}`)
  },
  changeRole (id, role) {
    return Api().post('admin/user/changerole', {id, role})
  },
  createLink (id) {
    return Api().post('user/paylink/update', {id})
  },
  getPaylinkReq (userId) {
    return Api().get(`admin/paylink/data/${userId}`)
  },
  payLinkSuccess(id) {
    return Api().post('admin/paylink/success', {id})
  }
}

  