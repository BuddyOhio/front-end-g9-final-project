import "./login.css";
import login_Logo from "../../../public/login_Logo.png";

const LeftPage = () => {
  return (
    <div className="bg-theme-right hidden md:flex flex-1 h-dvh w-full md:w-1/2 bg-theme md:bg-[#66d2e8]">
      <div className="hidden md:flex md:flex-col md:my-auto md:w-full">
        <div className="justify-center align-middle flex pb-10">
          <img src={login_Logo} />
        </div>
        <div className="text-center text-5xl text-white font-extrabold">
          <h1>DOG GO</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftPage;
