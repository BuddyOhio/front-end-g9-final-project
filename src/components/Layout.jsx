import Nav from "./Nav";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex bg-black h-screen">
      <Nav />
      <div className="flex grow flex-col bg-gray-500">
        <Header />
        <div className="flex h-full">
          {children}
          <div className="bg-red-200 hidden md:flex w-[400px]">Nav</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
