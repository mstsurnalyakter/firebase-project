import { useContext, useEffect, useState } from "react";
// import PropTypes from 'prop-types'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-red-500 px-3 text-white py-2 underline flex items-center"
              : "flex items-center "
          }
        >
          Home
        </NavLink>
      </Typography>
      {user && (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 px-3 text-white py-2 underline flex items-center"
                  : "flex items-center "
              }
            >
              About
            </NavLink>
          </Typography>
        </>
      )}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/personalData"}
          className={({ isActive }) =>
            isActive
              ? "bg-red-500 px-3 text-white py-2 underline flex items-center"
              : "flex items-center "
          }
        >
          Personal Data
        </NavLink>
      </Typography>
      {user && (
        <>
          <p className="text-green-600">{user.email}</p>
          <Button
            onClick={() => signOutUser()}
            size="sm"
            className="w-24 bg-purple-600"
          >
            Sign Out
          </Button>
        </>
      )}
      {/* {user && <p className="text-green-600">{user.email}</p>} */}
    </ul>
  );

  return (
    <div className="shadow-lg sticky top-0 mb-10 w-full z-50">
      <div className=" max-h-[768px] container shadow-none mx-auto max-w-7xl">
        <Navbar className="sticky top-0 shadow-none z-10 h-max  rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              User Auth App
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block capitalize"
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-red-500 text-white px-3 py-2 underline flex items-center"
                        : "flex items-center "
                    }
                    to={"/sign-in"}
                  >
                    Sign In
                  </NavLink>
                </Button>
                <Button
                  size="sm"
                  className="hidden lg:inline-block capitalize bg-transparent text-black"
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-red-500 text-white px-3 py-2 underline flex items-center"
                        : "flex items-center "
                    }
                    to={"/sign-up"}
                  >
                    Sign Up
                  </NavLink>
                </Button>

              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="capitalize">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-500 text-white px-3 py-2 underline flex items-center"
                      : "flex items-center "
                  }
                  to={"/sign-in"}
                >
                  Sign In
                </NavLink>
              </Button>
              <Button
                fullWidth
                size="sm"
                className="capitalize bg-transparent text-black"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-red-500 px-3 text-white py-2 underline flex items-center"
                      : "flex items-center "
                  }
                  to={"/sign-up"}
                >
                  Sign Up
                </NavLink>
              </Button>

            </div>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
