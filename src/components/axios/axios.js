import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-project-54181/us-central1/api' /// THE API (cloud function)
})


export default instance