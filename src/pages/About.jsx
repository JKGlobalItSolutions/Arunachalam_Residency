function About() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Heading Section */}
        <h4 className="text-warning text-uppercase mb-3">About Us</h4>
        <h2 className="fw-bold mb-3">
          Welcome to <span className="text-warning">Arunachalam Residency</span>
        </h2>
        <p className="mb-4">
          Arunachalam Residency offers a comfortable and peaceful stay with well-maintained rooms designed for families,
          business travelers, and tourists. Conveniently located and thoughtfully designed, our residency ensures a
          memorable experience with modern amenities and warm hospitality.
        </p>

        {/* Explore Button */}
        <a href="#more" className="btn btn-warning text-white fw-bold mb-5">
          EXPLORE MORE
        </a>

        {/* Detailed About Section */}
        <div id="more" className="mt-5">
          <h3 className="fw-bold mb-3">About Arunachalam Residency</h3>
          <p>
            Arunachalam Residency is a modern residential complex located in a peaceful neighborhood. Our mission is to
            provide a comfortable, safe, and convenient living experience for individuals and families.
          </p>

          <div className="row mt-4">
            {/* Image of the Building */}
            <div className="col-md-6 mb-4">
              <img
                src="/path/to/your-image.jpg" // <-- Replace with your actual image path
                alt="Arunachalam Residency Building"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Features List */}
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>🛏️ Comfortable AC Rooms with Modern Amenities</li>
                <li>🧹 Daily Housekeeping for a Fresh & Clean Stay</li>
                <li>📶 Free High-Speed Wi-Fi in All Rooms</li>
                <li>🅿️ Secure On-Site Parking for Guests</li>
                <li>🕒 24/7 Front Desk & CCTV Surveillance</li>
                <li>📺 LED TVs with Satellite Channels</li>
                <li>🚿 Attached Bathrooms with Hot & Cold Water</li>
                <li>🚰 24/7 Drinking Water (Hot & Cold)</li>
                <li>💧 Water Softener Plant for Cleaner Water</li>
                <li>⚙️ Booster Pump for Uniform Water Pressure</li>
                <li>🛗 Lift Facility for Easy Accessibility</li>
                <li>🗺️ Convenient Location Near Transit, Shops & Hospitals</li>
                <li>🛕 Located Opposite to the Arunachaleswarar Temple</li>
                <li>✅ Easy Check-In/Check-Out Process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
