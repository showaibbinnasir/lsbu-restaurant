import { toast } from "keep-react";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bycrypt from "bcryptjs"
import client from "@/lib/databaseConnect";

 export const authOptions = {
    providers : [
        CredentialsProvider({
            name : "credentials",
            credentials : {},

            async authorize(credentials) {
                const {email, password} = credentials
                try{
                    const users = client.db('lsburestaurant').collection('users')
                    const user = await users.findOne({email:email})
                    if(!user){
                        return null
                    }
                    const passwordMatch = await bycrypt.compare(password, user?.password)
                    if (!passwordMatch) {
                        return null
                    }
                    return {
                        name : user.name,
                        email : user.email,
                        id : user._id.toString()
                    }
                }catch(error){
                    toast.error("something went wrong")
                    return null
                }
                
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "auth/login",
    },
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}