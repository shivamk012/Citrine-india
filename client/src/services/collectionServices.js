import Api from '../services/api'

export default{
  all () {
    return Api().get('collection/all')
  }
}