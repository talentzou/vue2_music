import axios from "axios";
const ajax=axios.create({
    // baseURL:" http://localhost:3000",
    baseURL:'http://localhost:8080/api',
    timeout:5000
})
export default ajax