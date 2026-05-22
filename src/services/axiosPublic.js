import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://doctor-appointment-server-5b3q9lnuy-nusrats-projects-299df817.vercel.app",
});

export default axiosPublic;