import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    convexToken?: string; // Add convexToken to the Session type
    user: {
      username?: string; // Add username field
    } & DefaultSession["user"];
  }
}
