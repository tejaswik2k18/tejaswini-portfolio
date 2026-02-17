// src/components/Certifications.js
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FaAws } from "react-icons/fa";
import { certifications } from "../data/certifications";

const Certifications = () => {
  // one flip state per card (based on index)
  const [flipped, setFlipped] = useState({});

  const handleFlip = (idx) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]"
    >
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Certifications
          </h2>
          <p className="mt-2 text-muted-foreground">
            Recognized achievements in the field of technology.
          </p>
        </div>

        {(certifications || []).length === 0 ? (
          <div className="rounded-md border border-border bg-card p-6 text-muted-foreground">
            No certifications added yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {(certifications || []).map((cert, idx) => (
              <ReactCardFlip
                key={idx}
                isFlipped={!!flipped[idx]}
                flipDirection="horizontal"
              >
                {/* Front Side */}
                <div
                  className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer"
                  onClick={() => handleFlip(idx)}
                >
                  <FaAws size={40} className="mx-auto mb-3 text-[#FF9900]" />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Issued By: {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>

                  {/* only show link if it's not "#" */}
                  {cert.link && cert.link !== "#" ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-primary font-medium"
                      onClick={(e) => e.stopPropagation()} // don't flip when clicking link
                    >
                      View Credential
                    </a>
                  ) : (
                    <p className="inline-block mt-3 text-muted-foreground text-sm">
                      Credential link coming soon
                    </p>
                  )}
                </div>

                {/* Back Side */}
                <div
                  className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer"
                  onClick={() => handleFlip(idx)}
                >
                  {/* If you later add a real badge image URL, it will show here */}
                  {cert.image ? (
                    <div className="bg-white rounded-md p-3">
                      <img
                        src={cert.image}
                        alt={`${cert.title} badge`}
                        className="w-full h-auto rounded-md"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="rounded-md bg-white/10 p-8">
                      <p className="text-white/90">
                        Add a badge image URL in <code>certifications.js</code>
                      </p>
                    </div>
                  )}
                </div>
              </ReactCardFlip>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
