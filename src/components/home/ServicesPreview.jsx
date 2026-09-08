const services = [
  "Bored Cast In-Situ Pile",
  "Driven Cast In-Situ Pile",
  "Driven Precast Pile",
  "Stone Column Pile",
  "Under Reamed Pile",
  "Contiguous Pile",
  "Bored Pile",
  "Sheet Pile",
  "Secant Pile",
  "Sand Pile",
  "Lime Pile",
  "Micro Pile",
];

function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#0F4C81]">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Delivering world-class pile foundation and geotechnical
            engineering solutions for residential, commercial and
            industrial projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-full bg-[#0F4C81] text-white flex items-center justify-center text-2xl mb-5">
                ✔
              </div>

              <h3 className="text-xl font-bold text-[#0F4C81]">
                {service}
              </h3>

              <p className="mt-3 text-gray-600">
                Professional pile foundation services executed with
                modern equipment and experienced engineers.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;