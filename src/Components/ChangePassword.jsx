import LeftPage from "./LeftPage"


const ChangePassword =()=>{
  return (
    <div className="flex">
      <LeftPage />
      <div className="flex-1 h-screen w-100 max-md:bg-none md:bg-cover bg-theme-right">
        <div className="flex flex-col h-screen">
          <div className="mt-36 md:my-auto flex flex-col h-screen md:h-auto">
            <div className="text-sky-300 md:text-center md:text-blue-950 mx-11 mb-10">
              <h1 className="font-semibold text-2xl mb-3">Change New Password</h1>
              <p className="text-sm font-semibold text-gray-400 md:text-gray-500">
                Enter a different password with the previous
              </p>
            </div>
            <form action="Desktop_succesPass.html">
              <div className="flex-1 w-auto mx-10">
                <label className="font-semibold mx-3" for="input-email">
                  Email address
                </label>
                <br />
                <input
                  className="border-2 p-2 rounded-lg w-full mb-3"
                  type="email"
                  id="input-email"
                  placeholder="siberianwhisky@gmail.com"
                  required
                />
                <br />
                <label className="font-semibold mx-3" for="input-password">
                  Password
                </label>
                <br />
                <input
                  className="border-2 p-2 rounded-lg w-full"
                  type="password"
                  id="input-password"
                  placeholder="************"
                  required
                />
                <br />
              </div>
              <div className="mt-10 mx-10 text-md text-center flex flex-1 align-bottom">
                <button
                  type="submit"
                  className="w-full block mb-auto mx-auto p-3 rounded-xl bg-[#66d2e8]  hover:bg-[#39bad4] font-bold text-md text-white text-center"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword