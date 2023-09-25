// "use client"
// import Nav from "@components/Nav";
// import Landing from "@components/Landing";
import "@styles/globals.css";
import "./global.css";
import Provider from "@components/Provider";
// import { SessionProvider } from "next-auth/react";
import localfont from "next/font/local";
import {Toaster} from "react-hot-toast";


const sourceReguler = localfont({
    src: "../fonts/SourceSans3.ttf",
    variable: "--font-source"
});


export const metadata = {
    title: "Space Up | Cusat",
    description: "Campus Ambassador Website For Space Up Cusat",
};

const RootLayout = ({children}) => (
    <html lang='en'>
    <body className={`${sourceReguler.variable} bg-hero-pattern`}>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Source+Sans+3&display=swap"
              rel="stylesheet"/>
    </head>
    {/*<SessionProvider>*/}
    <Provider>
        <main>
            <Toaster
                position="top-center"
            />
            {/* <Nav /> */}
            {/* <Landing /> */}
            {children}
        </main>
    </Provider>
    {/*</SessionProvider>*/}
    </body>
    </html>
);

export default RootLayout;
