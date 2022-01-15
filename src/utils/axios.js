import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-clone-73f9a.cloudfunctions.net/api'
    // cloud fn url
})

export default instance

//http://localhost:5001/clone-73f9a/us-central1/api