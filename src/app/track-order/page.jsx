"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  Package,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

const DEMO_ORDERS = [
  {
    id: "ORD-1042",
    email: "demo@yourshop.com",
    status: "out_for_delivery",
    carrier: "Demo carrier",
    eta: "Not available",
    items: [{ name: "BPC-157", qty: 1 }],
  },
  {
    id: "ORD-1033",
    email: "sara@example.com",
    status: "shipped",
    carrier: "Demo carrier",
    eta: "Not available",
    items: [{ name: "TB-500", qty: 1 }],
  },
  {
    id: "ORD-1001",
    email: "ali@example.com",
    status: "delivered",
    carrier: "Demo carrier",
    eta: "Delivered (demo)",
    items: [{ name: "GHK-Cu", qty: 1 }],
  },
];

const STEPS = [
  {
    key: "placed",
    label: "Order Placed",
    description: "Your order has been received.",
    icon: Package,
  },
  {
    key: "packed",
    label: "Order Packed",
    description: "Your order is prepared for shipping.",
    icon: PackageCheck,
  },
  {
    key: "shipped",
    label: "On Its Way",
    description: "Your package has been dispatched.",
    icon: Truck,
  },
  {
    key: "out_for_delivery",
    label: "Out for Delivery",
    description: "Your package is with the delivery carrier.",
    icon: MapPin,
  },
  {
    key: "delivered",
    label: "Delivered",
    description: "Your package has arrived.",
    icon: Check,
  },
];

const states = {
  idle: {
    title: "Ready to Track",
    description:
      "Enter your order number and billing email to view your shipment details.",
    icon: Search,
  },
  loading: {
    title: "Finding Your Order",
    description: "Checking your order information.",
    icon: Clock3,
  },
  missing: {
    title: "Order Not Found",
    description:
      "Please check your order number and billing email, then try again.",
    icon: Package,
  },
};

function TrackingPhone({ phase, order }) {
  const currentStep = STEPS.findIndex((step) => step.key === order?.status);

  const progress =
    currentStep >= 0 ? (currentStep / (STEPS.length - 1)) * 100 : 0;

  const state = states[phase];
  const StateIcon = state?.icon || Search;

  return (
    <aside
      aria-label="Order tracking preview"
      className="mx-auto w-full max-w-[380px]"
    >
      <div className="relative rounded-[44px] border-[1.5px] border-[var(--navy-soft)] bg-[var(--ivory)] p-2.5 shadow-[0_20px_45px_rgba(1,17,59,0.12)]">
        <div className="border-primary/10 flex min-h-[540px] flex-col overflow-hidden rounded-[35px] border bg-white">
          <header className="relative bg-linear-to-b from-white to-[var(--ivory)] px-5 pt-3 pb-5">
            <div
              aria-hidden="true"
              className="border-primary/10 bg-primary-soft/60 mx-auto h-4 w-[78px] rounded-full border"
            />

            <Link
              href="/"
              aria-label="Voltera Sciences homepage"
              className="mt-4 flex w-fit items-center"
            >
              <Image
                src="/assets-v/voltera-black.png"
                alt="Voltera Sciences"
                width={160}
                height={80}
                className="h-auto w-[115px] object-contain"
              />
            </Link>

            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-charcoal font-sans text-xs font-semibold">
                Your Order. Every Step.
              </p>

              <LockKeyhole
                size={16}
                strokeWidth={1.8}
                className="text-primary"
              />
            </div>
          </header>

          <div className="h-[2px] bg-[var(--navy-soft)]" />

          <div aria-live="polite" className="flex min-h-0 flex-1 flex-col">
            {phase !== "found" ? (
              <div className="flex min-h-[320px] flex-1 flex-col items-center justify-center px-5 py-7 text-center">
                <span className="border-primary/10 flex size-14 items-center justify-center rounded-full border bg-[linear-gradient(135deg,var(--navy-soft)_0%,var(--navy)_100%)] text-white shadow-[0_8px_20px_rgba(1,17,59,0.18)]">
                  {phase === "loading" ? (
                    <span className="size-6 animate-spin rounded-full border-2 border-white/25 border-t-white motion-reduce:animate-none" />
                  ) : (
                    <StateIcon size={25} strokeWidth={1.8} />
                  )}
                </span>

                <p className="mt-4 font-sans text-[10px] font-bold tracking-[0.16em] text-[var(--navy-soft)] uppercase">
                  Order Tracking
                </p>

                <h3 className="font-heading text-charcoal mt-3 text-[24px] leading-tight font-semibold tracking-tight">
                  {state?.title}
                </h3>

                <p className="text-muted mt-3 max-w-[300px] font-sans text-[14px] leading-6">
                  {state?.description}
                </p>

                {phase === "idle" && (
                  <div className="divide-border border-border mt-5 w-full divide-y border-t">
                    {["Order number needed", "Billing email needed"].map(
                      (label, index) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 py-3 text-left"
                        >
                          <span className="border-primary/20 text-primary flex size-6 shrink-0 items-center justify-center rounded-full border bg-white font-sans text-[10px] font-semibold">
                            {index + 1}
                          </span>

                          <span className="text-charcoal/80 font-sans text-[12px] font-medium">
                            {label}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            ) : (
              order && (
                <div className="max-h-[570px] overflow-y-auto px-5 py-6">
                  <div className="text-center">
                    <span className="border-secondary/30 bg-secondary/10 text-secondary-dark inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold">
                      <span className="bg-secondary size-2 rounded-full" />
                      Shipment Status
                    </span>

                    <h3 className="font-heading text-primary mt-4 text-2xl">
                      {STEPS[currentStep]?.label}
                    </h3>

                    <p className="text-muted mt-2 text-sm">Order #{order.id}</p>
                  </div>

                  <div className="border-border bg-primary-soft/60 mt-6 rounded-2xl border p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-primary text-sm font-semibold">
                        Shipment Progress
                      </span>

                      <span className="font-heading text-primary text-lg">
                        {Math.round(progress)}%
                      </span>
                    </div>

                    <div
                      role="progressbar"
                      aria-label="Shipment progress"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={progress}
                      className="bg-primary/10 mt-3 h-2 overflow-hidden rounded-full"
                    >
                      <div
                        style={{ width: `${progress}%` }}
                        className="from-primary-light via-accent to-secondary h-full rounded-full bg-linear-to-r transition-[width] duration-700"
                      />
                    </div>

                    <div className="border-primary/10 mt-4 grid grid-cols-2 gap-3 border-t pt-3">
                      {[
                        ["Carrier", order.carrier],
                        ["Delivery", order.eta],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <p className="text-muted text-xs">{label}</p>

                          <p className="text-primary mt-1 text-sm font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h4 className="font-heading text-primary mt-7 mb-5 text-base">
                    Shipment Journey
                  </h4>

                  <ol>
                    {STEPS.map((step, index) => {
                      const Icon = step.icon;
                      const reached = index <= currentStep;
                      const current = index === currentStep;
                      const last = index === STEPS.length - 1;

                      return (
                        <li
                          key={step.key}
                          aria-current={current ? "step" : undefined}
                          className="flex gap-3"
                        >
                          <div className="flex flex-col items-center">
                            <span
                              className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${
                                reached
                                  ? "border-secondary/40 from-primary-light to-primary text-accent-light bg-linear-to-br"
                                  : "border-border bg-surface text-muted"
                              } ${current ? "ring-secondary/15 ring-4" : ""}`}
                            >
                              <Icon size={18} strokeWidth={1.7} />
                            </span>

                            {!last && (
                              <span
                                className={`min-h-10 w-[2px] flex-1 ${
                                  index < currentStep
                                    ? "bg-secondary"
                                    : "bg-border"
                                }`}
                              />
                            )}
                          </div>

                          <div className="min-w-0 flex-1 pt-1 pb-5">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-primary text-sm font-bold">
                                {step.label}
                              </p>

                              {current && (
                                <span className="bg-secondary/15 text-secondary-dark rounded-full px-2 py-0.5 text-xs font-semibold">
                                  {last ? "Completed" : "Current"}
                                </span>
                              )}
                            </div>

                            <p className="text-muted mt-1 text-xs leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>

                  <div className="border-border bg-surface mt-4 rounded-xl border p-4">
                    <h4 className="text-primary mb-3 flex items-center gap-2 text-sm font-bold">
                      <Package size={18} className="text-secondary-dark" />
                      Order Items
                    </h4>

                    {order.items.map((item) => (
                      <div
                        key={item.name}
                        className="border-border flex items-center justify-between gap-3 border-t py-2 text-sm"
                      >
                        <span className="text-charcoal">{item.name}</span>

                        <span className="text-primary font-semibold">
                          ×{item.qty}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-muted mt-4 text-center text-xs leading-relaxed">
                    Demonstration tracking only. Not live carrier information.
                  </p>
                </div>
              )
            )}
          </div>

          <footer className="border-border mt-auto flex items-center justify-center gap-2 border-t bg-[var(--ivory)] px-4 py-4">
            <LockKeyhole
              size={14}
              strokeWidth={1.8}
              className="text-[var(--navy-soft)]"
            />

            <span className="text-charcoal/75 font-sans text-[10px] font-semibold tracking-[0.08em] uppercase">
              Order Tracking Preview
            </span>
          </footer>
        </div>
      </div>
    </aside>
  );
}

export default function OrderTracker() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState(null);
  const [phase, setPhase] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!orderNumber.trim() || !email.trim()) return;

    setPhase("loading");
    setOrder(null);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const number = orderNumber.trim().replace(/^#/, "").toLowerCase();

    const billingEmail = email.trim().toLowerCase();

    const found = DEMO_ORDERS.find(
      (item) =>
        (item.id.toLowerCase() === number ||
          item.id.toLowerCase().replace("ord-", "") === number) &&
        item.email.toLowerCase() === billingEmail,
    );

    setOrder(found || null);
    setPhase(found ? "found" : "missing");
  }

  const inputClass =
    "h-13 w-full rounded-xl border border-primary/15 bg-primary-soft/50 pr-4 pl-12 text-base text-primary outline-none transition-all duration-300 placeholder:text-muted/70 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10";

  return (
    <main className="bg-surface min-h-screen">
      <section className="via-primary-soft/60 relative isolate overflow-hidden bg-linear-to-br from-white to-white px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-16">
        <div
          aria-hidden="true"
          className="bg-primary-light/10 pointer-events-none absolute -top-40 -right-40 -z-10 size-[500px] rounded-full blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="bg-secondary/10 pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[500px] rounded-full blur-[100px]"
        />

        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <header>
              <span className="border-secondary/30 bg-secondary/10 text-secondary-dark mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-wider uppercase">
                <Truck size={16} strokeWidth={1.8} />
                Shipment Tracking
              </span>

              <h1 className="section-heading">
                Track Your <span className="text-secondary">Order.</span>
              </h1>

              <div className="from-secondary-dark via-accent-light to-secondary-dark my-5 h-[3px] w-24 rounded-full bg-linear-to-r" />

              <p className="text-muted max-w-xl text-base leading-8">
                Stay informed throughout your shipment journey. Enter your order
                number and billing email to view your order details.
              </p>
            </header>

            <div className="border-border shadow-primary/5 mt-8 overflow-hidden rounded-[22px] border bg-white shadow-xl">
              <div className="from-secondary-dark via-accent-light to-secondary-dark h-[3px] bg-linear-to-r" />

              <div className="flex items-center gap-4 px-5 pt-6 sm:px-7">
                <span className="border-secondary/30 from-primary-light via-accent to-primary text-accent-light flex size-13 shrink-0 items-center justify-center rounded-xl border bg-linear-to-br">
                  <Package size={25} strokeWidth={1.7} />
                </span>

                <div>
                  <h2 className="font-heading text-primary text-xl">
                    Find Your Order
                  </h2>

                  <p className="text-muted mt-1 text-sm">
                    Enter the details used at checkout.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="order-number"
                      className="text-primary mb-2 block text-sm font-semibold"
                    >
                      Order Number
                    </label>

                    <div className="relative">
                      <Search
                        size={19}
                        className="text-secondary-dark pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
                      />

                      <input
                        id="order-number"
                        type="text"
                        required
                        autoComplete="off"
                        value={orderNumber}
                        onChange={(event) => setOrderNumber(event.target.value)}
                        placeholder="e.g. ORD-1042"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="billing-email"
                      className="text-primary mb-2 block text-sm font-semibold"
                    >
                      Billing Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={19}
                        className="text-secondary-dark pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
                      />

                      <input
                        id="billing-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={phase === "loading"}
                  className="btn-primary mt-6 h-13 w-full gap-3 px-6 text-base"
                >
                  {phase === "loading" ? (
                    <>
                      <span className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Finding Your Order...
                    </>
                  ) : (
                    <>
                      Track My Order
                      <ArrowRight size={19} strokeWidth={1.8} />
                    </>
                  )}
                </button>

                {phase === "missing" && (
                  <p
                    role="alert"
                    className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-600"
                  >
                    No matching demo order was found. Please check your order
                    number and email address.
                  </p>
                )}

                <div className="mt-5 flex items-start gap-2.5">
                  <LockKeyhole
                    size={17}
                    className="text-secondary-dark mt-0.5 shrink-0"
                  />

                  <p className="text-muted text-sm leading-relaxed">
                    Your details are used for this lookup and are not saved on
                    this page.
                  </p>
                </div>
              </form>
            </div>

            <p className="text-muted mt-5 text-sm leading-6">
              Demo tracking: Try{" "}
              <strong className="text-primary">ORD-1042</strong> with{" "}
              <strong className="text-primary">demo@yourshop.com</strong>.
            </p>
          </div>

          <div className="min-w-0 lg:sticky lg:top-28">
            <TrackingPhone phase={phase} order={order} />
          </div>
        </div>
      </section>
    </main>
  );
}
