"use client";

import { useEffect } from "react";

export function RevealScript() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) {
        setTimeout(() => el.classList.add("in"), 80 + i * 90);
      } else {
        io.observe(el);
      }
    });

    // TOC active section
    const links = Array.from(document.querySelectorAll("nav.toc a"));
    const sections = links.map((a) =>
      document.querySelector(a.getAttribute("href")!)
    );

    function onScroll() {
      const y = window.scrollY + 140;
      let idx = 0;
      sections.forEach((s, i) => {
        if (s && (s as HTMLElement).offsetTop <= y) idx = i;
      });
      links.forEach((a, i) => a.classList.toggle("active", i === idx));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]');
    function handleClick(this: HTMLAnchorElement, e: Event) {
      const id = this.getAttribute("href");
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 60,
            behavior: "smooth",
          });
          history.replaceState(null, "", id);
        }
      }
    }
    anchors.forEach((a) =>
      a.addEventListener("click", handleClick as EventListener)
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      anchors.forEach((a) =>
        a.removeEventListener("click", handleClick as EventListener)
      );
    };
  }, []);

  return null;
}
