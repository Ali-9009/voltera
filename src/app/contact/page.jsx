"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
  Headphones,
  ChevronRight,
} from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

const email = "support@volterasciences.com";
const phone = "(754) 335-5276";
const phoneNumber = "+17543355276";
const subjects = [
  "Product question",
  "Order support",
  "Laboratory documentation",
  "General inquiry",
];
const fieldClass =
  "w-full rounded-xl border border-primary/15 bg-primary-soft/40 px-4 text-base text-primary outline-none transition-colors placeholder:text-muted focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10";
const labelClass = "mb-2 block text-sm font-semibold text-primary";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [notice, setNotice] = useState("");

  const update = (event) => {
    setForm((value) => ({ ...value, [event.target.name]: event.target.value }));
    setNotice("");
  };

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const subject = `[Voltera Sciences] ${form.subject}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice(
      "Your email application should open with your message. Send the email there to complete your inquiry.",
    );
  };

  return (
    <main className="bg-surface min-h-screen">
      <header className="border-secondary/40 from-primary via-primary-light to-primary relative isolate overflow-hidden border-b bg-linear-to-r px-4 pt-28 pb-10 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_48px,rgba(214,166,79,0.22)_48px,rgba(214,166,79,0.22)_49px)]" />

          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_148px,rgba(239,210,141,0.30)_148px,rgba(239,210,141,0.30)_150px)]" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(50,104,197,0.25),transparent_75%)]" />

          <div className="border-secondary/30 absolute -right-28 -bottom-48 size-[450px] rounded-full border" />

          <div className="border-accent-light/25 absolute -right-12 -bottom-48 size-[380px] rounded-full border" />

          <div className="border-secondary/20 absolute -right-44 -bottom-52 size-[550px] rounded-full border" />

          <Headphones
            strokeWidth={0.6}
            className="text-accent-light/10 absolute -right-10 -bottom-20 size-72 rotate-[-15deg] sm:right-12 sm:size-96"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm text-white/85"
          >
            <Link
              href="/"
              className="hover:text-accent-light transition-colors duration-300"
            >
              Home
            </Link>

            <ChevronRight
              size={15}
              aria-hidden="true"
              className="text-accent-light/80"
            />

            <span
              aria-current="page"
              className="text-accent-light font-semibold"
            >
              Contact
            </span>
          </nav>

          <p className="text-accent-light mb-3 flex items-center gap-3 font-sans text-xs font-bold tracking-[0.15em] uppercase">
            <span
              aria-hidden="true"
              className="from-secondary-dark via-accent-light to-secondary h-[2px] w-8 rounded-full bg-linear-to-r"
            />
            Customer Support
          </p>

          <h1 className="font-heading text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight text-white">
            We're Here to{" "}
            <span className="via-accent-light to-secondary bg-linear-to-b from-[#fff0bb] bg-clip-text text-transparent">
              Help.
            </span>
          </h1>

          <div
            aria-hidden="true"
            className="from-secondary-dark via-accent-light to-secondary-dark my-5 h-[3px] w-24 rounded-full bg-linear-to-r"
          />

          <p className="max-w-xl font-sans text-base leading-[1.8] text-white/95 sm:text-[17px]">
            Have a question about our research products, an order, or product
            documentation? Get in touch with our team.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 bottom-0 h-[3px] bg-linear-to-r"
        />
      </header>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10">
          <section
            aria-labelledby="contact-form-heading"
            className="border-border shadow-primary/5 min-w-0 overflow-hidden rounded-2xl border bg-white shadow-lg"
          >
            <div
              aria-hidden="true"
              className="from-secondary-dark via-accent-light to-secondary-dark h-[3px] bg-linear-to-r"
            />
            <div className="p-5 sm:p-8">
              <header className="border-border mb-6 border-b pb-5">
                <h2
                  id="contact-form-heading"
                  className="font-heading text-primary text-2xl sm:text-[30px]"
                >
                  Send Us a Message
                </h2>
                <p className="text-muted mt-3 text-base leading-7">
                  Fill in the details below and let us know how we can help.
                </p>
              </header>
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Full Name <span className="text-secondary-dark">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Enter your full name"
                      className={`${fieldClass} h-13`}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email Address{" "}
                      <span className="text-secondary-dark">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@example.com"
                      className={`${fieldClass} h-13`}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className={labelClass}>
                    What Can We Help With?
                  </label>
                  <CustomSelect
                    id="contact-subject"
                    value={form.subject}
                    onChange={(event) =>
                      update({
                        target: { name: "subject", value: event.target.value },
                      })
                    }
                    placeholder="Select a subject"
                    className="w-full"
                    options={subjects.map((subject) => ({
                      value: subject,
                      label: subject,
                    }))}
                    triggerClassName="h-13! rounded-xl! border-primary/15! bg-primary-soft/40! text-base! text-primary!"
                    dropdownClassName="border-border! shadow-lg!"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Your Message <span className="text-secondary-dark">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    rows={6}
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us how we can help..."
                    className={`${fieldClass} resize-y py-4 leading-relaxed`}
                  />
                </div>
                <div className="border-border border-t pt-5">
                  <button
                    type="submit"
                    className="btn-primary h-13 w-full gap-2 px-7 text-base sm:w-auto"
                  >
                    Prepare Email <ArrowUpRight size={19} />
                  </button>
                  {notice && (
                    <p
                      role="status"
                      className="border-primary/10 bg-primary-soft text-primary mt-4 flex items-start gap-2 rounded-xl border p-4 text-sm leading-relaxed"
                    >
                      <CheckCircle2 size={18} className="shrink-0" />
                      {notice}
                    </p>
                  )}
                  <p className="text-muted mt-4 text-sm leading-6">
                    This form opens your email application. Messages are not
                    sent directly through the website.
                  </p>
                </div>
              </form>
            </div>
          </section>

          <aside aria-label="Contact information" className="min-w-0 space-y-5">
            <section className="border-border shadow-primary/5 overflow-hidden rounded-2xl border bg-white shadow-lg">
              <header className="from-primary-light via-accent to-primary relative isolate overflow-hidden bg-linear-to-br p-6 sm:p-7">
                <Headphones
                  aria-hidden="true"
                  strokeWidth={0.8}
                  className="pointer-events-none absolute -right-5 -bottom-12 -z-10 size-44 text-white/10"
                />
                <p className="text-accent-light mb-2 text-xs font-bold tracking-widest uppercase">
                  Contact Information
                </p>
                <h2 className="font-heading text-2xl text-white">
                  Get in Touch
                </h2>
                <p className="mt-3 text-base leading-7 text-white/90">
                  Reach our team directly for product inquiries, order support,
                  or general questions.
                </p>
              </header>
              <div
                aria-hidden="true"
                className="from-secondary-dark via-accent-light to-secondary-dark h-[3px] bg-linear-to-r"
              />
              <div className="divide-border divide-y px-5 sm:px-6">
                <div className="flex items-start gap-4 py-6">
                  <span className="border-secondary/30 bg-primary-soft text-primary flex size-12 shrink-0 items-center justify-center rounded-xl border">
                    <Mail size={23} strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-primary text-lg">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-primary hover:text-secondary-dark mt-2 block text-base font-semibold wrap-break-word transition-colors"
                    >
                      {email}
                    </a>
                    <p className="text-muted mt-1 text-sm">
                      Product and order inquiries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-6">
                  <span className="border-secondary/30 bg-primary-soft text-primary flex size-12 shrink-0 items-center justify-center rounded-xl border">
                    <Phone size={23} strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-primary text-lg">
                      Call or Text Us
                    </h3>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-primary hover:text-secondary-dark mt-2 block text-base font-semibold transition-colors"
                    >
                      {phone}
                    </a>
                    <p className="text-muted mt-1 text-sm">
                      Connect with our support team.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={`tel:${phoneNumber}`}
                        className="btn-primary h-10 gap-2 px-4 text-sm"
                      >
                        <Phone size={16} /> Call Us
                      </a>
                      <a
                        href={`sms:${phoneNumber}`}
                        className="border-primary/20 text-primary hover:border-secondary hover:bg-primary-soft inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors"
                      >
                        <MessageCircle size={16} /> Text Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="border-secondary/25 bg-secondary/5 rounded-2xl border p-5 sm:p-6">
              <h2 className="font-heading text-primary text-lg">
                Looking for Answers?
              </h2>
              <p className="text-muted mt-2 text-base leading-7">
                Explore our frequently asked questions for helpful information
                about products and orders.
              </p>
              <Link
                href="/faqs"
                className="text-primary hover:text-secondary-dark mt-4 inline-flex items-center gap-2 text-sm font-bold transition-colors"
              >
                View FAQs <ArrowUpRight size={17} />
              </Link>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
