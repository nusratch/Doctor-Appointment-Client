import { createAuthClient } from "better-auth/client";

export const authClient =
  createAuthClient({

    baseURL:
      "https://doctor-appointment-server-seven.vercel.app/api/auth",

  });