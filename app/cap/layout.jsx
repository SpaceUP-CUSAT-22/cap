"use client"
import Nav from "@components/Nav";
import "@styles/globals.css";
import Footer from "@components/Footer";

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
        <Footer />
    </main>
    </body>
    </html>
);

export default RootLayout;
