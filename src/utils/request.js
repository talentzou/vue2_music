import axios from "axios";
const ajax=axios.create({
    // baseURL:'http://localhost:8080/api',
    baseURL:'/api',
    timeout:5000
})
export default ajax