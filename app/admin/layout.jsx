import "@styles/globals.css";
import Provider from "@components/Provider";
import Sidebar from "@components/admin/Sidebar";

export const metadata = {
  title: "Space Up | Cusat",
  description: "Campus Ambassador Website For Space Up Cusat",
};

const AddAdminLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <main className=''>
          <div className="grid grid-cols-6">
            <Sidebar />
            <div className="col-span-5 py-10">
              {children}
            </div>
          </div>
        </main>
      </Provider>
    </body>
  </html>
);

export default AddAdminLayout;