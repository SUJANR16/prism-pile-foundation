import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import logo from "../../assets/images/logo/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Clients", path: "/clients" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      {/* Main Container */}

      <div className="max-w-[1600px] mx-auto px-5 lg:px-8">

        <div className="h-[115px] flex items-center">

          {/* =================================
              LEFT SIDE - LOGO + COMPANY NAME
          ================================== */}

          <Link
            to="/"
            className="flex items-center gap-4 shrink-0"
          >

            {/* Original Logo */}

            <img
              src={logo}
              alt="PRISM Logo"
              className="
                w-[105px]
                h-[105px]
                object-contain
              "
            />

            {/* Company Name */}

            <div className="leading-tight">

  <h1
    className="
      text-3xl
      md:text-4xl
      font-black
      tracking-wide
      text-blue-950
      whitespace-nowrap
    "
  >
    PRISM PILE
  </h1>

  <p
    className="
      text-sm
      md:text-base
      font-extrabold
      tracking-[1.5px]
      text-gray-600
      mt-1
      whitespace-nowrap
    "
  >
    FOUNDATION & CONSTRUCTION
  </p>

</div>

          </Link>


          {/* =================================
              RIGHT SIDE
          ================================== */}

          <div className="ml-auto flex items-center">

            {/* =================================
                DESKTOP NAVIGATION
            ================================== */}

            <nav
              className="
                hidden
                lg:flex
                items-center
                gap-8
                mr-8
              "
            >

              {links.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative
                    text-[17px]
                    font-bold
                    transition-all
                    duration-300
                    whitespace-nowrap

                    ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-3
                    after:h-[3px]
                    after:bg-blue-700
                    after:w-full
                    after:origin-center
                    after:transition-transform
                    after:duration-300

                    ${
                      isActive
                        ? "after:scale-x-100"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>

              ))}

            </nav>


            {/* =================================
                REQUEST QUOTE
            ================================== */}

            <Link
              to="/quote"
              className="
                hidden
                lg:flex
                items-center
                justify-center
                bg-blue-900
                text-white
                px-7
                py-4
                rounded-lg
                text-[16px]
                font-extrabold
                shadow-lg
                hover:bg-blue-700
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              Request Quote
            </Link>


            {/* =================================
                MOBILE MENU BUTTON
            ================================== */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="
                lg:hidden
                text-blue-950
                p-2
              "
              aria-label="Toggle menu"
            >

              {open ? (
                <FaTimes size={30} />
              ) : (
                <FaBars size={30} />
              )}

            </button>

          </div>

        </div>


        {/* =================================
            MOBILE MENU
        ================================== */}

        {open && (

          <div className="lg:hidden border-t border-gray-200 py-5">

            <nav className="flex flex-col gap-2">

              {links.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    px-4
                    py-3
                    rounded-lg
                    text-base
                    font-bold
                    transition

                    ${
                      isActive
                        ? "bg-blue-900 text-white"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>

              ))}


              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="
                  mt-2
                  bg-yellow-400
                  text-blue-950
                  text-center
                  py-3
                  rounded-lg
                  font-extrabold
                  hover:bg-yellow-300
                  transition
                "
              >
                Request Quote →
              </Link>

            </nav>

          </div>

        )}

      </div>

    </header>
  );
}