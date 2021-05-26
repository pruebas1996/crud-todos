import axios from "axios"

const baseUrl = 'https://todos-go.herokuapp.com/api'

const read = () => {
  const promise = axios.get(`${baseUrl}/todos`)

  return promise
}

export default read