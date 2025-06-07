import React from "react";
import {
  FaTv,
  FaWifi,
  FaSnowflake,
  FaConciergeBell,
  FaCar,
  FaWater,
  FaTint,
  FaGlassWhiskey,
  FaTruck,
  FaParking,
  FaBolt,
  FaFan,
  FaRoad,
  FaProjectDiagram,
  FaArrowAltCircleUp,
} from "react-icons/fa";

// List of amenities with icons, titles and descriptions
const amenities = [
  {
    icon: <FaWifi className="text-success icon-hover-animate" size={36} />,
    title: "High-Speed Wi-Fi",
    description: "Uninterrupted, fast internet access across the property.",
  },
  {
    icon: <FaSnowflake className="text-success icon-hover-animate" size={36} />,
    title: "Air Conditioning",
    description: "Effective VRV cooling system for every room.",
  },
  {
    icon: <FaConciergeBell className="text-success icon-hover-animate" size={36} />,
    title: "24/7 Room Service",
    description: "Attentive service available anytime, day or night.",
  },
  {
    icon: <FaCar className="text-success icon-hover-animate" size={36} />,
    title: "Parking Options",
    description: "Underground, front portico & open car/van/tampo parking.",
  },
  {
    icon: <FaWater className="text-success icon-hover-animate" size={36} />,
    title: "Pressure Pump System",
    description: "High-efficiency water pressure pumps for consistent flow.",
  },
  {
    icon: <FaTint className="text-success icon-hover-animate" size={36} />,
    title: "Water Softener System",
    description: "Treated water for better health and appliance protection.",
  },
  {
    icon: <FaGlassWhiskey className="text-success icon-hover-animate" size={36} />,
    title: "Hot & Cold Drinking Water",
    description: "Purified drinking water available at multiple points.",
  },
  {
    icon: <FaArrowAltCircleUp className="text-success icon-hover-animate" size={36} />,
    title: "Lift Facility",
    description: "Smooth elevator access to all floors for convenience.",
  },
  {
    icon: <FaBolt className="text-success icon-hover-animate" size={36} />,
    title: "Generator Backup",
    description: "Reliable 24/7 power supply with generator support.",
  },
  {
    icon: <FaFan className="text-success icon-hover-animate" size={36} />,
    title: "VRV Cooling System",
    description: "Advanced variable refrigerant volume AC system.",
  },
  {
    icon: <FaRoad className="text-success icon-hover-animate" size={36} />,
    title: "Speed Bump System",
    description: "Safety bumps to control vehicle speed in premises.",
  },
  {
    icon: <FaProjectDiagram className="text-success icon-hover-animate" size={36} />,
    title: "Trace View",
    description: "Visual flow representation of key services or amenities.",
  },
];

const Amenities = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        {/* Left Column with Image Background */}
        <div
          className="col-12 col-lg-6 d-flex align-items-center justify-content-center text-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* Dark Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 0 }}
          />
          <div className="position-relative" style={{ zIndex: 1 }}>
            <h2 className="display-4 fw-bold text-warning">
              Amenities & Services
            </h2>
            <p className="lead text-white mt-3">
              Premium facilities curated for luxury, comfort, and a modern
              lifestyle.
            </p>
          </div>
        </div>

        {/* Right Column with Amenities List */}
        <div className="col-12 col-lg-6 bg-light py-5">
          <div className="container">
            <div className="row g-4">
              {amenities.map((item, index) => (
                <div key={index} className="col-12 col-md-6  icon-hover-animate" size={36} >
                  <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center border border-success-subtle">
                    <div className="mb-3">{item.icon}</div>
                    <h5 className="fw-semibold text-dark">{item.title}</h5>
                    <p className="text-muted small">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
