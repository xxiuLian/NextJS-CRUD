import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GIT_ID,
      clientSecret: process.env.GIT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: "zaqxswcdev123frbgtn456hymju,ki789.lo/;p",
};
export default NextAuth(authOptions);
