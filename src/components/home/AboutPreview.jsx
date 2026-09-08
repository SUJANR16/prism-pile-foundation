import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.png";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative group animate-slideLeft">

            <div className="overflow-hidden rounded-2xl shadow-2xl">

              <img
                src={hero}
                alt="PRISM Pile Foundation and Construction"
                className="w-full h-[500px] object-cover
                group-hover:scale-110
                transition-transform duration-700"
              />

            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-5 md:right-8
              bg-blue-950 text-white rounded-xl shadow-2xl
              px-8 py-6
              group-hover:-translate-y-2
              transition-all duration-500">

              <p className="text-4xl font-extrabold text-yellow-400">
                30+
              </p>

              <p className="text-sm font-semibold tracking-wide">
                YEARS OF EXPERIENCE
              </p>

            </div>

          </div>


          {/* CONTENT */}
          <div className="animate-slideRight">

            <p className="text-blue-700 font-bold uppercase tracking-[4px]">
              About PRISM
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-4 leading-tight">
              Building Strong Foundations
              <span className="text-yellow-400">
                {" "}for a Stronger Future
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              PRISM PILE FOUNDATION & CONSTRUCTION is engaged in specialized
              foundation engineering and construction solutions. We focus on
              delivering reliable, safe and technically sound foundation
              solutions for residential, commercial, industrial and
              infrastructure projects.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-4">
              Our expertise includes pile foundation works, load testing,
              pile integrity testing, dynamic analysis and other foundation
              engineering services. Our approach combines technical
              knowledge, modern equipment and quality-focused execution.
            </p>


            {/* Highlights */}
            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="p-5 rounded-xl bg-gray-50
                hover:bg-blue-50
                hover:-translate-y-2
                transition-all duration-300">

                <h3 className="text-2xl font-extrabold text-blue-950">
                  30+
                </h3>

                <p className="text-gray-600 mt-1">
                  Years Experience
                </p>

              </div>


              <div className="p-5 rounded-xl bg-gray-50
                hover:bg-yellow-50
                hover:-translate-y-2
                transition-all duration-300">

                <h3 className="text-2xl font-extrabold text-blue-950">
                  700+
                </h3>

                <p className="text-gray-600 mt-1">
                  Projects
                </p>

              </div>

            </div>


            {/* BUTTON */}
            <div className="mt-9">

              <Link
                to="/about"
                className="inline-flex items-center gap-3
                bg-blue-950 text-white
                px-8 py-4 rounded-lg
                font-bold
                shadow-lg
                hover:bg-blue-700
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all duration-300"
              >
                Learn More About Us

                <span className="text-xl group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}