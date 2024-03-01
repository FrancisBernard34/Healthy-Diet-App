import "dotenv/config";
import NextAuth from "next-auth";
import { getToken } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { MongooseAdapter } from "@choutkamartin/mongoose-adapter";

export default NextAuth({
  adapter: MongooseAdapter(process.env.MONGODB_URI ?? ""),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "light",
  },
  debug: false,
});