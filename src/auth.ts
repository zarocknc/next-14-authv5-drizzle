import NextAuth from "next-auth"

// import Facebook from "next-auth/providers/facebook"
import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"
// import Instagram from "next-auth/providers/instagram"

import type { NextAuthConfig } from "next-auth"


import { DrizzleAdapter } from "@auth/drizzle-adapter"


export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    // Facebook,
    GitHub,
    // Google,
    // Instagram,
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    session({ session, user }) {
      if (session.user) {
        session.user.role = "Cliente"
      }
      return session
    }
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)