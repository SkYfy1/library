import { DefaultSession } from "next-auth";

// Adding new field to user, jwt and session provider!

declare module "next-auth" {
  interface User {
    verified: boolean;
  }
  interface Session {
    user: {
      verified: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth" {
  interface JWT {
    id: string;
    name: string;
    verified: boolean;
  }
}
