
import React, { useState } from "react";
import "./App.css";

const guitars = [
  {
    id: "01",
    name: "EPIPHONE",
    model: "ZAKK WYLDE",
    category: "SIGNATURE SERIES",
    description: "Experience the power of legendary sound. Designed with exceptional craftsmanship, powerful tones and an iconic style for every music lover.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200",
    color: "#171717",
    accent: "#f3a52c"
  },
  {
    id: "02",
    name: "JACKSON RR1",
    model: "RANDY RHOADS",
    category: "CLASSIC SERIES",
    description: "A legendary instrument inspired by classic rock. Experience incredible performance with a bold and distinctive design.",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=1200",
    color: "#a8442d",
    accent: "#ff9c49"
  },
  {
    id: "03",
    name: "KRAMER PACER",
    model: "VINTAGE",
    category: "RETRO COLLECTION",
    description: "Discover a unique combination of vintage character and modern musical expression. Created for passionate musicians.",
    image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=1200",
    color: "#393b91",
    accent: "#a7a3ff"
  },
  {
    id: "04",
    name: "WASHBURN",
    model: "DIMEBAG HELL",
    category: "SIGNATURE SERIES",
    description: "Make every performance unforgettable with powerful sound, bold character and an extraordinary musical experience.",
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=1200",
    color: "#155caa",
    accent: "#62c5ff"
  },
  {
    id: "05",
    name: "ESP BLACKY",
    model: "ALEXI",
    category: "METAL COLLECTION",
    description: "A remarkable instrument with a striking identity. Experience creativity, musical expression and outstanding performance.",
    image: "https://images.unsplash.com/photo-1520166012956-add9ba0835cb?w=1200",
    color: "#155b40",
    accent: "#64dc9b"
  },
  {
    id: "06",
    name: "EPIPHONE",
    model: "LTD. JOHNSON CUSTOM",
    category: "CUSTOM COLLECTION",
    description: "Explore a timeless combination of craftsmanship, creativity and extraordinary musical style.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
    color: "#25294e",
    accent: "#9da8ff"
  },
  {
    id: "07",
    name: "EVH STRIPED",
    model: "SERIES",
    category: "SPECIAL EDITION",
    description: "Bring your musical imagination to life with a distinctive design and an unforgettable sound experience.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200",
    color: "#a9382c",
    accent: "#ff977a"
  }
];

function App() {
  const [active, setActive] = useState(0);

  return (
    <main className="page">

      <section className="accordion">

        {guitars.map((guitar, index) => (

          <article
            key={guitar.id}
            className={`panel ${
              active === index ? "active" : ""
            }`}
            style={{
              "--panel-color": guitar.color,
              "--accent": guitar.accent
            }}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            tabIndex={0}
          >

            {/* COLLAPSED CARD */}

            <div className="collapsed">

              <span className="small-number">
                {guitar.id}
              </span>

              <span className="vertical-title">
                {guitar.name}
              </span>

            </div>

            {/* EXPANDED CARD */}

            <div className="expanded">

              {/* LEFT CONTENT */}

              <div className="details">

                <div className="heading-number">
                  <span>{guitar.id}</span>
                  <span>{guitar.category}</span>
                </div>

                <h1>{guitar.name}</h1>

                <h2>{guitar.model}</h2>

                <p>{guitar.description}</p>

                <button
                  className="discover"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(index);
                  }}
                >
                  <span className="button-icon">↗</span>
                  DISCOVER MORE
                </button>

                <div className="bottom-info">
                  <span>PREMIUM INSTRUMENTS</span>
                  <span>COLLECTION {guitar.id}</span>
                </div>

              </div>

              {/* RIGHT IMAGE */}

              <div className="image-area">

                <div className="image-glow"></div>

                <img
                  src={guitar.image}
                  alt={guitar.name}
                  className="guitar-image"
                />

              </div>

            </div>

          </article>

        ))}

      </section>

    </main>
  );
}

export default App;
