import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-73f9a/us-central1/api'
    // cloud fn url
})

export default instance