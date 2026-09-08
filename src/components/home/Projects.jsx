import { Link } from "react-router-dom";

import site1 from "../../assets/images/projects/site1.jpg";
import site2 from "../../assets/images/projects/site2.jpg";
import site3 from "../../assets/images/projects/site3.jpg";
import site4 from "../../assets/images/projects/site4.jpg";
import site5 from "../../assets/images/projects/site5.jpg";
import site6 from "../../assets/images/projects/site6.jpg";

const projects = [
  {
    image: site1,
    title: "Commercial Building Foundation",
    location: "Chennai",
    category: "Commercial",
  },
  {
    image: site2,
    title: "Industrial Pile Foundation",
    location: "Coimbatore",
    category: "Industrial",
  },
  {
    image: site3,
    title: "Bridge Foundation",
    location: "Trichy",
    category: "Infrastructure",
  },
  {
    image: site4,
    title: "Apartment Foundation",
    location: "Madurai",
    category: "Residential",
  },
  {
    image: site5,
    title: "Warehouse Project",
    location: "Salem",
    category: "Industrial",
  },
  {
    image: site6,
    title: "Infrastructure Project",
    location: "Hyderabad",
    category: "Infrastructure",
  },
];

export default function Projects() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-14 animate-slideUp">

          <p className="text-blue-700 uppercase tracking-[5px] text-sm font-extrabold mb-4">
            Our Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-blue-950">
            Completed Foundation Projects
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-base md:text-lg leading-8">
            PRISM PILE FOUNDATION & CONSTRUCTION has undertaken
            foundation and construction-related works for residential,
            commercial, industrial and infrastructure requirements.
          </p>

        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border border-gray-200
                shadow-lg
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-500
                animate-zoomIn
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-64 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-blue-950/80
                    via-blue-950/10
                    to-transparent
                    opacity-70
                    group-hover:opacity-90
                    transition-all
                    duration-500
                  "
                />

                {/* Category */}

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    bg-yellow-400
                    text-blue-950
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-wide
                    shadow-lg
                  "
                >
                  {project.category}
                </span>

                {/* Number */}

                <span
                  className="
                    absolute
                    bottom-4
                    right-4
                    w-11
                    h-11
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    border border-white/40
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-sm
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-6">

                <h3
                  className="
                    text-xl
                    font-extrabold
                    text-blue-950
                    leading-snug
                    group-hover:text-blue-700
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>

                {/* Location */}

                <div className="flex items-center gap-3 mt-4">

                  <div
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                      text-blue-700
                    "
                  >
                    📍
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Location
                    </p>

                    <p className="text-sm font-bold text-gray-700">
                      {project.location}
                    </p>
                  </div>

                </div>

                {/* Divider */}

                <div className="border-t border-gray-200 my-5" />

                {/* View Project */}

                <Link
                  to="/projects"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-blue-700
                    font-extrabold
                    text-sm
                    hover:text-blue-950
                    transition-colors
                    duration-300
                  "
                >
                  View Project

                  <span
                    className="
                      text-lg
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>
                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* ================= VIEW ALL ================= */}

        <div className="text-center mt-14">

          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-3
              bg-blue-950
              text-white
              px-10
              py-4
              rounded-xl
              font-extrabold
              shadow-lg
              hover:bg-blue-800
              hover:-translate-y-1
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            View All Projects

            <span className="text-lg">
              →
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}