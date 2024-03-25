import axios from "axios";
import {baseURL} from "../constants";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use (request => {
    request.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjA1MTc1ZjgwZDU0YjAwZDBkOTBmZmFkZmFlYWRkOSIsInN1YiI6IjY1ZGI3NzBmYTI0YzUwMDE2MjBmYzU3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CXK7ul7Rlpxrx7YwdqWvmip4ed1lnzPQbZPPF2sfflo'
    return request
})

export {
    apiService
}