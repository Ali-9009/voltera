import {
  FlaskConical,
  Dna,
  Microscope,
  Atom,
  Activity,
  BrainCircuit,
  ShieldCheck,
  Droplets,
  Layers3,
  TestTubes,
} from "lucide-react";

const categories = [
  {
    name: "Peptide Research",
    icon: Dna,
  },
  {
    name: "Cellular Research",
    icon: Microscope,
  },
  {
    name: "Metabolic Research",
    icon: Activity,
  },
  {
    name: "Neurological Research",
    icon: BrainCircuit,
  },
  {
    name: "Molecular Research",
    icon: Atom,
  },
  {
    name: "Immunology Research",
    icon: ShieldCheck,
  },
  {
    name: "Research Blends",
    icon: Layers3,
  },
  {
    name: "Laboratory Compounds",
    icon: FlaskConical,
  },
  {
    name: "Reconstitution Water",
    icon: Droplets,
  },
  {
    name: "Research Essentials",
    icon: TestTubes,
  },
];

function CategoryCard({ category, index }) {
  const Icon = category.icon;

  return (
    <article className="group border-primary/10 hover:border-secondary/60 hover:shadow-primary/10 relative isolate flex min-h-[135px] min-w-0 flex-col overflow-hidden rounded-[18px] border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[155px] sm:rounded-[22px] sm:p-5">
      <span
        aria-hidden="true"
        className="from-primary-light/10 pointer-events-none absolute inset-0 -z-10 bg-linear-to-bl via-transparent to-transparent"
      />

      <span
        aria-hidden="true"
        className="from-primary-light/20 via-primary-soft pointer-events-none absolute inset-0 -z-10 bg-linear-to-bl to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="border-primary/10 bg-primary-light/[0.025] pointer-events-none absolute -top-8 -right-8 size-28 rotate-45 rounded-[24px] border transition-transform duration-500 group-hover:rotate-[60deg]"
      />

      <span
        aria-hidden="true"
        className="border-secondary/15 pointer-events-none absolute -top-12 -right-2 size-28 rotate-45 rounded-[24px] border"
      />

      <div className="relative flex items-start justify-between">
        <span className="border-primary-light/15 bg-primary-soft text-primary group-hover:border-secondary/40 group-hover:from-accent group-hover:to-primary group-hover:text-accent-light group-hover:shadow-primary/20 flex size-11 items-center justify-center rounded-[13px] border transition-all duration-300 group-hover:bg-linear-to-br group-hover:shadow-lg sm:size-13 sm:rounded-[16px]">
          <Icon
            aria-hidden="true"
            strokeWidth={1.7}
            className="size-5 transition-transform duration-300 group-hover:scale-110 sm:size-6"
          />
        </span>

        <span
          aria-hidden="true"
          className="font-heading text-[32px] leading-none tracking-tight text-transparent opacity-15 transition-all duration-300 [-webkit-text-stroke:1px_var(--color-primary)] group-hover:opacity-40 group-hover:[-webkit-text-stroke:1px_var(--color-secondary)] sm:text-[42px]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-auto pt-5">
        <h3 className="text-primary font-sans text-[13px] leading-[1.4] font-extrabold sm:text-[16px]">
          {category.name}
        </h3>

        <span
          aria-hidden="true"
          className="bg-secondary/60 group-hover:bg-secondary mt-2.5 block h-[2px] w-6 rounded-full transition-all duration-500 group-hover:w-12"
        />
      </div>

      <span
        aria-hidden="true"
        className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-4 bottom-0 h-[3px] origin-center scale-x-0 rounded-full bg-linear-to-r transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  );
}

export default function ShopByCategory() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="bg-primary-soft relative isolate overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="bg-primary-light/15 pointer-events-none absolute -top-48 -right-40 size-[500px] rounded-full blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="bg-secondary/10 pointer-events-none absolute -bottom-48 -left-40 size-[500px] rounded-full blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-9 max-w-[700px] text-center sm:mb-12">
          <h2 id="categories-heading" className="section-heading">
            Shop by <span className="text-secondary">Category.</span>
          </h2>

          <p className="text-muted mx-auto mt-4 max-w-[540px] font-sans text-[13px] leading-[1.8] sm:text-[15px]">
            Explore a diverse collection of research compounds organized by
            scientific research areas and laboratory requirements.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
