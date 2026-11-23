"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Truck,
  ShieldCheck,
  PackageCheck,
  Navigation,
  RotateCcw,
} from "lucide-react";

import usa from "@/data/us-map-data.json";

const hub = { x: 445.7, y: 379.2 };

const destinations = [
  { name: "Seattle", x: 124.3, y: 51.6 },
  { name: "Los Angeles", x: 115.5, y: 314.8 },
  { name: "Denver", x: 328.9, y: 240.9 },
  { name: "Minneapolis", x: 546, y: 163 },
  { name: "Chicago", x: 575.2, y: 201.2 },
  { name: "Nashville", x: 614, y: 321 },
  { name: "New York", x: 768.3, y: 192.4 },
];

const stateNames = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
  DC: "District of Columbia",
};

const highlighted = new Set(["TX", "OK", "NM", "AR", "LA", "IA"]);

const colors = {
  primary: "#071A43",
  primaryDark: "#030D27",
  primaryLight: "#1746A2",
  secondary: "#C9953D",
  secondaryLight: "#E8C77B",
  secondaryDark: "#A9792C",
  defaultState: "#102A59",
  highlightedState: "#1746A2",
  selectedState: "#C9953D",
  stateBorder: "#36558A",
  white: "#FFFFFF",
};

function curvedRoute(city) {
  const dx = city.x - hub.x;
  const dy = city.y - hub.y;
  const distance = Math.hypot(dx, dy) || 1;
  const bend = Math.min(68, distance * 0.18);

  const mx = (hub.x + city.x) / 2;
  const my = (hub.y + city.y) / 2;

  return `M ${hub.x} ${hub.y} Q ${
    mx - (dy / distance) * bend
  } ${my + (dx / distance) * bend} ${city.x} ${city.y}`;
}

export default function USShippingCoverage() {
  const [activeState, setActiveState] = useState("TX");
  const [hoveredState, setHoveredState] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);

  const selectedState = hoveredState || activeState;
  const selectedCity = hoveredCity || activeCity;
  const currentName = stateNames[selectedState] || selectedState;

  const resetSelection = () => {
    setActiveState("TX");
    setHoveredState(null);
    setActiveCity(null);
    setHoveredCity(null);
  };

  return (
    <section
      id="shipping-coverage"
      aria-labelledby="shipping-coverage-title"
      className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 flex flex-col justify-between gap-5 sm:mb-11 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 id="shipping-coverage-title" className="section-heading">
              Across the <span className="text-secondary">United States.</span>
            </h2>

            <p className="text-muted mt-4 max-w-xl font-sans text-[13px] leading-7 sm:text-[15px]">
              Explore our domestic shipping network, discover destinations, and
              view illustrated routes from our Dallas hub.
            </p>
          </div>

          <div className="border-secondary/25 flex w-fit items-center gap-3 rounded-full border bg-[#FFF8EC] px-4 py-2.5">
            <Truck
              size={17}
              strokeWidth={1.8}
              className="text-secondary-dark"
            />

            <span className="text-primary font-sans text-[12px] font-semibold">
              Domestic Shipping
            </span>
          </div>
        </header>

        <div className="border-primary/10 overflow-hidden rounded-[24px] border bg-white shadow-[0_15px_50px_rgba(7,26,67,0.08)] sm:rounded-[28px]">
          <div className="grid min-w-0 gap-4 p-3 sm:p-5 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-5 lg:p-6">
            <div className="relative flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(ellipse_at_center,#102B60_0%,#071A43_55%,#030D27_100%)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.1]"
              />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
                <div className="flex items-center gap-2.5">
                  <span className="border-secondary/25 bg-secondary/10 text-accent-light flex size-9 items-center justify-center rounded-lg border">
                    <Navigation size={17} strokeWidth={1.8} />
                  </span>

                  <div>
                    <h3 className="font-heading text-[13px] text-white sm:text-[15px]">
                      United States
                    </h3>

                    <p className="mt-1 text-[10px] text-white/55">
                      Shipping Network
                    </p>
                  </div>
                </div>

                <span className="border-secondary/30 bg-secondary/10 text-accent-light inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-sans text-[10px] font-semibold">
                  <span className="bg-secondary size-1.5 rounded-full" />
                  Interactive Map
                </span>
              </div>

              <div className="relative z-10 flex min-h-[260px] w-full flex-1 items-center justify-center overflow-hidden px-2 py-5 sm:min-h-[400px] sm:px-4 lg:min-h-[470px]">
                <svg
                  viewBox="0 0 900 540"
                  role="group"
                  aria-label="Interactive United States shipping map with illustrative routes from Dallas"
                  preserveAspectRatio="xMidYMid meet"
                  className="block h-auto w-full max-w-[850px]"
                >
                  <defs>
                    <linearGradient
                      id="shipping-land"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#17376D" />

                      <stop offset="100%" stopColor="#091D48" />
                    </linearGradient>
                  </defs>

                  <path
                    d={usa.outline}
                    fill="url(#shipping-land)"
                    stroke="#42639B"
                    strokeWidth="1.5"
                  />

                  {usa.states.map((state) => {
                    const selected = selectedState === state.id;

                    const name = stateNames[state.id] || state.name || state.id;

                    return (
                      <path
                        key={state.id}
                        d={state.d}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${name}`}
                        aria-pressed={activeState === state.id}
                        fill={
                          selected
                            ? colors.selectedState
                            : highlighted.has(state.id)
                              ? colors.highlightedState
                              : colors.defaultState
                        }
                        stroke={
                          selected ? colors.secondaryLight : colors.stateBorder
                        }
                        strokeWidth={selected ? 2.2 : 1.25}
                        strokeLinejoin="round"
                        className="cursor-pointer transition-colors duration-300 outline-none hover:brightness-125 focus:stroke-white"
                        onMouseEnter={() => setHoveredState(state.id)}
                        onMouseLeave={() => setHoveredState(null)}
                        onFocus={() => setHoveredState(state.id)}
                        onBlur={() => setHoveredState(null)}
                        onClick={() => {
                          setActiveState(state.id);
                          setActiveCity(null);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setActiveState(state.id);
                            setActiveCity(null);
                          }
                        }}
                      >
                        <title>{name}</title>
                      </path>
                    );
                  })}

                  {destinations.map((city, index) => {
                    const active = selectedCity === city.name;
                    const route = curvedRoute(city);

                    return (
                      <g key={city.name}>
                        <path
                          d={route}
                          fill="none"
                          stroke={
                            active ? colors.secondaryLight : colors.secondary
                          }
                          strokeWidth={active ? 2.8 : 1.5}
                          strokeDasharray="6 8"
                          strokeLinecap="round"
                          opacity={selectedCity && !active ? 0.2 : 0.85}
                          className="shipping-route pointer-events-none"
                        />

                        <circle
                          r={active ? 4.5 : 3}
                          fill={
                            active ? colors.secondaryLight : colors.secondary
                          }
                          opacity={selectedCity && !active ? 0.2 : 0.95}
                          className="pointer-events-none motion-reduce:hidden"
                        >
                          <animateMotion
                            dur={`${5 + index * 0.65}s`}
                            path={route}
                            repeatCount="indefinite"
                          />
                        </circle>

                        <g
                          role="button"
                          tabIndex={0}
                          aria-label={`Highlight route to ${city.name}`}
                          aria-pressed={activeCity === city.name}
                          className="cursor-pointer outline-none"
                          onMouseEnter={() => setHoveredCity(city.name)}
                          onMouseLeave={() => setHoveredCity(null)}
                          onFocus={() => setHoveredCity(city.name)}
                          onBlur={() => setHoveredCity(null)}
                          onClick={() => setActiveCity(city.name)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              setActiveCity(city.name);
                            }
                          }}
                        >
                          <circle
                            cx={city.x}
                            cy={city.y}
                            r="15"
                            fill="transparent"
                          />

                          {active && (
                            <circle
                              cx={city.x}
                              cy={city.y}
                              r="11"
                              fill={colors.secondary}
                              opacity="0.25"
                              className="motion-safe:animate-pulse"
                            />
                          )}

                          <circle
                            cx={city.x}
                            cy={city.y}
                            r={active ? 5.5 : 4}
                            fill={active ? colors.secondaryLight : colors.white}
                            stroke={
                              active ? colors.secondary : colors.primaryLight
                            }
                            strokeWidth="2"
                          />

                          <text
                            x={city.x + 9}
                            y={city.y - 8}
                            fontSize="12"
                            fontWeight="650"
                            fill={active ? colors.secondaryLight : colors.white}
                            stroke={colors.primaryDark}
                            strokeWidth="4"
                            paintOrder="stroke"
                            fontFamily="Arial, sans-serif"
                            className="pointer-events-none"
                          >
                            {city.name}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="19"
                    fill={colors.secondary}
                    opacity="0.22"
                    className="motion-safe:animate-pulse"
                  />

                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="9"
                    fill={colors.secondaryLight}
                    stroke={colors.primaryDark}
                    strokeWidth="3"
                  />

                  <text
                    x={hub.x + 15}
                    y={hub.y + 7}
                    fontSize="15"
                    fontWeight="700"
                    fill={colors.white}
                    stroke={colors.primaryDark}
                    strokeWidth="4"
                    paintOrder="stroke"
                    className="pointer-events-none"
                  >
                    Dallas
                  </text>
                </svg>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.04] px-4 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="bg-accent-light size-2 rounded-full" />

                  <span className="text-[11px] font-medium text-white/70">
                    Dallas Hub
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white" />

                  <span className="text-[11px] font-medium text-white/70">
                    Destinations
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="border-secondary w-5 border-t-2 border-dashed" />

                  <span className="text-[11px] font-medium text-white/70">
                    Shipping Routes
                  </span>
                </div>
              </div>
            </div>

            <aside
              aria-label="Shipping information"
              className="border-primary/10 flex min-w-0 flex-col rounded-[20px] border bg-white p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-secondary-dark text-[10px] font-bold tracking-[0.14em] uppercase">
                  Shipping Overview
                </span>

                <span className="bg-primary-soft text-primary flex size-10 items-center justify-center rounded-xl">
                  <Truck size={19} strokeWidth={1.8} />
                </span>
              </div>

              <div className="mt-7">
                <div className="flex items-end gap-3">
                  <span className="font-heading text-primary text-[42px] leading-none">
                    US
                  </span>

                  <span className="text-muted pb-1 text-[12px] font-semibold">
                    Domestic Delivery
                  </span>
                </div>

                <p className="text-muted mt-3 font-sans text-[12px] leading-6">
                  Explore destinations and shipping connections throughout the
                  United States.
                </p>
              </div>

              <div className="border-primary/10 mt-7 border-t pt-6">
                <p className="text-secondary-dark text-[10px] font-bold tracking-[0.13em] uppercase">
                  Selected Location
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-secondary-dark flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8EC]">
                    <MapPin size={20} strokeWidth={1.8} />
                  </span>

                  <h3 className="font-heading text-primary min-w-0 text-[20px] leading-tight">
                    {selectedCity || currentName}
                  </h3>
                </div>

                <p className="text-muted mt-4 font-sans text-[12px] leading-6">
                  {selectedCity
                    ? `Viewing an illustrative shipping route from Dallas to ${selectedCity}. Actual carrier routes and delivery estimates may vary.`
                    : `Explore shipping information for ${currentName}. Select a destination on the map to view its route.`}
                </p>
              </div>

              <div className="border-primary/10 mt-7 space-y-5 border-t pt-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted flex items-center gap-2 text-[12px]">
                    <PackageCheck size={16} className="text-secondary-dark" />
                    Shipping Service
                  </span>

                  <span className="text-primary text-right text-[12px] font-semibold">
                    Tracked Shipping*
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted flex items-center gap-2 text-[12px]">
                    <ShieldCheck size={16} className="text-secondary-dark" />
                    Coverage
                  </span>

                  <span className="text-primary text-right text-[12px] font-semibold">
                    United States
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetSelection}
                className="border-primary/15 bg-primary-soft text-primary hover:bg-primary mt-7 flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 font-sans text-[12px] font-semibold transition-all duration-300 hover:text-white"
              >
                <RotateCcw size={15} />
                Reset Selection
              </button>

              {activeCity && (
                <button
                  type="button"
                  onClick={() => setActiveCity(null)}
                  className="text-secondary-dark hover:text-primary mt-4 inline-flex items-center justify-center gap-2 text-[12px] font-semibold"
                >
                  Show All Routes
                  <ArrowUpRight size={15} />
                </button>
              )}
            </aside>
          </div>

          <div className="border-primary/10 flex items-start gap-3 border-t bg-[#FAFBFD] px-4 py-4 sm:px-6">
            <MapPin
              size={16}
              strokeWidth={1.8}
              className="text-secondary-dark mt-0.5 shrink-0"
            />

            <p className="text-muted font-sans text-[11px] leading-6 sm:text-[12px]">
              This interactive map illustrates domestic shipping routes. It is
              not live shipment tracking. Actual carrier availability, routes,
              and delivery estimates may vary.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shipping-route {
          animation: shipping-flow 16s linear infinite;
        }

        @keyframes shipping-flow {
          to {
            stroke-dashoffset: -140;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shipping-route {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
