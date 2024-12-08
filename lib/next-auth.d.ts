import "next-auth";

declare module "next-auth" {
  interface Session {
    convexToken?: string; // Add convexToken to the Session type
  }
}
