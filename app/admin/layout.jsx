import "@styles/globals.css";
import Provider from "@components/Provider";
import Sidebar from "@components/admin/Sidebar";

export const metadata = {
  title: "Space Up | Cusat",
  description: "Campus Ambassador Website For Space Up Cusat",
};

const AddAdminLayout = ({ children }) => (
  <div className="bg-white">
    <Provider>
      <main className=''>
        <div className="grid grid-cols-6 ">
          <div className="col-span-1 top-0">
            <Sidebar />
          </div>
          <div className="col-span-5 py-10 overscroll-y-auto">
            {children}
          </div>
        </div>
      </main>
    </Provider>
  </div>
);

export default AddAdminLayout;
