import Axios from 'axios'
import Cookies from 'js-cookie'

const axios = Axios.create({
  baseURL: 'http://18.139.50.74:8080'
})

const register = {}
const login = {}
const checklist = {}
const item = {}

register.post = (data) => axios.post('/register', data)
login.post = (data) => axios.post('/login', data)

checklist.getAll = () => {
  const token = Cookies.get('token')
  const config = { headers: {Authorization: `Bearer ${token}`}}
  return axios.get('/checklist', config)
}

checklist.post = (data) => {
  const token = Cookies.get('token')
  const config = { headers: {Authorization: `Bearer ${token}`}}
  return axios.post('/checklist', data, config)
}

checklist.delete = (id) => {
  const token = Cookies.get('token')
  const config = { headers: {Authorization: `Bearer ${token}`}}
  return axios.delete(`/checklist/${id}`, config)
}
checklist.getById = (id) => {
  const token = Cookies.get('token')
  const config = { headers: {Authorization: `Bearer ${token}`}}
  return axios.get(`/checklist/${id}`, config)
}

item.getById = (id) => {
  const token = Cookies.get('token')
  const config = { headers: {Authorization: `Bearer ${token}`}}
  return axios.get(`/item/${id}`, config)
}

item.post = (data) => {
  const token = Cookies.get('token')
  const config = { headers: {Authorization: `Bearer ${token}`}}
  return axios.post('/item', data, config)
}

export {
  register,
  login,
  checklist,
  item,
}
