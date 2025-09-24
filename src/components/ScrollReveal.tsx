import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
}

export default function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 2,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    // Animation for the entire container
    gsap.fromTo(
      el,
      {
        transformOrigin: "0% 50%",
        rotate: baseRotation,
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      },
      {
        rotate: 0,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 90%",
          end: rotationEnd,
          scrub: 1.5,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    blurStrength,
    rotationEnd,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {children}
      </p>
    </h2>
  );
}
