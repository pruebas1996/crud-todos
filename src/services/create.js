import axios from 'axios'

const baseUrl = 'https://todos-go.herokuapp.com/api'

const create = newtask => {
  const promise = axios({
    method: 'POST',
    url: `${baseUrl}/todos`,
    data: newtask
  })

  return promise
}

export default create