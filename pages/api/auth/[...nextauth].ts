import "dotenv/config";
import NextAuth from "next-auth";
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
  secret: process.env.SECRET || process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "light",
  },
  debug: false,
});