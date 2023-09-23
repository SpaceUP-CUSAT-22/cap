"use client"
import Nav from "@components/Nav";
import "@styles/globals.css";

// export const metadata = {
//     title: "Space Up | Cusat",
//     description: "Campus Ambassador Website For Space Up Cusat",
// };

const RootLayout = ({ children }) => (
    <html lang='en'>
    <body className='bg-hero-pattern bg-cover bg-primary w-full'>
    <main>
      <Nav />
      {children}
    </main>
    </body>
    </html>
);

export default RootLayout;
