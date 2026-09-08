import { ShieldCheck, Award, Clock3, Users } from "lucide-react";

const features = [
  {
    icon: <Award size={40} />,
    title: "30+ Years Experience",
    text: "Trusted pile foundation specialists since 1994."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality Assurance",
    text: "High-quality materials and modern construction equipment."
  },
  {
    icon: <Clock3 size={40} />,
    title: "On-Time Delivery",
    text: "Projects completed safely within committed timelines."
  },
  {
    icon: <Users size={40} />,
    title: "Expert Team",
    text: "Experienced engineers and skilled operators across India."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#0F4C81]">
            Why Choose PRISM
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-5 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Delivering reliable pile foundation solutions with advanced
            equipment, experienced professionals, and a commitment to quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#0F4C81] flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}