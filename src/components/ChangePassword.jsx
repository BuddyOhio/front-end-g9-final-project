import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div>
      <header>
        <div className="bg-blue-100 pt-8 pb-14">
          <div className="grid grid-cols-3 w-full items-center">
            <Link
              to="/security"
              className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
            >
              <img src="/picture/chevron-left-solid.svg" alt="ิBack" />
            </Link>

            <div className="justify-self-start text-blue-900 font-extrabold text-lg col-span-2">
              <h2 className="">Change Password</h2>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-blue-100">
        <div className="bg-white rounded-t-3xl pt-8 px-10 ">
          <form>
            <div className="grid gap-1">
              <label htmlFor="new-password" className="text-md">
                New Password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-4"
                placeholder="**** ****"
                required
              />
            </div>

            <div className="grid gap-1 py-5">
              <label htmlFor="confirm-password" className="text-md">
                Confirm Password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="border-solid border-2 border-gray-300 rounded-2xl px-4 py-4"
                placeholder="**** ****"
                required
              />
            </div>

            <div className="grid mt-80">
              <button
                type="submit"
                className="bg-blue-400 rounded-3xl text-white font-bold py-4"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
