import Navbar from "../feat-navDesktop/Navbar";
import Sidebar from "../feat-navDesktop/Sidebar";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const WelcomeToApplication = () => {
  return (
    <>
      <NavbarDesktop>
        <header className="header relative mt-12">
          <div className="header__bg-cycle absolute top-0 left-0 w-full h-[35vh] rounded-b-[20%] -z-10 bg-cyan-100"></div>

          <div className="header__container relative flex justify-center items-center pt-8 gap-x-12"></div>
        </header>

        <main className="content bg-white mx-4 md:mx-7 lg:mx-6  ">
          <section className="w-1/2 m-auto mt-10">
            <img
              src="public/login_welcometomyapplication.png"
              alt="siberian"
              className="hidden md:block"
            />
            <div className="hidden md:block text-center mt-5 font-medium  text-md text-sky-700">
              <h2>
                Welcome to <span className="text-sky-500 font-bold">DOGGO</span>
              </h2>
              <p className="mt-3">"Let's have fun with dog and</p>
              <p>make it healthy for new you"</p>
            </div>
          </section>

          <section className=" md:hidden">
            <div className="mt-12 text-base font-normal text-gray-500 text-center ">
              <h3 className="">No activity</h3>
            </div>
          </section>
        </main>
      </NavbarDesktop>
    </>
  );
};

export default WelcomeToApplication;
