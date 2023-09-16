import "@styles/globals.css";

// import Nav from "@components/Nav";
import Landing from "@components/Landing";
import Provider from "@components/Provider";

export const metadata = {
  title: "Space Up | Cusat",
  description: "Campus Ambassador Website For Space Up Cusat",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body className='bg-hero-pattern bg-cover bg-primary w-full'>
      <Provider>
        <main>
          {/* <Nav /> */}
          <Landing />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
