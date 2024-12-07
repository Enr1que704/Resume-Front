// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = () => (
    <nav className="bg-gray-800 h-12 flex justify-around z-12">
        {/* Add your nav content here */}
    </nav>
);

export const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="text-white flex items-center no-underline p-1.25 h-1/2 cursor-pointer text-lg"
        activeClassName="underline decoration-5 underline-offset-12"
    >
        {children}
    </Link>
);

// spacing within the NavMenu
export const NavMenu = ({ children }) => (
    <div className="flex mr-[-24px] items-center w-full mx-auto px-4 md:hidden">
        {children}
    </div>
);