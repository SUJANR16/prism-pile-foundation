import { Link } from "react-router-dom";

const services = [
  "BORED CAST IN-SITU PILE",
  "DRIVEN CAST IN-SITU PILE",
  "DRIVEN PRECAST PILE",
  "STONE COLUMN PILE",
  "UNDER REAMED PILE",
  "CONTIGUOUS PILE",
  "BORED PILE",

  "SHEET PILE",
  "SECANT PILE",
  "SAND PILE",
  "LIME PILE",
  "MICRO PILE",
  "BARGE PILE",
  "GANTRY PILE",

  "BORED COMPACTION PILE",
  "VERTICAL LOAD TEST",
  "PULL OUT TEST",
  "LATERAL LOAD TEST",
  "PILE INTEGRITY TEST",
  "PILE DYNAMIC ANALYSIS TEST",
];

const createSlug = (service) =>
  service.toLowerCase().replace(/\s+/g, "-");

export default function Services() {
  return (
    <section className="min-h-screen bg-white py-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            PAGE HEADING
        ========================== */}
        <div className="mb-12 animate-slideLeft">

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Our Services
          </h1>

          <div className="w-28 h-1 bg-yellow-400 mt-4 rounded-full"></div>

        </div>


        {/* =========================
            SERVICES
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">

          {services.map((service) => (

            <Link
              key={service}
              to={`/services/${createSlug(service)}`}
              className="
                group
                flex
                items-center
                gap-3
                py-2
                rounded-lg
                transition-all
                duration-300
                hover:translate-x-2
              "
            >

              {/* Yellow Dot */}
              <span
                className="
                  w-3.5
                  h-3.5
                  min-w-3.5
                  rounded-full
                  bg-yellow-400
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:bg-yellow-500
                "
              ></span>


              {/* Service Name */}
              <span
                className="
                  text-lg
                  md:text-xl
                  font-bold
                  text-blue-950
                  leading-tight
                  group-hover:text-blue-700
                  transition-colors
                  duration-300
                "
              >
                {service}
              </span>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}