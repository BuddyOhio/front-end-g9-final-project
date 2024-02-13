import { Link } from "react-router-dom";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const Privacy = () => {
  return (
    <NavbarDesktop>
      <div>
        <header>
          <div className="bg-blue-100 pb-14 md:bg-white md:py-5 pt-[60px] md:pt-[0] md:mt-[80px]">
            {/* <!-- Header (Notificaiton) --> */}
            <div className="grid grid-cols-3 w-full items-center">
              {/* <!-- Go Back Button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="" />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-lg md:text-3xl">
                <h2 className="">Privacy</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-blue-100 h-full md:bg-white">
          <div className="flex flex-col gap-2 px-10 pt-8 bg-white rounded-t-3xl h-full">
            <h2 className="font-bold">Term of Use</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt
              modi molestias possimus voluptatibus sed dolor iure unde sint
              nemo? Ea exercitationem temporibus voluptate atque cupiditate ad
              nesciunt totam et!
            </p>

            <h2 className="font-bold">Siberian Service</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt
              modi molestias possimus voluptatibus sed dolor iure unde sint
              nemo? Ea exercitationem temporibus voluptate atque cupiditate ad
              nesciunt totam et!
            </p>
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
};

export default Privacy;
