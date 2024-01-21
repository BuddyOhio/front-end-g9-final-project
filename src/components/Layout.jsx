import Nav from "./Nav";
import Header from "./Header";

import NavActivity from "./activity/NavActivity";

function Layout({ children }) {
  return (
    <div className="flex bg-black h-screen">
      <Nav />
      <div className="flex grow flex-col bg-gray-500">
        <Header />
        <div className="flex h-full">
          {children}
          <NavActivity />
        </div>
      </div>
    </div>
  );
}

export default Layout;
