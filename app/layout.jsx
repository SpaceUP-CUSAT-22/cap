import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Space Up | Cusat",
  description: "Campus Ambassador Website For Space Up Cusat",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
