import logo from "../../assets/images/logo/logo.png";

export default function PageLoader() {
  return (
    <div className="prism-loader">

      {/* Background glow */}
      <div className="prism-loader-glow"></div>

      {/* Main Loader */}
      <div className="prism-loader-content">

        {/* Logo Area */}
        <div className="prism-logo-loader">

          {/* Outer rotating ring */}
          <div className="prism-ring prism-ring-one"></div>

          {/* Inner rotating ring */}
          <div className="prism-ring prism-ring-two"></div>

          {/* Logo */}
          <img
            src={logo}
            alt="PRISM PILE FOUNDATION & CONSTRUCTION"
            className="prism-loader-logo"
          />

        </div>


        {/* Company Name */}
        <div className="prism-loader-title">

          <h1>
            PRISM PILE
          </h1>

          <p>
            FOUNDATION & CONSTRUCTION
          </p>

        </div>


        {/* Loading */}
        <div className="prism-loading">

          <span>LOADING</span>

          <div className="prism-dots">

            <span></span>

            <span></span>

            <span></span>

          </div>

        </div>

      </div>

    </div>
  );
}