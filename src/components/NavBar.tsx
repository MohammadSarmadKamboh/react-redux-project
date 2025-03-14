import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Users", link: "/users" },
  { name: "Form", link: "/form" },
  { name: "Comments", link: "/comments" },
];

const NavBar = () => {
  return (
    <div className="flex justify-center items-center gap-5 h-12 px-10 text-black font-bold hover:shadow-lg border-y-2 border-black mt-10 mx-auto w-11/12">
      {navLinks.map((item, index) => {
        return (
          <Link
            to={item.link}
            key={index}
            className="hover:scale-110 will-change-transform transition-transform focus:text-red-500 focus:underline focus:underline-offset-[5px] ">
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
