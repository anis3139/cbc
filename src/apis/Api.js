import axios from "axios";

const Api = axios.create({
    baseURL: 'http://10.15.15.4/', 
    timeout: 90000,
    headers: { Accept: 'application/json' },
});
 
let AUTH_TOKEN=localStorage.getItem('token' ); 
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default Api;