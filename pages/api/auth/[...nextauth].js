import NextAuth from "next-auth";
import connectdb from "../../../lib/connectdb";
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import User from "../../../models/User";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Credentials({
      async authorize(credentials) {
        //Connect to DB
        await connectdb();
        //Find user with the email
        const result = await User.findOne({
          email: credentials.email,
        });
        //Not found - send error res
        if (!result) {
          connectdb.close();
          throw new Error("No user found with the email");
        }
        //Check hased password with DB password
        const checkPassword = await compare(
          credentials.passowrd,
          result.passowrd
        );
        //Incorrect password - send response
        if (!checkPassword) {
          connectdb.close();
          throw new Error("Password doesnt match");
        }
        //Else send success response
        connectdb.close();
        return { email: result.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ token, session }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
