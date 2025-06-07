import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");
    const checkin = formData.get("checkin_date");
    const checkout = formData.get("checkout_date");
    const guests = formData.get("guests");
    const roomType = formData.get("room_type");
    const message = formData.get("message");

    // ✅ EmailJS integration
    emailjs
      .sendForm(
        "your_service_id", // replace with your actual service ID
        "your_template_id", // replace with your actual template ID
        formRef.current,
        "your_public_key" // replace with your EmailJS public key
      )
      .then(
        () => alert("✅ Email sent successfully!"),
        (error) => alert("❌ Failed to send email. Please try again.")
      );

    // ✅ WhatsApp Message
    const whatsappMessage = `Hello, I'm ${name}.
Phone: ${phone}
Email: ${email}
Check-In: ${checkin}
Check-Out: ${checkout}
Guests: ${guests}
Room Type: ${roomType}
Message: ${message}`;

    const whatsappURL = `https://wa.me/9342738133?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");

    e.target.reset(); // reset form
  };

  return (
    <div className="container-fluid bg-light">
      <div
        className="text-center py-5"
        style={{ backgroundColor: "rgba(15, 23, 43, 0.8)" }} // slightly darker for better contrast
      >
        <h1 className="fw-bold text-white mb-3">Contact</h1>
        <p className="mb-3">
          <span className="text-warning fw-semibold">
            <Link to="/" className="text-warning text-decoration-none">
              HOME
            </Link>
          </span>{" "}
          / <span className="text-white">CONTACT</span>
        </p>
        <h6 className="text-uppercase text-warning mb-2">Contact Us</h6>
        <h2 className="fw-bold">
          Contact <span className="text-warning">For Any Query</span>
        </h2>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {/* Left Column - Map */}
          <div className="col-lg-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.301987389119!2d79.09749137506352!3d11.005200189150334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5523b9aebf9a1d%3A0x3c8e45cd3adfc325!2sSwathiSri%20Residency!5e0!3m2!1sen!2sin!4v1717674400291!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-6">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white p-4 rounded-3 shadow-sm"
            >
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Name"
                name="user_name"
                required
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Your Email"
                name="user_email"
                required
              />
              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Your Phone"
                name="user_phone"
                required
              />
              <input
                type="date"
                className="form-control mb-3"
                name="checkin_date"
                required
              />
              <input
                type="date"
                className="form-control mb-3"
                name="checkout_date"
                required
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Number of Guests"
                name="guests"
                required
              />
              <select className="form-select mb-3" name="room_type" required>
                <option value="">Select Room Type</option>
                <option>Standard Room</option>
                <option>Deluxe Room</option>
                <option>Suite</option>
              </select>
              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <button
                className="btn btn-warning text-white fw-bold w-100"
                type="submit"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
