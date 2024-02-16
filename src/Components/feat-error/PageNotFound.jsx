import React from "react";
import dogError from "../../../public/dogError.svg";
import dogfeetError from "../../../public/dogfeetError.svg";
import cornerDog from "../../../public/cornerDog.svg";

const PageNotFound = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-6/12 flex flex-col relative">
        <div className="absolute">
          <img src={cornerDog} className="w-4/5 " />
        </div>
        <div className="absolute bottom-0">
          <img src={dogfeetError} />
        </div>
        <div className="flex flex-col pl-10 lg:pl-20 py-10 absolute top-80">
          <p className="text-5xl text-rose-600 lg:text-6xl font-bold py-2">
            Opps!
          </p>
          <p className="lg:text-xl py-2">
            We can&rsquo;t seem to find the page you&rsquo;re looking for.
          </p>
          <p className="lg:text-lg font-light py-2">Error code: 404</p>
        </div>
      </div>
      <div className="w-6/12 relative">
        <img src={dogError} className="w-full absolute lg:top-40 top-80" />
      </div>
    </div>
  );
};

export default PageNotFound;
