import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://doctor-appointment-server-era2ha38a-nusrats-projects-299df817.vercel.app",
});

export default axiosPublic;