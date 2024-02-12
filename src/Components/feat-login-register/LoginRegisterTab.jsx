import { Link } from "react-router-dom";

const LoginRegisterTab = ({ currentUrl }) => {
  const items = [
    {
      text: "Create Account",
      url: "/register",
    },
    {
      text: "Login",
      url: "/login",
    },
  ];

  return (
    <div className="head-login flex justify-evenly my-8 text-gray-400 font-semibold md:hidden ">
      {items.map((item) => {
        const linkClassName =
          currentUrl === item.url ? "text-sky-400" : "hover:text-sky-400";

        return (
          <div key={item.text}>
            <Link to={item.url} className={linkClassName}>
              {item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LoginRegisterTab;
