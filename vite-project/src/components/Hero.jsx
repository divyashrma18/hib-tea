import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const kettleRef = useRef(null);
  const section2Ref = useRef(null);
  const pourRef = useRef(null);
  const cupRef = useRef(null);

  useEffect(() => {
    const flower = heroRef.current.querySelector(".flower");
    const petal1 = heroRef.current.querySelector(".petal1");
    const petal2 = heroRef.current.querySelector(".petal2");
    const leaf1 = heroRef.current.querySelector(".leaf1");
    const leaf2 = heroRef.current.querySelector(".leaf2");
    const leaf3 = heroRef.current.querySelector(".leaf3");
    const kettle = kettleRef.current;

    const pouringElements = [flower, petal1, petal2, leaf1, leaf2, leaf3];
    gsap.set(pouringElements, { transformOrigin: "center" });

    gsap.to(".hero-text h1, .hero-text p", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.2,
    });
    gsap.fromTo(
      ".section1-text h1, .section1-text p",
      {
        x: -60,
        opacity: 0,
        visibility: "hidden",
      },
      {
        scrollTrigger: {
          trigger: ".section1-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 0,
        opacity: 1,
        visibility: "visible",
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      }
    );
    const gatherTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(".flower", {
      rotation: 30,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gatherTl.to(
      flower,
      {
        x: 30,
        y: 1020,
        scale: 0.5,
        opacity: 0.7,
        ease: "power2.out",
      },
      0
    );
    gatherTl.to(
      petal1,
      {
        x: -230,
        y: 1230,
        scale: 0.4,
        opacity: 0.5,
        ease: "power2.out",
      },
      0
    );
    gatherTl.to(
      petal2,
      {
        x: 100,
        y: 930,
        scale: 0.35,
        opacity: 0.5,
        ease: "power2.out",
      },
      0
    );
    gatherTl.to(
      leaf1,
      {
        x: 90,
        y: 1090,
        scale: 0.45,
        opacity: 0.6,
        ease: "power2.out",
      },
      0
    );
    gatherTl.to(
      leaf2,
      {
        x: 30,
        y: 860,
        scale: 0.5,
        opacity: 0.6,
        ease: "power2.out",
      },
      0
    );
    gatherTl.to(
      leaf3,
      {
        x: -290,
        y: 1100,
        scale: 0.4,
        opacity: 0.6,
        ease: "power2.out",
      },
      0
    );

    const pourTl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    });

    pourTl.to(
      kettle,
      {
        x: -120,
        y: 280,
        rotate: -35,
        transformOrigin: "right center",
        ease: "power2.out",
        overwrite: "auto",
        immediateRender: false,
      },
      0
    );

    pourTl.to(
      flower,
      {
        y: 1380,
        scale: 0.4,
        opacity: 0.5,
        ease: "power2.out",
        overwrite: "auto",
        immediateRender: false,
      },
      0
    );

    pourTl.to(
      petal1,
      {
        y: 1630,
        x: -70,
        scale: 0.35,
        opacity: 0.4,
        ease: "power2.out",
        overwrite: "auto",
        immediateRender: false,
      },
      0
    );

    pourTl.to(
      petal2,
      {
        y: 1400,
        scale: 0.3,
        opacity: 0.4,
        ease: "power2.out",
        overwrite: "auto",
        immediateRender: false,
      },
      0
    );

    pourTl.to(
      leaf1,
      {
        y: 1550,
        x: 100,
        scale: 0.4,
        opacity: 0.5,
        ease: "power2.out",
        overwrite: "auto",
        immediateRender: false,
      },
      0
    );

    pourTl.to(
      leaf2,
      {
        y: 1260,
        scale: 0.45,
        opacity: 0.5,
        ease: "power2.out",
        overwrite: "auto",
        immediateRender: false,
      },
      0
    );

    pourTl.to(
      leaf3,
      {
        y: 1500,
        x: -300,
        scale: 0.35,
        opacity: 0.4,
        ease: "power2.out",
        overwrite: "auto",
        immediateRender: false,
      },
      0
    );

    pourTl.fromTo(
      pourRef.current,
      { opacity: 0, scaleY: 0 },
      {
        opacity: 1,
        scaleY: 1,
        ease: "power2.out",
        duration: 0.5,
      },
      0.6
    );
  }, []);

  useEffect(() => {
    const petal = document.querySelector(".floating-petal");
    const cup = cupRef.current;

    if (!petal || !cup) return;

    const cupRect = cup.getBoundingClientRect();
    const sectionRect = section2Ref.current.getBoundingClientRect();
    const landingY = cupRect.top - sectionRect.top + 120;

    gsap.fromTo(
      petal,
      {
        opacity: 0,
        y: -100,
        rotate: 0,
      },
      {
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: landingY,
        rotate: 45,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <nav className="navbar">
        <div className="logo">DV's Bloom</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Story</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="dew-container">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`dew dew${i + 1}`}></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="dew dew1"></div>

        <div className="hero-text">
          <h1>
            A bloom of calm.
            <br />A sip of something soft.
          </h1>
          <p>
            Hibiscus tea, steeped in peace and poured with purpose. Let petals
            fall, let stillness rise. A ritual of warmth, brewed slowly — where
            color blooms, and calm begins. In every sip, a pause. In every
            pause, presence. This is more than tea — it’s quiet, cupped.
          </p>
        </div>

        <div className="hero-images">
          <img src="/images/pink.png" alt="Water Splash" className="splash" />
          <img
            src="/images/flower.png"
            alt="Hibiscus Flower"
            className="flower"
          />
          <img src="/images/leaf1.png" alt="Leaf 1" className="leaf leaf1" />
          <img src="/images/leaf.png" alt="Leaf 2" className="leaf leaf2" />
          <img src="/images/leaf3.png" alt="Leaf 3" className="leaf leaf3" />
          <img src="/images/petal.png" alt="Petal 1" className="petal petal1" />
          <img src="/images/petal.png" alt="Petal 2" className="petal petal2" />
        </div>
      </div>

      <div className="section1" ref={section1Ref}>
        <div className="dew-container section1-dew">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`section1-dew-${i}`} className={`dew dew${i + 1}`}></div>
          ))}
        </div>

        <div className="section1-content">
          <div className="section1-text">
            <h1>
              Steeped in warmth.
              <br />
              Infused with stillness.
            </h1>
            <p>
              As petals gather, the brew begins. Crimson swirls gently into
              clear water, and the kettle hums with quiet purpose. This is the
              ritual of release — a moment of becoming tea. In the gentle bloom
              of hibiscus, bitterness softens, and clarity rises. Each moment in
              the kettle is a meditation — slow, deep, and filled with grace.
            </p>
          </div>

          <div className="section1-image" style={{ position: "relative" }}>
            <img
              ref={kettleRef}
              src="/images/kettle.png"
              alt="Glass Kettle"
              className="kettle"
            />

            <img
              ref={pourRef}
              src="/videos/pour.gif"
              alt="Pouring Stream"
              className="pour-stream"
              style={{
                position: "absolute",
                top: "650px",
                left: "-220px",
                width: "530px",
                height: "470px",
                opacity: 1,
                transform: "scaleY(1)",
                transformOrigin: "top center",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="section2" ref={section2Ref}>
        <div className="section2-content">
          <img
            src="/images/petal.png"
            alt="Falling Petal"
            className="floating-petal"
          />
          <div className="dew-container section2-dew">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`section2-dew-${i}`}
                className={`dew dew${i + 1}`}
              ></div>
            ))}
          </div>
          <div className="section2-images section2-background">
            <img
              src="/images/pink.png"
              alt="Splash"
              className="section2images splash"
            />
            <img
              src="/images/flower.png"
              alt="Flower"
              className="section2images flower"
            />
            <img
              src="/images/leaf1.png"
              alt="Leaf 1"
              className="section2images leaf1"
            />
            <img
              src="/images/leaf.png"
              alt="Leaf 2"
              className="section2images leaf2"
            />
            <img
              src="/images/leaf3.png"
              alt="Leaf 3"
              className="section2images leaf3"
            />
            <img
              src="/images/petal.png"
              alt="Petal 1"
              className="section2images petal1"
            />
            <img
              src="/images/petal.png"
              alt="Petal 2"
              className="section2images petal2"
            />
          </div>

          <div className="section2-content">
            <img
              src="/images/cup.png"
              alt="Tea Cup"
              className="tea-cup"
              ref={cupRef}
            />
            <h2 className="sip-text">HAVE A SIP....</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
