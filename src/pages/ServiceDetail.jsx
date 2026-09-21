import { Link, useParams } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHardHat,
  FaLayerGroup,
  FaClipboardList,
  FaPhoneAlt,
  FaQuoteRight,
  FaShieldAlt,
  FaTools,
  FaDraftingCompass,
  FaBuilding,
  FaFlask,
} from "react-icons/fa";

import servicesData from "../data/services/servicesData";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  const service = servicesData.find(
    (item) => item.id === serviceId
  );

  if (!service) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="text-center text-white">
          <h1 className="text-4xl font-black">
            Service Not Found
          </h1>

          <p className="mt-4 text-slate-300">
            The requested foundation service could not be found.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-3 font-bold text-slate-950"
          >
            View All Services
            <FaArrowRight />
          </Link>
        </div>
      </section>
    );
  }

  const relatedServices = servicesData
    .filter(
      (item) =>
        item.category === service.category &&
        item.id !== service.id
    )
    .slice(0, 3);

  return (
    <div className="bg-white text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-slate-950">

        <img
          src={service.image}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/40" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-6 pb-20 lg:px-8">

          <div className="max-w-5xl">

            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest">

              <Link
                to="/services"
                className="text-yellow-400"
              >
                Services
              </Link>

              <span className="text-white/40">
                /
              </span>

              <span className="text-white/70">
                {service.category}
              </span>

            </div>

            <div className="mb-7 h-1 w-20 bg-yellow-400" />

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              {service.name}
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              {service.shortDescription}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/quote"
                className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Request a Quote
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Us
                <FaPhoneAlt />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICE INTRODUCTION
      ====================================================== */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
              Service Overview
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Engineering the Right Foundation Approach
            </h2>

            <div className="mt-6 h-1 w-20 bg-yellow-400" />

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {service.overview}
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              {service.description}
            </p>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src={service.image}
              alt={service.name}
              className="h-[430px] w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING CONSIDERATION
      ====================================================== */}

      <section className="bg-slate-100 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <FaDraftingCompass className="text-3xl text-blue-700" />

              <h3 className="mt-5 text-xl font-black">
                Engineering Planning
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Foundation selection should be based on structural
                loading, geotechnical information, site constraints
                and the approved engineering design.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <FaTools className="text-3xl text-blue-700" />

              <h3 className="mt-5 text-xl font-black">
                Construction Method
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Equipment, sequence, access, working conditions and
                construction methodology must be planned around the
                project requirements.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <FaBuilding className="text-3xl text-blue-700" />

              <h3 className="mt-5 text-xl font-black">
                Project Integration
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The selected foundation system should integrate with
                pile caps, structural works, excavation and the
                overall construction sequence.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-slate-950 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
              Construction Process
            </p>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              How {service.name} Works
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              A controlled foundation process helps maintain accuracy,
              construction quality and coordination throughout the
              project.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {service.howItWorks.map((step, index) => (

              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-yellow-400/50"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 font-black text-slate-950">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <FaHardHat className="text-2xl text-yellow-400" />

                </div>

                <p className="mt-6 leading-7 text-slate-300">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ADVANTAGES
      ====================================================== */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
              Key Benefits
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Advantages of {service.name}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              The following benefits represent common reasons this
              type of foundation solution may be considered when
              technically appropriate.
            </p>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {service.advantages.map((item, index) => (

              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <FaCheckCircle className="text-2xl text-blue-700 transition group-hover:text-yellow-500" />

                <p className="mt-5 leading-7 font-semibold text-slate-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ====================================================== */}

      <section className="bg-slate-100 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
                Applications
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Where This Service Can Be Used
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Application depends on project requirements,
                structural loading, geotechnical conditions,
                construction access and the approved design.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {service.applications.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm"
                >

                  <FaLayerGroup className="shrink-0 text-xl text-blue-700" />

                  <span className="font-bold text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT CONSIDERATIONS
      ====================================================== */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
                Project Planning
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Important Project Considerations
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Successful foundation construction depends on
                understanding the ground, structural requirements,
                equipment limitations and surrounding environment.
              </p>

              <div className="mt-8 rounded-2xl bg-blue-950 p-7">

                <FaClipboardList className="text-3xl text-yellow-400" />

                <p className="mt-5 leading-8 text-slate-300">
                  Each project should be assessed individually before
                  selecting a foundation system or construction method.
                </p>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {service.considerations.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6"
                >

                  <FaCheckCircle className="mt-1 shrink-0 text-blue-700" />

                  <span className="font-semibold leading-7 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE THIS SERVICE
      ====================================================== */}

      <section className="relative overflow-hidden bg-blue-950 px-6 py-24 lg:px-8">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl text-slate-950">
                <FaShieldAlt />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
                Service Selection
              </p>

            </div>

            <h2 className="mt-7 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Why Choose {service.name}?
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              The suitability of a foundation solution depends on
              project-specific engineering and ground conditions.
              This service may be considered for the following reasons:
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {service.whyChoose.map((item, index) => (

              <div
                key={index}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black text-slate-950">
                  {index + 1}
                </div>

                <p className="leading-8 text-slate-200">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE PRISM
      ====================================================== */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
                Why Choose PRISM?
              </h2>

              <div className="mt-6 h-1 w-20 bg-yellow-400" />

              <p className="mt-7 text-lg leading-9 text-slate-600">
                PRISM PILE FOUNDATION & CONSTRUCTION focuses on
                foundation and piling requirements with an emphasis
                on planned execution, project coordination,
                construction quality and site-specific solutions.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Every foundation project presents different
                geotechnical, structural and construction conditions.
                Our service approach is therefore centered around
                understanding the project requirements before
                selecting the appropriate foundation methodology.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-3 font-black text-blue-700"
              >
                Learn More About PRISM
                <FaArrowRight />
              </Link>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">

                <FaHardHat className="text-3xl text-blue-700" />

                <h3 className="mt-5 text-xl font-black">
                  Foundation Experience
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Focused on piling, foundation construction and
                  related project requirements.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">

                <FaDraftingCompass className="text-3xl text-blue-700" />

                <h3 className="mt-5 text-xl font-black">
                  Project-Based Planning
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Foundation approaches should be selected according
                  to the actual project conditions and requirements.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">

                <FaTools className="text-3xl text-blue-700" />

                <h3 className="mt-5 text-xl font-black">
                  Equipment & Execution
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Construction planning considers equipment,
                  accessibility, sequence and site conditions.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">

                <FaClipboardCheck className="text-3xl text-blue-700" />

                <h3 className="mt-5 text-xl font-black">
                  Quality Focus
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Construction records, inspections and appropriate
                  testing form part of responsible foundation execution.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">

                <FaLayerGroup className="text-3xl text-blue-700" />

                <h3 className="mt-5 text-xl font-black">
                  Multiple Foundation Solutions
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  A broad range of piling and testing solutions can
                  support different project requirements.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">

                <FaFlask className="text-3xl text-blue-700" />

                <h3 className="mt-5 text-xl font-black">
                  Testing & Verification
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Appropriate testing and verification can support
                  foundation quality assessment and project decisions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUALITY & TESTING
      ====================================================== */}

      <section className="bg-slate-950 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:p-14">

            <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400 text-3xl text-slate-950">
                <FaClipboardCheck />
              </div>

              <div>

                <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
                  Quality & Verification
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Construction Quality & Testing
                </h2>

                <p className="mt-6 max-w-5xl leading-8 text-slate-300">
                  {service.quality}
                </p>

              </div>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl border border-white/10 p-6">

                <FaClipboardCheck className="text-2xl text-yellow-400" />

                <h3 className="mt-4 font-black text-white">
                  Documentation
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Maintain appropriate construction and testing
                  records throughout the project.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 p-6">

                <FaTools className="text-2xl text-yellow-400" />

                <h3 className="mt-4 font-black text-white">
                  Site Monitoring
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Monitor relevant construction parameters according
                  to the selected foundation methodology.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 p-6">

                <FaFlask className="text-2xl text-yellow-400" />

                <h3 className="mt-4 font-black text-white">
                  Testing
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Testing and verification should follow project
                  specifications and applicable requirements.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING NOTE
      ====================================================== */}

      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <FaQuoteRight className="mx-auto text-4xl text-yellow-500" />

          <h2 className="mt-6 text-3xl font-black">
            Engineering Perspective
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            {service.engineering}
          </p>

        </div>

      </section>


      {/* =====================================================
          WHY IT MATTERS
      ====================================================== */}

      <section className="bg-blue-50 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
            Project Value
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Why This Service Matters
          </h2>

          <p className="mt-7 text-xl font-medium leading-9 text-slate-700">
            {service.whyItMatters}
          </p>

        </div>

      </section>


      {/* =====================================================
          RELATED SERVICES
      ====================================================== */}

      {relatedServices.length > 0 && (
        <section className="px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
                  Explore More
                </p>

                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Related Services
                </h2>

              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 font-black text-blue-700"
              >
                View All Services
                <FaArrowRight />
              </Link>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              {relatedServices.map((item) => (

                <Link
                  key={item.id}
                  to={`/services/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="h-52 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-7">

                    <h3 className="text-xl font-black">
                      {item.name}
                    </h3>

                    <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                      {item.shortDescription}
                    </p>

                    <div className="mt-6 flex items-center gap-2 font-black text-blue-700">
                      Explore Service
                      <FaArrowRight className="transition group-hover:translate-x-1" />
                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-blue-950 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
            Start Your Project
          </p>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Planning a Foundation Project?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Discuss your project requirements, site conditions,
            foundation requirements and testing needs with our team.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              to="/quote"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-slate-950 transition hover:bg-yellow-300"
            >
              Request a Quote
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-black text-white transition hover:bg-white/20"
            >
              Contact PRISM
              <FaPhoneAlt />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}