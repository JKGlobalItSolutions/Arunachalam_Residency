import React from "react";
import { Link } from "react-router-dom";




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



function Rooms() {

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
