import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: "https://doctor-appointment-server-5b3q9lnuy-nusrats-projects-299df817.vercel.app",
});