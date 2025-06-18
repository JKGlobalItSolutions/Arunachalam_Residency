import React from "react";

import { Link } from "react-router-dom";


import img1 from "../assets/homeimg/img1.jpg";
import img2 from "../assets/homeimg/img2.jpg";    
import img3 from "../assets/homeimg/img3.jpg";


// ac room images
import bad1 from "../assets/image/galleryimg/img22.jpg";
import bad2 from "../assets/image/galleryimg/img48.jpg";
import bad3 from "../assets/image/galleryimg/img42.jpg";
import bad4 from "../assets/image/galleryimg/img52.jpg";

// non-ac room images

import bad5 from "../assets/image/galleryimg/img8.jpg";
import bad6 from "../assets/image/galleryimg/img12.jpg";
import bad7 from "../assets/image/galleryimg/img13.jpg";
import bad8 from "../assets/image/galleryimg/img27.jpg";






function Home() {
  
  const acRooms = [
    {
      name: "Single Bed",
      price: "₹2,000/night",
      desc: "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
      img: bad1,
    },
    {
      name: "Double Bed",
      price: "₹2,500/night",
      desc: "Spacious room ideal for two guests, equipped with modern interiors.",
      img: bad2,
    },
    {
      name: "Triple Bed",
      price: "₹3,000/night",
      desc: "Ideal for small groups or families, with all necessary comforts provided.",
      img: bad3,
    },
    {
      name: "Four Bed",
      price: "₹3,500/night",
      desc: "Perfect for larger families or groups, featuring multiple beds and ample space.",
      img: bad4,
    },
  ];

  const nonAcRooms = [
    {
      name: "Single Bed",
      price: "₹1,500/night",
      desc: "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
      img: bad5,
    },
    {
      name: "Double Bed",
      price: "₹2,000/night",
      desc: "Spacious room ideal for two guests, equipped with modern interiors.",
      img: bad6,
    },
    {
      name: "Triple Bed",
      price: "₹2,500/night",
      desc: "Ideal for small groups or families, with all necessary comforts provided.",
      img: bad7,
    },
    {
      name: "Four Bed",
      price: "₹3,000/night",
      desc: "Perfect for larger families or groups, featuring multiple beds and ample space.",
      img: bad8,
    },
  ];

  return (
    <div className="container-fluid p-0">
      {/* Carousel */}
      <div
        id="mainCarousel"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src={img1}
              className="d-block w-100"
              alt="Front View"
            />
            <div className="carousel-caption-overlay">
              <h2 className="carousel-caption-text">Deluxe Room</h2>
              <p className="carousel-caption-subtext">
                Spacious comfort with modern interiors
              </p>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img
              src={img2}
              className="d-block w-100"
              alt="Comfortable Room"
            />
            <div className="carousel-caption-overlay">
              <h2 className="carousel-caption-text">Premium Suite</h2>
              <p className="carousel-caption-subtext">
                Luxury redefined with a private lounge
              </p>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img
              src={img3}
              className="d-block w-100"
              alt="Peaceful Stay"
            />
            <div className="carousel-caption-overlay">
              <h2 className="carousel-caption-text">Standard Room</h2>
              <p className="carousel-caption-subtext">
                Affordable comfort for a peaceful stay
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <section className="text-center py-5 bg-light">
        <h5 className="text-warning">ABOUT US</h5>
        <h1 className="fw-bold">
          Welcome to <span className="text-warning">Arunachalam RESIDENCY</span>
        </h1>
        <p className="mt-3 col-md-8 mx-auto">
          Arunachalam Residency offers a comfortable and peaceful stay with
          well-maintained rooms designed for families, business travelers, and
          tourists. Conveniently located and thoughtfully designed, our
          residency ensures a memorable experience with modern amenities and
          warm hospitality.
        </p>
        <button className="btn btn-warning mt-3 px-4">EXPLORE MORE</button>
      </section>

      {/* Rooms Section */}
      <section className="container py-5">
        <h5 className="text-center text-warning">OUR ROOMS</h5>
        <h2 className="text-center mb-4">
          Explore Our <span className="text-warning">ROOMS</span>
        </h2>

        {/* AC Rooms */}
        <h4 className="mb-3">
          <i className="fas fa-snowflake me-2 text-primary"></i> AC Rooms
        </h4>
        <div className="row">
          {acRooms.map((room, index) => (
            <div key={index} className="col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={room.img} className="card-img-top" alt={room.name} />
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">
                    {room.price}
                  </span>
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.desc}</p>
                 
<Link to="/contact" className="btn btn-dark w-100">
  BOOK NOW
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Non-AC Rooms */}
        <h4 className="mt-5 mb-3">
          <i className="fas fa-fan me-2 text-info"></i> Non-AC Rooms
        </h4>
        <div className="row">
          {nonAcRooms.map((room, index) => (
            <div key={index} className="col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={room.img} className="card-img-top" alt={room.name} />
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">
                    {room.price}
                  </span>
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.desc}</p>
                  <button className="btn btn-dark w-100">BOOK NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h4 className="text-center mb-4">What Our Customers Say</h4>

          {/* Marquee for quick highlights */}
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="5"
            className="mb-4"
          >
            🌟 "Top-notch service!" - Priya S.
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; "Truly professional!" - Arjun
            R. &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; "My go-to place for short
            stays!" - Fatima K. &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; "Highly
            recommended!" - Dinesh P.
          </marquee>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="p-4 bg-secondary rounded">
                <p>
                  "The service provided was excellent. They value time highly
                  and are always ready to assist."
                </p>
                <strong>- Ramesh Kumar, Computer Engineer</strong>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="p-4 bg-secondary rounded">
                <p>
                  "A great partner for the growth of my business. The service is
                  reliable and prompt."
                </p>
                <strong>- Sourabh Chandran, Entrepreneur</strong>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="p-4 bg-secondary rounded">
                <p>
                  "Very cozy and peaceful environment. The rooms are always
                  clean and well-maintained."
                </p>
                <strong>- Anita Joshi, Designer</strong>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="p-4 bg-secondary rounded">
                <p>
                  "The staff was courteous and professional. Definitely staying
                  here again on my next visit!"
                </p>
                <strong>- Rahul Mehta, Sales Executive</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
