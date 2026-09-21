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
    <div className={`prism-loading-screen ${closing ? "prism-loading-closing" : ""}`}>
      
      <div className="prism-loading-glow"></div>

      <div className="prism-loading-content">

        {/* LOGO + RINGS */}
        <div className="prism-loading-logo-area">

          {/* OUTER RING */}
          <div className="prism-loading-ring prism-ring-yellow"></div>

          {/* INNER RING */}
          <div className="prism-loading-ring prism-ring-blue"></div>

          {/* SMALL LOGO */}
          <div className="prism-loading-logo-box">
            <img
              src={logo}
              alt="PRISM"
            />
          </div>

        </div>

        {/* COMPANY NAME */}
        <div className="prism-loading-company">
          <h1>PRISM PILE</h1>
          <p>FOUNDATION &amp; CONSTRUCTION</p>
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

        {/* PROGRESS */}
        <div className="prism-loading-progress">
          <div className="prism-loading-progress-bar"></div>
        </div>

      </div>
    </div>
  );
}