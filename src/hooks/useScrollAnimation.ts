import { useEffect, useRef } from "react";

const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // jika elemen memiliki child dengan class fade-up, observer masing-masing
      const fadeElements = currentRef.querySelectorAll(".fade-up");
      fadeElements.forEach((el) => observer.observe(el));
      // juga observe elemen itu sendiri jika punya class fade-up
      if (currentRef.classList.contains("fade-up")) {
        observer.observe(currentRef);
      }
    }

    return () => {
      if (currentRef) {
        const fadeElements = currentRef.querySelectorAll(".fade-up");
        fadeElements.forEach((el) => observer.unobserve(el));
        if (currentRef.classList.contains("fade-up")) {
          observer.unobserve(currentRef);
        }
      }
    };
  }, [threshold]);

  return ref;
};

export default useScrollAnimation;