import axios from 'axios'

const api = axios.create({
    baseURL: 'https://blockapi.azurewebsites.net/api'
})

export default api;