import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-92px)] bg-cover bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(9, 30, 66, 0.72),
            rgba(9, 30, 66, 0.72)
          ),
          url(${hero})
        `,
      }}
    >

      {/* ==============================
          DECORATIVE CIRCLE
      ============================== */}

      <div
        className="
          absolute
          top-24
          right-10
          w-40
          h-40
          border
          border-yellow-400/20
          rounded-full
          animate-pulse
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-20
          right-32
          w-24
          h-24
          border
          border-white/10
          rounded-full
          pointer-events-none
        "
      />


      {/* ==============================
          HERO CONTENT
      ============================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          px-6
          lg:px-8
          relative
          z-10
        "
      >

        <div
          className="
            max-w-3xl
            text-left
            animate-slideLeft
          "
        >

          {/* Small Heading */}

          <p
            className="
              text-yellow-400
              uppercase
              tracking-[5px]
              font-bold
              text-sm
              md:text-base
              mb-6
            "
          >
            Since 1994 • 30+ Years of Excellence
          </p>


          {/* Main Heading */}

          <h1
            className="
              text-white
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-[1.05]
            "
          >

            Building

            <br />

            <span className="text-yellow-400">
              Strong Foundations
            </span>

            <br />

            for Tomorrow

          </h1>


          {/* Description */}

          <p
            className="
              text-white
              text-lg
              md:text-xl
              leading-8
              mt-8
              max-w-2xl
            "
          >
            PRISM PILE FOUNDATION & CONSTRUCTION is a trusted specialist in
            pile foundation engineering, load testing, ground improvement,
            and infrastructure solutions delivering reliable projects across
            India.
          </p>


          {/* ==============================
              BUTTONS
          ============================== */}

          <div
            className="
              mt-10
              flex
              gap-5
              flex-wrap
            "
          >

            {/* Request Quote */}

            <Link
              to="/quote"
              className="
                inline-flex
                items-center
                justify-center
                bg-yellow-400
                text-blue-950
                px-8
                py-4
                rounded-lg
                font-bold
                shadow-lg
                hover:bg-yellow-300
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              Request a Quote →
            </Link>


            {/* Services */}

            <Link
              to="/services"
              className="
                inline-flex
                items-center
                justify-center
                border-2
                border-white
                text-white
                px-8
                py-4
                rounded-lg
                font-semibold
                hover:bg-white
                hover:text-blue-950
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              Explore Services →
            </Link>

          </div>

        </div>

      </div>


      {/* ==============================
          SCROLL INDICATOR
      ============================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          text-white
          text-center
          animate-bounce
        "
      >

        <p className="text-xs tracking-[3px] mb-2">
          SCROLL
        </p>

        <div
          className="
            w-5
            h-8
            border-2
            border-white
            rounded-full
            flex
            justify-center
          "
        >

          <div
            className="
              w-1
              h-2
              bg-white
              rounded-full
              mt-2
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;