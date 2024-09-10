import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";
if(!process.env.SESSION_SECRET){
    throw new Error('Session secret is needed');
}

export const themeStorage = createCookieSessionStorage({
    cookie: {
      name: '__remix-themes',
      sameSite: 'lax',
      path: '/',
      httpOnly: true,
      secrets: [process.env.SESSION_SECRET],
      secure: true,
      maxAge:60*60*24*30*12,
    },
  })

  export const themeSessionResolver = createThemeSessionResolver(themeStorage)