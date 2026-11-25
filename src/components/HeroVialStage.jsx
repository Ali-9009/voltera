"use client";

import { useRef } from "react";
import Image from "next/image";
import { CUTOUTS } from "@/data/cutouts";

const vials = [
  { slug: "tesamorelin", name: "Tesamorelin", position: "left" },
  { slug: "vls-2trz", name: "VLS-2TRZ", position: "right" },
  { slug: "vls-3rt", name: "VLS-3RT", position: "front" },
];

export default function HeroVialStage() {
  const stageRef = useRef(null);

  function moveStage(event) {
    if (event.pointerType === "touch") return;
    const stage = stageRef.current;
    const rect = stage.getBoundingClientRect();
    stage.style.setProperty(
      "--hero-shift-x",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 20}px`,
    );
    stage.style.setProperty(
      "--hero-shift-y",
      `${((event.clientY - rect.top) / rect.height - 0.5) * 14}px`,
    );
  }

  function resetStage() {
    stageRef.current.style.removeProperty("--hero-shift-x");
    stageRef.current.style.removeProperty("--hero-shift-y");
  }

  return (
    <div
      ref={stageRef}
      className="hero-vial-stage"
      onPointerMove={moveStage}
      onPointerLeave={resetStage}
    >
      <div className="hero-vial-cluster">
        {vials.map(({ slug, name, position }) => (
          <div key={slug} className={`hero-vial hero-vial--${position}`}>
            <div className="hero-vial-arrival">
              <Image
                src={CUTOUTS[slug]}
                alt={`Voltera Sciences ${name} vial`}
                width={444}
                height={916}
                sizes="(min-width: 1280px) 230px, (min-width: 1024px) 20vw, (min-width: 640px) 220px, 34vw"
                className="hero-vial-image"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
