import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: "https://doctor-appointment-server-b7yksvdc8-nusrats-projects-299df817.vercel.app",
});