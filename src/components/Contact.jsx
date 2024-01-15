import { Link } from "react-router-dom";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="grow">
        <header>
          <div className="bg-blue-100 pt-8 pb-14 lg:bg-white lg:py-5">
            {/* <!-- Header (Notificaiton) --> */}
            <div className="grid grid-cols-3 w-full items-center">
              {/* <!-- Go back button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="/picture/chevron-left-solid.svg" alt="Go Back" />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-lg lg:text-3xl">
                <h2 className="">Contact Us</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-blue-100 lg:bg-white h-full">
          <div className="flex flex-col gap-2 px-10 pt-8 bg-white rounded-t-3xl lg:text-xl h-full">
            <h2 className="font-bold">Address</h2>
            <p className="text-gray-400">
              Siberian B. ซอยแสงอุษา แขวงโคโนฮะ เขตบางบอน กรุงเทพมหานคร 10700
            </p>

            <h2 className="font-bold">Call Center</h2>
            <p className="text-gray-400">02-1029-1094</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
