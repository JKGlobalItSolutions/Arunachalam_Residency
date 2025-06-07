import React from "react";
import { Link } from "react-router-dom";

function Rooms() {
  const acRooms = [
    {
      name: "Single Bed",
      price: "₹2,000/night",
      desc: "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
      img: "https://via.placeholder.com/400x250?text=AC+Single+Bed",
    },
    {
      name: "Double Bed",
      price: "₹2,500/night",
      desc: "Spacious room ideal for two guests, equipped with modern interiors.",
      img: "https://via.placeholder.com/400x250?text=AC+Double+Bed",
    },
    {
      name: "Triple Bed",
      price: "₹3,000/night",
      desc: "Ideal for small groups or families, with all necessary comforts provided.",
      img: "https://via.placeholder.com/400x250?text=AC+Triple+Bed",
    },
    {
      name: "Four Bed",
      price: "₹3,500/night",
      desc: "Perfect for larger families or groups, featuring multiple beds and ample space.",
      img: "https://via.placeholder.com/400x250?text=AC+Four+Bed",
    },
  ];

  const nonAcRooms = [
    {
      name: "Single Bed",
      price: "₹1,500/night",
      desc: "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
      img: "https://via.placeholder.com/400x250?text=Non-AC+Single+Bed",
    },
    {
      name: "Double Bed",
      price: "₹2,000/night",
      desc: "Spacious room ideal for two guests, equipped with modern interiors.",
      img: "https://via.placeholder.com/400x250?text=Non-AC+Double+Bed",
    },
    {
      name: "Triple Bed",
      price: "₹2,500/night",
      desc: "Ideal for small groups or families, with all necessary comforts provided.",
      img: "https://via.placeholder.com/400x250?text=Non-AC+Triple+Bed",
    },
    {
      name: "Four Bed",
      price: "₹3,000/night",
      desc: "Perfect for larger families or groups, featuring multiple beds and ample space.",
      img: "https://via.placeholder.com/400x250?text=Non-AC+Four+Bed",
    },
  ];

  return (
    <div>
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
    </div>
  );
}

export default Rooms;
