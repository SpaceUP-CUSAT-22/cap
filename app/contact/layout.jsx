"use client"
import Nav from "@components/Nav";
import "@styles/globals.css";
import {Fragment} from "react";

// export const metadata = {
//     title: "Space Up | Cusat",
//     description: "Campus Ambassador Website For Space Up Cusat",
// };

const RootLayout = ({ children }) => (
    <Fragment>
        <main>
             <Nav />
            {children}
        </main>
    </Fragment>
);

export default RootLayout;
