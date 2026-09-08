import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";

export default function About() {
  const values = [
    {
      icon: "🛡️",
      title: "Safety First",
      text: "Safety is at the core of our project execution. We follow disciplined procedures to protect our workforce, clients and project assets.",
    },
    {
      icon: "🎯",
      title: "Quality Excellence",
      text: "We focus on precision, quality control and technically sound execution throughout every stage of foundation work.",
    },
    {
      icon: "🤝",
      title: "Client Trust",
      text: "We believe long-term relationships are built through transparency, communication and dependable project delivery.",
    },
    {
      icon: "⚙️",
      title: "Technical Expertise",
      text: "Our foundation solutions combine experienced execution with modern equipment and engineering practices.",
    },
  ];

  const expertise = [
    "Pile Foundation Works",
    "Vertical Load Testing",
    "Pull Out Testing",
    "Lateral Load Testing",
    "Pile Integrity Testing",
    "Pile Dynamic Analysis",
    "Ground Improvement",
    "Foundation Engineering",
  ];

  const milestones = [
    {
      year: "1994",
      title: "Beginning of the Journey",
      text: "Started our journey with a focus on dependable construction and foundation engineering solutions.",
    },
    {
      year: "2000+",
      title: "Growing Expertise",
      text: "Expanded our capabilities across piling, foundation works and specialized testing services.",
    },
    {
      year: "2010+",
      title: "Infrastructure Growth",
      text: "Strengthened our project capabilities to support larger residential, commercial and infrastructure developments.",
    },
    {
      year: "Today",
      title: "Building the Future",
      text: "Continuing to deliver foundation solutions with a focus on safety, quality, technology and client satisfaction.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[70vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5,30,70,0.78), rgba(5,30,70,0.78)), url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">

          <div className="max-w-4xl">

            <p className="text-yellow-400 uppercase tracking-[6px] font-bold text-sm md:text-base animate-pulse">
              About PRISM
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mt-5">
              Strong Foundations.
              <span className="block text-yellow-400">
                Stronger Future.
              </span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-8 mt-7 max-w-3xl">
              PRISM PILE FOUNDATION & CONSTRUCTION delivers specialized
              foundation engineering, piling and testing solutions for
              demanding construction and infrastructure projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/services"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 hover:-translate-y-1 transition duration-300"
              >
                Explore Our Services
              </Link>

              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition duration-300"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-blue-700 uppercase tracking-[4px] font-bold">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              Engineering Foundations
              <span className="text-blue-800"> That Last.</span>
            </h2>

            <div className="w-20 h-1 bg-yellow-400 mt-6" />

            <p className="text-gray-600 text-lg leading-8 mt-7">
              PRISM PILE FOUNDATION & CONSTRUCTION is focused on providing
              specialized foundation and piling solutions for modern
              construction requirements.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Foundation engineering is one of the most critical stages of
              construction. A strong foundation determines the stability,
              durability and long-term performance of a structure.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Our approach combines experienced project execution, technical
              understanding, modern machinery and systematic testing to
              provide dependable foundation solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {[
                "Experienced Team",
                "Modern Equipment",
                "Quality Execution",
                "Safety Focused",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 font-semibold text-gray-800"
                >
                  <span className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm">
                    ✓
                  </span>
                  {item}
                </div>
              ))}

            </div>

          </div>


          {/* IMAGE */}
          <div className="relative group">

            <div className="absolute -inset-4 bg-blue-900/10 rounded-3xl group-hover:bg-blue-900/20 transition duration-500" />

            <img
              src={hero}
              alt="PRISM Foundation Construction"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition duration-700"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl">

              <p className="text-blue-900 font-extrabold text-3xl">
                30+
              </p>

              <p className="text-gray-600 font-medium">
                Years of Foundation Engineering Experience
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="bg-blue-950 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            {[
              ["30+", "Years Experience"],
              ["700+", "Projects"],
              ["300+", "Clients"],
              ["6+", "Specialized Services"],
            ].map(([number, title]) => (

              <div
                key={title}
                className="group text-white border border-blue-800 rounded-2xl p-8 hover:bg-blue-900 hover:-translate-y-2 transition duration-300"
              >

                <h3 className="text-4xl md:text-5xl font-extrabold text-yellow-400 group-hover:scale-110 transition duration-300">
                  {number}
                </h3>

                <p className="mt-3 text-blue-100 font-medium">
                  {title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= MISSION VISION ================= */}
      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 uppercase tracking-[4px] font-bold">
              Our Purpose
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
              Driven By Purpose
            </h2>

            <p className="text-gray-600 text-lg mt-5">
              Every project we undertake is guided by safety, engineering
              excellence and our commitment to dependable results.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <div className="bg-blue-900 text-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition duration-500">

              <div className="text-5xl">
                🎯
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Our Mission
              </h3>

              <p className="text-blue-100 text-lg leading-8 mt-5">
                To deliver safe, technically reliable and high-quality
                foundation engineering solutions while maintaining
                professional standards, efficient execution and strong
                relationships with our clients.
              </p>

            </div>


            <div className="bg-white rounded-3xl p-10 shadow-xl border-t-4 border-yellow-400 hover:-translate-y-2 transition duration-500">

              <div className="text-5xl">
                🚀
              </div>

              <h3 className="text-3xl font-bold mt-6 text-gray-900">
                Our Vision
              </h3>

              <p className="text-gray-600 text-lg leading-8 mt-5">
                To become a trusted foundation engineering partner recognized
                for technical excellence, responsible execution, innovation,
                safety and long-term value creation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERTISE ================= */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-blue-700 uppercase tracking-[4px] font-bold">
                Our Expertise
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
                Specialized Foundation Solutions
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Our capabilities cover a wide range of foundation and
                specialized testing requirements, helping clients make
                informed decisions and achieve reliable structural support.
              </p>

              <Link
                to="/services"
                className="inline-block mt-8 bg-blue-900 text-white px-7 py-4 rounded-lg font-bold hover:bg-blue-700 hover:-translate-y-1 transition"
              >
                View All Services →
              </Link>

            </div>


            <div className="grid sm:grid-cols-2 gap-4">

              {expertise.map((item, index) => (

                <div
                  key={item}
                  className="group bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-blue-900 hover:text-white hover:-translate-y-2 hover:shadow-xl transition duration-300"
                >

                  <div className="flex items-center gap-4">

                    <span className="text-yellow-500 font-extrabold">
                      0{index + 1}
                    </span>

                    <h3 className="font-bold">
                      {item}
                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}
      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-700 uppercase tracking-[4px] font-bold">
              Why PRISM
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
              What We Stand For
            </h2>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">

            {values.map((value) => (

              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >

                <div className="text-5xl">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {value.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= JOURNEY ================= */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-700 uppercase tracking-[4px] font-bold">
              Our Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
              Experience That Keeps Moving Forward
            </h2>

          </div>


          <div className="relative mt-16">

            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-blue-100" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {milestones.map((item) => (

                <div
                  key={item.year}
                  className="relative bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-500"
                >

                  <div className="relative z-10 w-16 h-16 rounded-full bg-blue-900 text-yellow-400 flex items-center justify-center font-extrabold text-sm">
                    {item.year}
                  </div>

                  <h3 className="text-xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="relative bg-blue-950 py-24 overflow-hidden">

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-800 rounded-full opacity-40" />

        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-800 rounded-full opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <p className="text-yellow-400 uppercase tracking-[5px] font-bold">
            Start Your Project
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-extrabold mt-5">
            Build Your Next Project
            <span className="block text-yellow-400">
              on a Strong Foundation
            </span>
          </h2>

          <p className="text-blue-100 text-lg leading-8 mt-6 max-w-2xl mx-auto">
            Discuss your foundation, piling or testing requirements with
            the PRISM team.
          </p>

          <Link
            to="/quote"
            className="inline-block mt-9 bg-yellow-400 text-black px-9 py-4 rounded-lg font-extrabold hover:bg-yellow-300 hover:scale-105 transition duration-300"
          >
            Request a Quote →
          </Link>

        </div>

      </section>

    </main>
  );
}