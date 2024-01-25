function Header() {
  return (
    <div>
      <div className="bg-amber-100 border-b-2 border-gray-200 hidden md:block">
        <nav className="navbar cursor-pointer bg-white py-[15px] px-[20px]">
          <div className="flex justify-between">
            <div className="flex-col text-blue-950">
              <p className="px-5 text-xl">Welcome!</p>
              <p className="px-5 text-base">Kanjana Kannarest</p>
            </div>
            <div className="flex items-center gap-5 text-blue-950">
              <i className="fa-solid fa-bell text-xl"></i>
              <i className="fa-solid fa-gear text-xl"></i>
              <i className="fa-solid fa-user text-xl"></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
