"use client"
import Nav from "@components/Nav";
import "@styles/globals.css";

// export const metadata = {
//     title: "Space Up | Cusat",
//     description: "Campus Ambassador Website For Space Up Cusat",
// };

const RootLayout = ({ children }) => (
    <>
        <Nav />
        {children}
    </>
);

export default RootLayout;
