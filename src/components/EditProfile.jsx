import { Link } from "react-router-dom";
import Layout from "./Layout";
import { useState } from "react";

import { user } from "../data/data.js";

function EditProfile() {
  const profile = user;
  const [fullname, setFullname] = useState(profile.fullname);
  const [nickname, setNickname] = useState(profile.nickname);
  const [dob, setDob] = useState(profile.dob);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [gender, setGender] = useState(profile.gender);
  const [weight, setWeight] = useState(profile.weight);
  const [height, setHeight] = useState(profile.height);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname, nickname, dob, email, phone, gender, weight, height);
  };
  return (
    <Layout>
      <div className="grow bg-white">
        <header>
          <div className="flex flex-col bg-blue-100 items-center gap-2 py-6 lg:bg-white">
            {/* <!-- Header (Profile) --> */}
            <div className="grid grid-cols-3 w-full items-center ">
              {/* <!-- Go back Button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="../picture/chevron-left-solid.svg" alt="" />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-xl lg:text-2xl">
                <h2 className="">Profile settings</h2>
              </div>
            </div>

            {/* <!-- Profile Picutre --> */}
            <div className="h-44 w-44 rounded-full border-[10px] border-solid border-white relative">
              {/* <!--Profile Photo  (อาจจะต้องเพิ่มให้อยู่ใน Form ที่หลัง)--> */}
              <img
                src="../picture/pack.PNG"
                className="w-full h-full object-cover rounded-full"
                alt="User profile picture"
              />

              {/* <!-- Edit Photo Button --> */}
              <div>
                <label htmlFor="image-upload" className="cursor-pointer">
                  <img
                    src="../picture/pen-to-square-regular.svg"
                    alt="edit profile picture"
                    className="absolute bottom-0 right-1 p-0.5 h-7 hover:h-8"
                  />
                </label>
                <input
                  type="file"
                  name=""
                  id="image-upload"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </header>

        {/* <!--Form  --> */}
        <main className="bg-blue-100 lg:bg-white flex justify-center">
          <div className="bg-white rounded-t-3xl pt-8 px-6 lg:px-24 lg:text-xs w-full max-w-[1048px]">
            <form onSubmit={handleSubmit} className="grid gap-6 lg:gap-4">
              {/* <!-- Full Name --> */}
              <div className="grid gap-1">
                <label htmlFor="fullname" className="font-bold text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id=""
                  onChange={(ev) => setFullname(ev.target.value)}
                  value={fullname}
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="Fullname"
                  required
                />
              </div>
              {/* <!-- Nickname --> */}
              <div className="grid gap-1">
                <label htmlFor="nickname" className="font-bold text-gray-400">
                  Nickname
                </label>
                <input
                  type="text"
                  name="nickname"
                  id=""
                  onChange={(ev) => setNickname(ev.target.value)}
                  value={nickname}
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="Nickname"
                  required
                />
              </div>
              {/* <!-- Date of Birth --> */}
              <div className="grid gap-1">
                <label htmlFor="dob" className="font-bold text-gray-400">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id=""
                  onChange={(ev) => setDob(ev.target.value)}
                  value={dob}
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  required
                />
              </div>
              {/* <!-- Email --> */}
              <div className="grid gap-1">
                <label htmlFor="email" className="font-bold text-gray-400">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id=""
                  onChange={(ev) => setEmail(ev.target.value)}
                  value={email}
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="siberian@whiskey.com"
                  required
                />
              </div>
              {/* <!-- Phone Number --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="phone-number"
                  className="font-bold text-gray-400"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id=""
                  onChange={(ev) => setPhone(ev.target.value)}
                  value={phone}
                  className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3"
                  placeholder="09-000-0000"
                  required
                />
              </div>
              {/* <!-- Gender --> */}
              <div className="grid gap-1">
                <label
                  htmlFor="gender"
                  className="text-md font-bold text-gray-400"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  id=""
                  onChange={(ev) => setGender(ev.target.value)}
                  value={gender}
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
                  <label htmlFor="Weight" className="font-bold text-gray-400">
                    Weight
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="weight"
                    id=""
                    onChange={(ev) => setWeight(ev.target.value)}
                    value={weight}
                    className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-3 w-full"
                    placeholder="175 cm"
                    required
                  />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="height" className="font-bold text-gray-400">
                    Height
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="height"
                    id=""
                    onChange={(ev) => setHeight(ev.target.value)}
                    value={height}
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
                  className="bg-[#66d2e8] hover:bg-[#39bad4] rounded-3xl text-white font-bold py-4"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default EditProfile;
