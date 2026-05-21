import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://doctor-appointment-server-b7yksvdc8-nusrats-projects-299df817.vercel.app",
});

export default axiosPublic;