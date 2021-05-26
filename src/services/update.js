import axios from 'axios'

const baseUrl = 'https://todos-go.herokuapp.com/api'

const updateQuote = (updateTask) => {
    const promise = axios({
        method: 'PUT',
        url: `${baseUrl}/todos/${updateTask.id}`,
        data: updateTask
    })

    return promise
}
export default updateQuote