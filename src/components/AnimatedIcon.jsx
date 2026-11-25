"use client";

import { useEffect, useState } from "react";

export default function AnimatedIcon({ src, className }) {
  const [still, setStill] = useState(false);

  useEffect(() => {
    let active = true;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setStill(query.matches);
    update();
    query.addEventListener("change", update);

    import("@lordicon/element").then(({ defineElement }) => {
      if (active && !customElements.get("lord-icon")) defineElement();
    });

    return () => {
      active = false;
      query.removeEventListener("change", update);
    };
  }, []);

  return (
    <lord-icon
      src={src}
      trigger={still ? undefined : "loop"}
      delay="1500"
      colors="primary:#01113b,secondary:#b98230"
      stroke="regular"
      speed="0.8"
      class={className}
      aria-hidden="true"
    />
  );
}
