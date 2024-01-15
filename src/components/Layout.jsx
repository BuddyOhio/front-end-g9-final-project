import Nav from "./Nav";
import Header from "./Header";
import Activity from "./Activity";

function Layout({ children }) {
  const { LastActivity } = Activity();
  return (
    <div className="flex bg-black h-screen">
      <Nav />
      <div className="flex grow flex-col bg-gray-500">
        <Header />
        <div className="flex h-full">
          {children}
          <LastActivity />
        </div>
      </div>
    </div>
  );
}

export default Layout;
