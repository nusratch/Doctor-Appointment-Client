import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://doctor-appointment-server-4nbo00mez-nusrats-projects-299df817.vercel.app",
});

export default axiosPublic;