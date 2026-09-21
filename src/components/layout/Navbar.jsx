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
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <header className="hidden lg:block sticky top-0 z-[9000] bg-white shadow-md">

        <div className="w-full max-w-[1600px] mx-auto px-6 xl:px-8">

          <div className="h-[96px] flex items-center">

            {/* =================================================
                LOGO + COMPANY NAME
            ================================================= */}

            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
            >

              <img
                src={logo}
                alt="PRISM Logo"
                className="
                  w-[82px]
                  h-[82px]
                  object-contain
                  shrink-0
                "
              />

              <div className="leading-tight">

                <h1
                  className="
                    text-[27px]
                    xl:text-[29px]
                    font-black
                    tracking-wide
                    text-blue-950
                    whitespace-nowrap
                    m-0
                  "
                >
                  PRISM PILE FOUNDATION
                </h1>

                <p
                  className="
                    text-[13px]
                    xl:text-[14px]
                    font-extrabold
                    tracking-[1.5px]
                    text-gray-600
                    mt-1
                    whitespace-nowrap
                    m-0
                  "
                >
                  AND CONSTRUCTION
                </p>

              </div>

            </Link>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="ml-auto flex items-center min-w-0">

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}

              <nav
                className="
                  flex
                  items-center
                  gap-5
                  xl:gap-6
                  mr-5
                "
              >

                {links.map((item) => (

                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      relative

                      text-[16px]
                      xl:text-[17px]

                      font-bold

                      transition-all
                      duration-300

                      whitespace-nowrap

                      ${
                        isActive
                          ? "text-blue-700"
                          : "text-blue-950 hover:text-blue-700"
                      }

                      after:absolute
                      after:left-0
                      after:right-0
                      after:-bottom-3
                      after:h-[3px]

                      after:bg-yellow-400

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


              {/* =================================================
                  GET A QUOTE
              ================================================= */}

              <Link
                to="/quote"
                className="
                  flex
                  items-center
                  justify-center

                  bg-blue-950
                  text-white

                  px-5
                  xl:px-6

                  py-3

                  rounded-lg

                  text-[14px]
                  xl:text-[17px]

                  font-extrabold

                  shadow-md

                  hover:bg-blue-700
                  hover:-translate-y-1
                  hover:shadow-xl

                  transition-all
                  duration-300

                  whitespace-nowrap
                "
              >
                GET A QUOTE
              </Link>

            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
          MOBILE / TABLET
          ONLY HAMBURGER
      ===================================================== */}

      <div className="lg:hidden">

        {/* =================================================
            FLOATING HAMBURGER
        ================================================= */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            fixed

            top-4
            right-4

            z-[10001]

            w-[48px]
            h-[48px]

            flex
            items-center
            justify-center

            rounded-xl

            bg-white

            text-blue-950

            shadow-xl

            border
            border-gray-200

            transition-all
            duration-300

            active:scale-95
          "
          aria-label="Toggle menu"
          aria-expanded={open}
        >

          {open ? (
            <FaTimes size={25} />
          ) : (
            <FaBars size={25} />
          )}

        </button>


        {/* =================================================
            OVERLAY
        ================================================= */}

        {open && (
          <div
            className="
              fixed
              inset-0

              z-[9998]

              bg-black/50
              backdrop-blur-[2px]
            "
            onClick={() => setOpen(false)}
          />
        )}


        {/* =================================================
            MOBILE DRAWER
        ================================================= */}

        <div
          className={`
            fixed

            top-0
            right-0

            z-[10000]

            h-[100dvh]

            w-[min(88vw,380px)]

            bg-white

            shadow-2xl

            overflow-y-auto

            transition-transform
            duration-300
            ease-out

            ${
              open
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* =================================================
              MOBILE HEADER
          ================================================= */}

          <div
            className="
              min-h-[95px]

              bg-blue-950

              border-b-4
              border-yellow-400

              flex
              items-center

              px-5
              py-4

              pr-20
            "
          >

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
              "
            >

              <img
                src={logo}
                alt="PRISM Logo"
                className="
                  w-[55px]
                  h-[55px]
                  object-contain
                  shrink-0
                "
              />

              <div className="leading-tight">

                <h2
                  className="
                    text-white
                    text-[12px]
                    font-black
                    whitespace-nowrap
                    m-0
                  "
                >
                  PRISM PILE FOUNDATION
                </h2>

                <p
                  className="
                    text-yellow-400
                    text-[8px]
                    font-bold
                    tracking-[1px]
                    mt-1
                    whitespace-nowrap
                    m-0
                  "
                >
                  AND CONSTRUCTION
                </p>

              </div>

            </Link>

          </div>


          {/* =================================================
              MOBILE LINKS
          ================================================= */}

          <nav className="flex flex-col p-4 gap-1">

            {links.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  px-4
                  py-4

                  rounded-lg

                  text-base
                  font-bold

                  transition-all

                  ${
                    isActive
                      ? "bg-blue-950 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }
                  `
                }
              >
                {item.name}
              </NavLink>

            ))}


            {/* MOBILE QUOTE */}

            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="
                mt-4

                bg-yellow-400
                text-blue-950

                text-center

                py-4

                rounded-lg

                font-extrabold

                hover:bg-yellow-300

                transition
              "
            >
              GET A QUOTE →
            </Link>

          </nav>

        </div>

      </div>
    </>
  );
}
