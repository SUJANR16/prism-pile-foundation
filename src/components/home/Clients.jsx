import { Link } from "react-router-dom";

import afcons from "../../assets/clients/afcons.png";
import ashoka from "../../assets/clients/ashoka.png";
import cccl from "../../assets/clients/cccl.png";
import cpwd from "../../assets/clients/cpwd.png";
import hcc from "../../assets/clients/hcc.png";
import ircon from "../../assets/clients/ircon.png";
import lt from "../../assets/clients/lt.png";
import meil from "../../assets/clients/meil.png";
import nbcc from "../../assets/clients/nbcc.png";
import ncc from "../../assets/clients/ncc.png";
import rvnl from "../../assets/clients/rvnl.png";
import tata from "../../assets/clients/tata.png";


const clients = [
  {
    name: "Afcons Infrastructure",
    logo: afcons,
  },
  {
    name: "Ashoka Buildcon",
    logo: ashoka,
  },
  {
    name: "CCCL",
    logo: cccl,
  },
  {
    name: "CPWD",
    logo: cpwd,
  },
  {
    name: "HCC",
    logo: hcc,
  },
  {
    name: "IRCON",
    logo: ircon,
  },
  {
    name: "L&T",
    logo: lt,
  },
  {
    name: "MEIL",
    logo: meil,
  },
  {
    name: "NBCC",
    logo: nbcc,
  },
  {
    name: "NCC",
    logo: ncc,
  },
  {
    name: "RVNL",
    logo: rvnl,
  },
  {
    name: "Tata Projects",
    logo: tata,
  },
];


export default function Clients() {
  return (
    <section className="relative py-24 bg-blue-950 overflow-hidden">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-700/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-yellow-400/10
          blur-3xl
        "
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">


        {/* =========================================
            HEADING
        ========================================= */}

        <div className="text-center mb-16 animate-slideUp">

          <p
            className="
              text-yellow-400
              uppercase
              tracking-[5px]
              text-sm
              font-extrabold
              mb-4
            "
          >
            Our Network
          </p>


          <h2
            className="
              text-white
              text-4xl
              md:text-5xl
              font-black
            "
          >
            Industry Leaders
          </h2>


          <p
            className="
              text-blue-100
              max-w-3xl
              mx-auto
              mt-5
              text-base
              md:text-lg
              leading-8
            "
          >
            Explore the organizations and industry sectors associated
            with foundation, construction and infrastructure activities.
          </p>

        </div>


        {/* =========================================
            CLIENT GRID
        ========================================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
        >

          {clients.map((client, index) => (

            <div
              key={client.name}
              className="
                group
                relative
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-xl
                border
                border-transparent

                hover:-translate-y-3
                hover:border-yellow-400
                hover:shadow-2xl

                transition-all
                duration-500
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              {/* =================================
                  ANIMATED TOP LINE
              ================================= */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1
                  bg-yellow-400

                  scale-x-0
                  group-hover:scale-x-100

                  transition-transform
                  duration-500
                  origin-center

                  z-20
                "
              />


              {/* =================================
                  LOGO CONTAINER
              ================================= */}

              <div
                className="
                  h-40
                  flex
                  items-center
                  justify-center

                  px-8
                  py-6

                  bg-white
                "
              >

                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="
                    max-w-[80%]
                    max-h-[105px]

                    w-auto
                    h-auto

                    object-contain

                    transition-all
                    duration-500

                    group-hover:scale-110
                  "
                />

              </div>


              {/* =================================
                  COMPANY NAME
              ================================= */}

              <div
                className="
                  min-h-[70px]

                  flex
                  items-center
                  justify-center

                  px-4
                  py-4

                  text-center

                  bg-gray-50

                  border-t
                  border-gray-100

                  group-hover:bg-blue-50

                  transition-all
                  duration-500
                "
              >

                <h3
                  className="
                    text-sm
                    md:text-base
                    font-extrabold
                    text-blue-950

                    group-hover:text-blue-700

                    transition-colors
                    duration-300
                  "
                >
                  {client.name}
                </h3>

              </div>


              {/* =================================
                  HOVER GLOW
              ================================= */}

              <div
                className="
                  absolute
                  inset-0

                  rounded-2xl

                  ring-0
                  group-hover:ring-2
                  group-hover:ring-yellow-400/40

                  pointer-events-none

                  transition-all
                  duration-500
                "
              />

            </div>

          ))}

        </div>


        {/* =========================================
            VIEW ALL CLIENTS
        ========================================= */}

        <div className="text-center mt-14">

          <Link
            to="/clients"
            className="
              inline-flex
              items-center
              justify-center

              bg-yellow-400
              text-blue-950

              px-9
              py-4

              rounded-lg

              font-extrabold

              shadow-lg

              hover:bg-yellow-300
              hover:-translate-y-1
              hover:shadow-2xl

              transition-all
              duration-300
            "
          >
            View All Clients →
          </Link>

        </div>

      </div>

    </section>
  );
}