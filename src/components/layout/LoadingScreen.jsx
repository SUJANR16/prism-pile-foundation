import { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo.png";

export default function LoadingScreen({ duration = 5000 }) {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setClosing(true);
    }, duration);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, duration + 700);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, [duration]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`prism-loading-screen ${
        closing ? "prism-loading-closing" : ""
      }`}
    >
      {/* Background Glow */}
      <div className="prism-loading-glow"></div>

      <div className="prism-loading-content">

        {/* LOGO */}
        <div className="prism-loading-logo-area">

          {/* Yellow Ring */}
          <div className="prism-loading-ring prism-ring-yellow"></div>

          {/* Blue Ring */}
          <div className="prism-loading-ring prism-ring-blue"></div>

          {/* Actual Logo - NO SQUARE BOX */}
          <div className="prism-loading-logo">
            <img
              src={logo}
              alt="PRISM PILE FOUNDATION & CONSTRUCTION"
            />
          </div>

        </div>

        {/* COMPANY NAME */}
        <div className="prism-loading-company">
          <h1>PRISM PILE</h1>
          <p>FOUNDATION & CONSTRUCTION</p>
        </div>

        {/* LOADING */}
        <div className="prism-loading-status">
          <span>LOADING</span>

          <div className="prism-loading-dots">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="prism-loading-progress">
          <div className="prism-loading-progress-bar"></div>
        </div>

      </div>
    </div>
  );
}