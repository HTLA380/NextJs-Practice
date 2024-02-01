import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/app/(models)/User";
import bcrypt from "bcryptjs";

export const options = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/Login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
