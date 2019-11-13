import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 200264a4682f292a59665926c7d377d4de779706bba271ef8208c6473ca91728' 
     }
});