import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-clone-mern-backendd.herokuapp.com/"
});

export default instance;