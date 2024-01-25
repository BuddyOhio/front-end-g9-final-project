// import React from "react";

const CreateAccount = () => {
  return (
    <div>
      <div className="flex">
        {/* <!-- LEFT --> */}
        <div className="hidden md:block flex-1 h-screen w-full md:w-1/2 bg-theme md:bg-[#66d2e8]">
          <div className="justify-center align-middle flex p-10 my-10">
            <img src="../picture/doggold.png" />
          </div>
          <div className="text-center text-5xl text-white font-extrabold">
            <h1>DOG GO</h1>
          </div>
        </div>

        {/* <!-- RIGHT --> */}
        <div className="flex-1 max-md:bg-none md:bg-cover bg-theme-right">
          <div className="pt-8 px-6 md:px-24 md:text-xs w-full max-w-[1048px] flex flex-col gap-4 items-center justify-center h-full">
            <div className="font-bold text-2xl text-blue-900">
              <h2>Create Your Profile</h2>
            </div>
            <form className="grid gap-6 md:gap-4">
              {/* <!-- Full Name --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="fullname"
                  className="font-bold text-gray-400 md:text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id=""
                  value="Jonathan Sompong"
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="Full name"
                  required
                />
              </div>
              {/* <!-- Nickname --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="nickname"
                  className="font-bold text-gray-400 md:text-black"
                >
                  Nickname
                </label>
                <input
                  type="text"
                  name="nickname"
                  id=""
                  value="Somshy"
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="Nickname"
                  required
                />
              </div>
              {/* <!-- Date of Birth --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="dob"
                  className="font-bold text-gray-400 md:text-black"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id=""
                  value="2023-12-05"
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  required
                />
              </div>
              {/* <!-- Email --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="email"
                  className="font-bold text-gray-400 md:text-black"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id=""
                  value="siberian@whiskey.com"
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="siberian@whiskey.com"
                  required
                />
              </div>
              {/* <!-- Phone Number --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="phone-number"
                  className="font-bold text-gray-400 md:text-black"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id=""
                  value="082-798-4569"
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="09-000-0000"
                  required
                />
              </div>
              {/* <!-- Gender --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="gender"
                  className="text-md font-bold text-gray-400 md:text-black"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  id=""
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* <!--Weight Height --> */}
              <div className="grid grid-cols-2 gap-16">
                <div className="grid gap-1">
                  <label
                    htmlFor="Weight"
                    className="font-bold text-gray-400 md:text-black"
                  >
                    Weight
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="weight"
                    id=""
                    value="173"
                    className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3 w-full"
                    placeholder="175 cm"
                    required
                  />
                </div>
                <div className="grid gap-1">
                  <label
                    htmlFor="height"
                    className="font-bold text-gray-400 md:text-black"
                  >
                    Height
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="height"
                    id=""
                    value="55"
                    className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3 w-full"
                    placeholder="55 kg"
                    required
                  />
                </div>
              </div>

              {/* <!-- Button --> */}
              <div className="grid">
                <button
                  type="submit"
                  className="rounded-3xl text-white font-bold py-4 bg-[#66d2e8] hover:bg-[#39bad4] md:mt-4"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
