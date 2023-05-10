import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "a4da0b062fe2ed8a9679",
      clientSecret: "7a921441c4c266dabaa8b3fe8d2a69ed9254ee06",
    }),
    GoogleProvider({
      clientId:
        "180566327522-mlq16pqrbg2jcogefmt55tltibjnt2ap.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "zaqxswcdev123frbgtn456hymju,ki789.lo/;p",
};
export default NextAuth(authOptions);
