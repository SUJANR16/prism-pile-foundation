import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

import logo from "../../assets/images/logo/logo.png";
import servicesData from "../../data/services/servicesData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Clients", path: "/clients" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    "Pile Foundation Services",
    "Specialized Foundation Solutions",
    "Marine & Heavy Access Piling",
    "Pile Testing & Quality Assessment",
  ];

  const getServicesByCategory = (category) =>
    servicesData.filter(
      (service) => service.category === category
    );

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ====================================================== */}
      <header className="hidden lg:block sticky top-0 z-[9000] bg-white shadow-md">
        <div className="w-full max-w-[1600px] mx-auto px-6 xl:px-8">
          <div className="h-[96px] flex items-center">

            {/* LOGO + COMPANY NAME */}
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


            {/* DESKTOP NAV */}
            <div className="ml-auto flex items-center min-w-0">

              <nav
                className="
                  flex
                  items-center
                  gap-5
                  xl:gap-6
                  mr-5
                "
              >

                {/* HOME */}
                {links.slice(0, 2).map((item) => (
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


                {/* =================================================
                    SERVICES MEGA MENU
                ================================================== */}
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setServicesOpen(!servicesOpen)
                    }
                    className="
                      flex
                      items-center
                      gap-2
                      text-[16px]
                      xl:text-[17px]
                      font-bold
                      text-blue-950
                      hover:text-blue-700
                      transition-all
                      duration-300
                      whitespace-nowrap
                    "
                  >
                    Services

                    <FaChevronDown
                      size={12}
                      className={`
                        transition-transform
                        duration-300
                        ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>


                  {/* MEGA MENU */}
                  <div
                    className={`
                      absolute
                      top-full
                      left-1/2
                      -translate-x-1/2
                      pt-4
                      transition-all
                      duration-300
                      ${
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }
                    `}
                  >

                    <div
                      className="
                        w-[1050px]
                        max-w-[calc(100vw-40px)]
                        bg-white
                        rounded-2xl
                        shadow-2xl
                        border
                        border-gray-200
                        overflow-hidden
                      "
                    >

                      {/* TOP HEADER */}
                      <div
                        className="
                          bg-blue-950
                          px-7
                          py-5
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <div>
                          <p
                            className="
                              text-yellow-400
                              text-xs
                              font-extrabold
                              tracking-[2px]
                              uppercase
                            "
                          >
                            Our Expertise
                          </p>

                          <h2
                            className="
                              text-white
                              text-2xl
                              font-black
                              mt-1
                            "
                          >
                            Foundation & Testing Services
                          </h2>
                        </div>

                        <Link
                          to="/services"
                          onClick={() =>
                            setServicesOpen(false)
                          }
                          className="
                            bg-yellow-400
                            text-blue-950
                            px-5
                            py-2.5
                            rounded-lg
                            font-extrabold
                            text-sm
                            hover:bg-yellow-300
                            transition
                          "
                        >
                          VIEW ALL
                        </Link>
                      </div>


                      {/* CATEGORIES */}
                      <div
                        className="
                          p-7
                          grid
                          grid-cols-4
                          gap-6
                        "
                      >

                        {categories.map((category) => (
                          <div key={category}>

                            {/* CATEGORY TITLE */}
                            <div
                              className="
                                flex
                                items-start
                                gap-2
                                mb-4
                              "
                            >
                              <span
                                className="
                                  w-1
                                  h-8
                                  bg-yellow-400
                                  rounded-full
                                  shrink-0
                                "
                              />

                              <h3
                                className="
                                  text-sm
                                  font-black
                                  text-blue-950
                                  leading-5
                                "
                              >
                                {category}
                              </h3>
                            </div>


                            {/* SERVICES */}
                            <div className="space-y-1">

                              {getServicesByCategory(category).map(
                                (service) => (
                                  <Link
                                    key={service.id}
                                    to={`/services/${service.id}`}
                                    onClick={() =>
                                      setServicesOpen(false)
                                    }
                                    className="
                                      group
                                      flex
                                      items-start
                                      gap-2
                                      py-1.5
                                      text-[13px]
                                      text-gray-600
                                      font-semibold
                                      hover:text-blue-700
                                      transition-colors
                                    "
                                  >
                                    <span
                                      className="
                                        text-yellow-500
                                        group-hover:text-blue-700
                                        transition-colors
                                        mt-[1px]
                                      "
                                    >
                                      →
                                    </span>

                                    <span>
                                      {service.name}
                                    </span>
                                  </Link>
                                )
                              )}

                            </div>

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>


                {/* REMAINING NAV LINKS */}
                {links.slice(2).map((item) => (
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


              {/* QUOTE */}
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
                  xl:text-[15px]
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
      ====================================================== */}
      <div className="lg:hidden">

        {/* HAMBURGER */}
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


        {/* OVERLAY */}
        {open && (
          <div
            className="
              fixed
              inset-0
              z-[9998]
              bg-black/50
              backdrop-blur-[2px]
            "
            onClick={() => closeMobileMenu()}
          />
        )}


        {/* MOBILE DRAWER */}
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

          {/* MOBILE HEADER */}
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
              onClick={closeMobileMenu}
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


          {/* MOBILE LINKS */}
          <nav className="flex flex-col p-4 gap-1">

            {/* HOME + ABOUT */}
            {links.slice(0, 2).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
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


            {/* =================================================
                MOBILE SERVICES
            ================================================== */}
            <div>

              <button
                type="button"
                onClick={() =>
                  setServicesOpen(!servicesOpen)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-4
                  py-4
                  rounded-lg
                  text-base
                  font-bold
                  text-gray-700
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition-all
                "
              >

                <span>Services</span>

                <FaChevronDown
                  size={14}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {/* MOBILE SERVICE LIST */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    servicesOpen
                      ? "max-h-[1600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >

                <div
                  className="
                    ml-2
                    mt-1
                    border-l-2
                    border-yellow-400
                    pl-3
                  "
                >

                  {/* VIEW ALL */}
                  <Link
                    to="/services"
                    onClick={closeMobileMenu}
                    className="
                      block
                      px-3
                      py-3
                      mb-2
                      rounded-lg
                      bg-blue-950
                      text-white
                      text-sm
                      font-extrabold
                    "
                  >
                    VIEW ALL SERVICES →
                  </Link>


                  {/* MOBILE CATEGORIES */}
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="mb-4"
                    >

                      <p
                        className="
                          px-3
                          py-2
                          text-xs
                          font-black
                          uppercase
                          tracking-wide
                          text-blue-950
                        "
                      >
                        {category}
                      </p>

                      <div>

                        {getServicesByCategory(category).map(
                          (service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              onClick={closeMobileMenu}
                              className="
                                flex
                                items-center
                                gap-2
                                px-3
                                py-2.5
                                rounded-md
                                text-sm
                                font-semibold
                                text-gray-600
                                hover:bg-blue-50
                                hover:text-blue-700
                                transition
                              "
                            >
                              <span className="text-yellow-500">
                                →
                              </span>

                              {service.name}
                            </Link>
                          )
                        )}

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>


            {/* REMAINING LINKS */}
            {links.slice(2).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
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


            {/* QUOTE */}
            <Link
              to="/quote"
              onClick={closeMobileMenu}
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