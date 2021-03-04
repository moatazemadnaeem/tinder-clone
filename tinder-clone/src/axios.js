import axios from 'axios';

const instance=axios.create({
baseURL:' https://moataz-tinder-backend.herokuapp.com',


})
export default instance;