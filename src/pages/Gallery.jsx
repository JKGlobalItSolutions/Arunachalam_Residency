import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔁 Manual Imports
import img1 from "../assets/image/galleryimg/img-1.jpg";
import img2 from "../assets/image/galleryimg/img1.jpg";
import img3 from "../assets/image/galleryimg/img3.jpg";
import img4 from "../assets/image/galleryimg/img4.jpg";
// import img5 from "../assets/image/galleryimg/img5.jpg";   
import img6 from "../assets/image/galleryimg/img6.jpg";
import img7 from "../assets/image/galleryimg/img7.jpg";
import img8 from "../assets/image/galleryimg/img8.jpg"; 
import img9 from "../assets/image/galleryimg/img9.jpg";
// import img10 from "../assets/image/galleryimg/img10.jpg";
import img11 from "../assets/image/galleryimg/img11.jpg";
import img12 from "../assets/image/galleryimg/img12.jpg";
import img13 from "../assets/image/galleryimg/img13.jpg";
import img14 from "../assets/image/galleryimg/img14.jpg";
import img15 from "../assets/image/galleryimg/img15.jpg";
import img16 from "../assets/image/galleryimg/img16.jpg";
import img17 from "../assets/image/galleryimg/img17.jpg";
import img18 from "../assets/image/galleryimg/img18.jpg";
import img19 from "../assets/image/galleryimg/img19.jpg";
import img20 from "../assets/image/galleryimg/img20.jpg";
import img21 from "../assets/image/galleryimg/img21.jpg";
import img22 from "../assets/image/galleryimg/img22.jpg";
import img23 from "../assets/image/galleryimg/img23.jpg";
import img24 from "../assets/image/galleryimg/img24.jpg";
import img25 from "../assets/image/galleryimg/img25.jpg";
import img26 from "../assets/image/galleryimg/img26.jpg";
import img27 from "../assets/image/galleryimg/img27.jpg";
import img28 from "../assets/image/galleryimg/img28.jpg";
import img29 from "../assets/image/galleryimg/img29.jpg"; 
import img30 from "../assets/image/galleryimg/img30.jpg";
import img31 from "../assets/image/galleryimg/img31.jpg";
import img32 from "../assets/image/galleryimg/img32.jpg";
import img33 from "../assets/image/galleryimg/img33.jpg";
import img34 from "../assets/image/galleryimg/img34.jpg";
import img35 from "../assets/image/galleryimg/img35.jpg";
import img36 from "../assets/image/galleryimg/img36.jpg";
import img37 from "../assets/image/galleryimg/img37.jpg";
import img38 from "../assets/image/galleryimg/img38.jpg";
import img39 from "../assets/image/galleryimg/img39.jpg";
import img40 from "../assets/image/galleryimg/img40.jpg";
import img41 from "../assets/image/galleryimg/img41.jpg";

import img42 from "../assets/image/galleryimg/img42.jpg";
import img43 from "../assets/image/galleryimg/img43.jpg";
import img44 from "../assets/image/galleryimg/img44.jpg";
import img45 from "../assets/image/galleryimg/img45.jpg";
import img46 from "../assets/image/galleryimg/img46.jpg";
import img47 from "../assets/image/galleryimg/img47.jpg";
import img48 from "../assets/image/galleryimg/img48.jpg";
import img49 from "../assets/image/galleryimg/img49.jpg";
import img50 from "../assets/image/galleryimg/img50.jpg";
import img51 from "../assets/image/galleryimg/img51.jpg";
import img52 from "../assets/image/galleryimg/img52.jpg";
import img53 from "../assets/image/galleryimg/img53.jpg";
import img54 from "../assets/image/galleryimg/img54.jpg";
import img55 from "../assets/image/galleryimg/img55.jpg";
import img56 from "../assets/image/galleryimg/img56.jpg";
import img57 from "../assets/image/galleryimg/img57.jpg";








// Add more imports as needed...

const galleryImages = [

  { src: img1, alt: "Room 1" },
  { src: img2, alt: "Room 2" },
  { src: img3, alt: "Room 3" },
  { src: img4, alt: "Room 4" },
  // { src: img5, alt: "Room 5" },
  { src: img6, alt: "Room 6" },
  { src: img7, alt: "Room 7" },
  { src: img8, alt: "Room 8" },
  { src: img9, alt: "Room 9" },
  // { src: img10, alt: "Room 10" },
  { src: img11, alt: "Room 11" },
  { src: img12, alt: "Room 12" },
  { src: img13, alt: "Room 13" },
  { src: img14, alt: "Room 14" },
  { src: img15, alt: "Room 15" },
  { src: img16, alt: "Room 16" },
  { src: img17, alt: "Room 17" },
  { src: img18, alt: "Room 18" },
  { src: img19, alt: "Room 19" },
  { src: img20, alt: "Room 20" },
  { src: img21, alt: "Room 21" },
  { src: img22, alt: "Room 22" },
  { src: img23, alt: "Room 23" },
  { src: img24, alt: "Room 24" },
  { src: img25, alt: "Room 25" },
  { src: img26, alt: "Room 26" },
  { src: img27, alt: "Room 27" },
  { src: img28, alt: "Room 28" },
  { src: img29, alt: "Room 29" },
  { src: img30, alt: "Room 30" },
  { src: img31, alt: "Room 31" },
  { src: img32, alt: "Room 32" },
  { src: img33, alt: "Room 33" },
  { src: img34, alt: "Room 34" },
  { src: img35, alt: "Room 35" },
  { src: img36, alt: "Room 36" },
  { src: img37, alt: "Room 37" },
  { src: img38, alt: "Room 38" },
  { src: img39, alt: "Room 39" },
  { src: img40, alt: "Room 40" },
  { src: img41, alt: "Room 41" }, 
  { src: img42, alt: "Room 42" },
  { src: img43, alt: "Room 43" },
  { src: img44, alt: "Room 44" },
  { src: img45, alt: "Room 45" },
  { src: img46, alt: "Room 46" },
  { src: img47, alt: "Room 47" },
  { src: img48, alt: "Room 48" },
  { src: img49, alt: "Room 49" },
  { src: img50, alt: "Room 50" },
  { src: img51, alt: "Room 51" }
 
  
];

function Gallery() {
  const [modalImage, setModalImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    return () => AOS.refresh();
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div>
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container-fluid">
          <h2 className="text-center mb-4 fw-bold">Gallery</h2>
          <p className="text-center mb-5 fs-5">
            Discover the elegance of Arunachalam Sri Residency through our gallery
            showcasing beautiful spaces and vibrant living.
          </p>

          <div className="row g-4">
            {galleryImages.map((img, idx) => (
              <div
                className="col-sm-6 col-md-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <div
                  className="bg-light rounded overflow-hidden position-relative shadow-sm"
                  style={{ height: "250px", cursor: "pointer" }}
                  onClick={() => setModalImage(img)}
                >
                  {!loadedImages[idx] && (
                    <div className="position-absolute top-50 start-50 translate-middle z-3">
                      <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}

                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad(idx)}
                    onError={() => handleImageLoad(idx)}
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "filter 0.3s ease",
                      filter: loadedImages[idx] ? "none" : "blur(8px)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0">
                <h5 className="text-white">{modalImage.alt}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setModalImage(null)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <img
                  src={modalImage.src}
                  alt={modalImage.alt}
                  className="img-fluid w-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
