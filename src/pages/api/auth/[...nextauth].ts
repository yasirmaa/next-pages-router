import { signIn, signInWithGoogle } from '@/lib/firebase/service';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn('users', { email });
        if (user) {
          const isValid = await compare(password, user.password);
          if (isValid) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account?.provider === 'credentials') {
        token.username = user.username;
        token.email = user.email;
        token.role = user.role;
      }
      if (account?.provider === 'google') {
        const data = {
          username: user.name,
          email: user.email,
          image: user.image,
          type: 'google',
        };

        await signInWithGoogle(data, (result: any) => {
          if (result.status) {
            token.username = result.data.username;
            token.email = result.data.email;
            token.image = result.data.image;
            token.type = result.data.type;
            token.role = result.data.role;
          }
        });
      }
      return token;
    },
    async session({ session, token }: any) {
      if ('username' in token) {
        session.user.username = token.username;
      }
      if ('email' in token) {
        session.user.email = token.email;
      }
      if ('role' in token) {
        session.user.role = token.role;
      }
      if ('image' in token) {
        session.user.image = token.image;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};

export default NextAuth(authOptions);
