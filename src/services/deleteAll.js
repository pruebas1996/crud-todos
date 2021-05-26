import axios from 'axios'

const baseUrl = 'https://todos-go.herokuapp.com/api'

const deleteQuote = id => {
  const promise = axios({
    method: 'DELETE',
    url: `${baseUrl}/todos/${id}`
  })

  return promise
}

export default deleteQuote