import React, { useEffect, useState } from "react";
import FeetB from "../../../public/pet-feet-b.svg";
import FeetG from "../../../public/pet-feet-g.svg";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import { axiosRequest } from "../../axios";
import Lively from "../../../public/lively.png";
import Lonely from "../../../public/lonely.png";
import Joyfull from "../../../public/joyfull.png";
import Heavenly from "../../../public/Heavenly.png";

const Pet = () => {
  const [petName, setPetName] = useState("whisky");
  const [petNameChange, setPetNameChange] = useState(false);
  const [editName, setEditName] = useState(petName);
  const [emotionTypeShow, setEmotionTypeShow] = useState(null);
  const [emotionPicShow, setEmotionPicShow] = useState(null);
  const [bgEmotion, setBgEmotion] = useState("");

  const editNameClick = () => {
    setPetName(editName);
    setPetNameChange(false);
  };

  const setEmotionPet = async () => {
    // Get emotion By userId in Token -----------------------------
    try {
      const response = await axiosRequest.get("/api/pet", {
        withCredentials: true,
      });

      if (response.status === 200) {
        // console.log(response.data);
        // const emotionRank = 6;
        const emotionRank = response.data.emotionRank;
        // console.log("emotionRank => ", emotionRank);
        // console.log("emotionRank type => ", typeof emotionRank);
        if (emotionRank >= 6) {
          // 6-7: Heavenly
          setEmotionTypeShow("Heavenly!!!");
          setBgEmotion("bg-green-500");
          setEmotionPicShow(Heavenly);
        } else if (emotionRank >= 4) {
          // 4-5: joyfull
          setEmotionTypeShow("joyfull!!");
          setBgEmotion("bg-yellow-400");
          setEmotionPicShow(Joyfull);
        } else if (emotionRank >= 2) {
          // 2-3: lively
          setEmotionTypeShow("lively :)");
          setBgEmotion("bg-cyan-300");
          setEmotionPicShow(Lively);
        } else if (emotionRank >= 0) {
          // 0-1: lonely
          setEmotionTypeShow("lonely :(((");
          setBgEmotion("bg-zinc-300");
          setEmotionPicShow(Lonely);
        }
      }
    } catch (error) {
      console.error("error from /api/pet", error);
    }
  };

  useEffect(() => {
    setEmotionPet();
  }, []);

  return (
    <NavbarDesktop>
      <main className="content relative lg:h-full mt-12">
        <section className="feet-bg__container absolute w-screen h-screen overflow-hidden lg:w-full lg:h-full md:hidden">
          <div className="feet-b1 absolute top-[-140px] left-[-150px] rotate-[25deg]">
            <img src={FeetB} alt="feet-bg" />
          </div>

          <div className="feet-b2 absolute top-[110px] right-[-60px] rotate-[-10deg] w-[130px]">
            <img src={FeetB} alt="feet-bg" />
          </div>

          {/* <div className="feet-b3 absolute bottom-[30vh] right-[30vw] rotate-[20deg] w-[110px]">
            <img src={FeetB} alt="feet-bg" />
          </div> */}

          <div className="feet-g1 absolute bottom-[35vh] left-[-10vw] rotate-[90deg] w-[20vw]">
            <img src={FeetG} alt="feet-bg" />
          </div>

          <div className="feet-g2 absolute bottom-[-5px] right-[-100px] rotate-[-10deg] w-[200px]">
            <img src={FeetG} alt="feet-bg" />
          </div>
        </section>

        <section className="pet__content__container z-20">
          <div className="pet__content-header flex justify-center items-center pt-[8vh] relative mx-4 z-20">
            <h1
              className="pet__name text-lg font-semibold uppercase text-blue-900 py-2 px-16 rounded-[20px] bg-white shadow-md lg:text-2xl z-20"
              id="pet-name"
            >
              {petName}
            </h1>
            {/* <span
              className="pet__edit-name-icon absolute right-0 text-3xl cursor-pointer z-10 lg:mr-5"
              id="edit-name-icon"
              onClick={() => setPetNameChange(true)}
            >
              <i className="ri-edit-2-line"></i>
            </span> */}
          </div>

          <div className="pet__content-img flex justify-center w-full mt-[10vh] z-20">
            <img
              src={emotionPicShow}
              alt="pet-logo"
              className="block max-w-[240px] h-auto z-20"
            />
          </div>

          <div className="pet__content-emotion mt-[10vh] z-20">
            <div className="z-20">
              <h3
                className={`pet-emotion p-6 text-2xl font-semibold text-white uppercase text-center tracking-[3px] ${bgEmotion} z-10`}
              >
                {emotionTypeShow}
              </h3>
            </div>
          </div>
        </section>

        {/* Modal */}
        {petNameChange && (
          <section className="change__name__container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[300px] p-4 rounded-[15px] bg-white shadow-md transition-all duration-500">
            <form className="form__change__name flex flex-col">
              <label
                for="input-dog-name"
                className="text-gray-500 text-sm mt-16 pl-2 lg:text-xl"
              >
                Change Dog Name
              </label>

              <input
                type="text"
                name="input-dog-name"
                id="input-dog-name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="mt-3 py-2 px-3 text-base rounded-[10px] border border-gray-300 outline-none lg:text-lg lg:mt-6"
              />
              <button
                className="bg-cyan-400 text-white font-medium tracking-[0.5px] p-3 rounded-[10px] border-none outline-none my-12 cursor-pointer lg:text-xl"
                id="finish-btn"
                onClick={editNameClick}
              >
                Finished
              </button>

              <span
                className="close-icon absolute top-[15px] right-[15px] text-2xl cursor-pointer z-10"
                id="close-modal"
                onClick={() => setPetNameChange(false)}
              >
                <i className="ri-close-fill"></i>
              </span>
            </form>
          </section>
        )}
      </main>
    </NavbarDesktop>
  );
};

export default Pet;
