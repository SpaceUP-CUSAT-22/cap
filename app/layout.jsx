"use client"
// import Nav from "@components/Nav";
// import Landing from "@components/Landing";
import "@styles/globals.css";
import Provider from "@components/Provider";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Space Up | Cusat",
  description: "Campus Ambassador Website For Space Up Cusat",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body className='bg-hero-pattern bg-cover bg-primary w-full'>
      <SessionProvider>
        <Provider>
          <main>
            {/* <Nav /> */}
            {/* <Landing /> */}
            {children}
          </main>
        </Provider>
      </SessionProvider>
    </body>
  </html>
);

export default RootLayout;
