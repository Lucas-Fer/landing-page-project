import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyCiLU5tVWZd0OBn7Yn_R8POHReQrybFG-Y',
  },
})

export default axiosInstance
