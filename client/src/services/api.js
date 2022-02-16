import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://jewellerysite.herokuapp.com/`
     // heroku app https://citrine-india.herokuapp.com/
    // baseURL : "http://localhost:8081"
  })
}
