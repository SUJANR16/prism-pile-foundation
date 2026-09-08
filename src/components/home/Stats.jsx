import { Building2, BriefcaseBusiness, Wrench, Headset } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <Building2 size={40} />,
      number: "30+",
      title: "Years Experience",
    },
    {
      icon: <BriefcaseBusiness size={40} />,
      number: "700+",
      title: "Projects Completed",
    },
    {
      icon: <Wrench size={40} />,
      number: "16+",
      title: "Foundation Services",
    },
    {
      icon: <Headset size={40} />,
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border hover:shadow-2xl transition duration-300 p-8 text-center"
            >
              <div className="text-[#0F4C81] flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-5xl font-bold text-[#0F4C81]">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;