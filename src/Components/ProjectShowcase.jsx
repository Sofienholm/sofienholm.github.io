import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import styles from "./ProjectShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase({
  title,
  heroImg,
  introText,
  gallery,
  outroText,
}) {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const galleryRefs = useRef([]);
  const outroRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hero fade in
    gsap.fromTo(
      heroRef.current,
      { scale: 0.9, opacity: 0, filter: "blur(8px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    // Intro tekst
    gsap.fromTo(
      introRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top bottom",
          scrub: true,
        },
      }
    );

    // Gallery billeder
    galleryRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Outro tekst
    gsap.fromTo(
      outroRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: outroRef.current,
          start: "top bottom",
          scrub: true,
        },
      }
    );
  }, []);

 return (
    <section className={styles.projectShowcase}>
      <h1 className={styles.projectTitle}>{title}</h1>
      <div className={styles.heroImage} ref={heroRef}>
        <img src={heroImg} alt={title} />
      </div>
      <p className={styles.introText} ref={introRef}>
        {introText}
      </p>

      <div className={styles.gallery}>
        {gallery.map((img, i) => (
          <div
            className={styles.galleryItem}
            key={i}
            ref={(el) => (galleryRefs.current[i] = el)}
          >
            <img src={img} alt={`${title} screenshot ${i + 1}`} />
          </div>
        ))}
      </div>

      <p className={styles.outroText} ref={outroRef}>
        {outroText}
      </p>
    </section>
  );
}

