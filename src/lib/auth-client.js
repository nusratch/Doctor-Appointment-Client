import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: "https://doctor-appointment-server-era2ha38a-nusrats-projects-299df817.vercel.app",
});