import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APIURL, // replace with your API base URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
instance.interceptors.request.use(
    (config)=>{
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error.response?.data);
    }
)

export default instance;