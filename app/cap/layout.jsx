"use client"
import Nav from "@components/Nav";
import "@styles/globals.css";
import Footer from "@components/Footer";
import {Fragment} from "react";

// export const metadata = {
//     title: "Space Up | Cusat",
//     description: "Campus Ambassador Website For Space Up Cusat",
// };

const RootLayout = ({ children }) => (
    <Fragment>

      <Nav />
      {children}
        <Footer />
    </Fragment>
);

export default RootLayout;
