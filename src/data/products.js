// // Helper to generate product variants with prices
// const createVariants = (slug, variants) =>
//   variants.map(([dosage, price, compareAt]) => ({
//     id: `${slug}-${dosage.toLowerCase()}`,
//     label: dosage,
//     price,
//     compareAt,
//     inStock: true,
//   }));

// export const products = [
//   // {
//   //   id: "1",
//   //   slug: "pp-1-cag",
//   //   name: "PP-1 Cag",
//   //   category: "Research Peptides",
//   //   description:
//   //     "PP-1 Cag research peptide supplied for controlled laboratory investigation and scientific analysis.",
//   //   image: "/products/pp-1cag.webp",
//   //   badge: "Featured",
//   //   variants: createVariants("pp-1-cag", [
//   //     ["5mg", 49, 65],
//   //     ["10mg", 79, 99],
//   //   ]),
//   //   defaultVariant: 0,
//   // },

// ];

// export const getProductBySlug = (slug) =>
//   products.find((product) => product.slug === slug);

// export const getFeaturedProducts = () =>
//   products.filter((product) => product.badge === "Featured");

// All prices are estimated demo prices in USD.
// Replace them with approved prices before launching.

const createVariants = (slug, variants) =>
  variants.map(([dosage, price, compareAt]) => ({
    id: `${slug}-${dosage
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`,
    label: dosage,
    price,
    compareAt,
    inStock: true,
  }));

const catalog = [
  {
    slug: "5-amino-1mq",
    name: "5-Amino-1MQ",
    image: "/products/5-amino-1mq-10mg.png",
    variants: [
      ["10mg", 49.99, 64.99],
      ["50mg", 134.99, 174.99],
    ],
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    image: "/products/aod-9604-5mg.png",
    variants: [
      ["5mg", 44.99, 59.99],
      ["10mg", 69.99, 89.99],
    ],
  },
  {
    slug: "acetic-acid",
    name: "Acetic Acid",
    category: "Research Supplies",
    image: "/products/acetic-acid-10ml.png",
    variants: [["10ml", 14.99, 19.99]],
  },
  {
    slug: "adamax",
    name: "Adamax",
    image: "/products/adamax-10mg.png",
    variants: [["10mg", 54.99, 69.99]],
  },
  {
    slug: "alprostadil",
    name: "Alprostadil",
    image: "/products/alprostadil-20mg.png",
    variants: [["20mg", 49.99, 64.99]],
  },
  {
    slug: "b-12",
    name: "B-12",
    image: "/products/b-12-10mg.png",
    variants: [["10mg", 29.99, 39.99]],
  },
  {
    slug: "bpc-157-tb-500",
    name: "BPC-157 + TB-500",
    image: "/products/bpc-157-tb-500-10mg-5mg-5mg.png",
    variants: [
      ["10mg (5mg + 5mg)", 79.99, 104.99],
      ["20mg (10mg + 10mg)", 119.99, 154.99],
    ],
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    image: "/products/bpc-157-10mg.png",
    variants: [["10mg", 54.99, 69.99]],
  },
  {
    slug: "bw-h",
    name: "BW-H",
    category: "Research Supplies",
    image: "/products/bw-h-30ml.png",
    variants: [["30ml", 19.99, 29.99]],
  },
  {
    slug: "bac-water",
    name: "Bac Water",
    category: "Research Supplies",
    image: "/products/bac-water-3ml.png",
    variants: [
      ["3ml", 9.99, 14.99],
      ["10ml", 24.99, 34.99],
      ["30ml", 49.99, 64.99],
    ],
  },
  {
    slug: "bacteriostatic-water",
    name: "Bacteriostatic Water",
    category: "Research Supplies",
    image: "/products/bacteriostatic-water-standard.png",
    variants: [["Standard", 14.99, 19.99]],
  },
  {
    slug: "cjc-1295-no-dac-ipamorelin",
    name: "CJC-1295 No DAC + Ipamorelin",
    image: "/products/cjc-1295-no-dac-ipamorelin-5mg-5mg.png",
    variants: [["5mg + 5mg", 79.99, 104.99]],
  },
  {
    slug: "cagrilintide",
    name: "Cagrilintide",
    image: "/products/cagrilintide-10mg.png",
    variants: [["10mg", 69.99, 89.99]],
  },
  {
    slug: "dsip",
    name: "DSIP",
    image: "/products/dsip-10mg.png",
    variants: [["10mg", 44.99, 59.99]],
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    image: "/products/epithalon-50mg.png",
    variants: [["50mg", 79.99, 104.99]],
  },
  {
    slug: "ghk-cu",
    name: "GHK-CU",
    image: "/products/ghk-cu-50mg.png",
    variants: [
      ["50mg", 49.99, 64.99],
      ["100mg", 74.99, 99.99],
    ],
  },
  {
    slug: "glow",
    name: "GLOW",
    image: "/products/glow-70mg.png",
    variants: [["70mg", 89.99, 114.99]],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    image: "/products/glutathione-1500mg.png",
    variants: [["1500mg", 59.99, 79.99]],
  },
  {
    slug: "igf-1lr3",
    name: "IGF-1LR3",
    image: "/products/igf-1lr3-0-1mg.png",
    variants: [
      ["0.1mg", 64.99, 84.99],
      ["1mg", 269.99, 344.99],
    ],
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    image: "/products/ipamorelin-10mg.png",
    variants: [["10mg", 54.99, 69.99]],
  },
  {
    slug: "klow",
    name: "KLOW",
    image: "/products/klow-80mg.png",
    variants: [["80mg", 99.99, 129.99]],
  },
  {
    slug: "kpv",
    name: "KPV",
    image: "/products/kpv-standard.png",
    variants: [["Standard", 49.99, 64.99]],
  },
  {
    slug: "kisspeptin",
    name: "Kisspeptin",
    image: "/products/kisspeptin-10mg.png",
    variants: [["10mg", 54.99, 69.99]],
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    image: "/products/mots-c-10mg.png",
    variants: [
      ["10mg", 49.99, 64.99],
      ["40mg", 114.99, 149.99],
    ],
  },
  {
    slug: "mt-11",
    name: "MT-11",
    image: "/products/mt-11-10ml.png",
    variants: [["10ml", 39.99, 54.99]],
  },
  {
    slug: "mt-2",
    name: "MT-2",
    image: "/products/mt-2-10mg.png",
    variants: [["10mg", 44.99, 59.99]],
  },
  {
    slug: "na-semax-amidate",
    name: "NA-SEMAX Amidate",
    image: "/products/na-semax-amidate-10mg.png",
    variants: [["10mg", 59.99, 79.99]],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    image: "/products/nad-plus-500mg.png",
    variants: [
      ["500mg", 59.99, 79.99],
      ["1000mg", 89.99, 114.99],
    ],
  },
  {
    slug: "pt-141",
    name: "PT-141",
    image: "/products/pt-141-10mg.png",
    variants: [["10mg", 44.99, 59.99]],
  },
  {
    slug: "ss-31",
    name: "SS-31",
    image: "/products/ss-31-10mg.png",
    variants: [
      ["10mg", 49.99, 64.99],
      ["50mg", 134.99, 174.99],
    ],
  },
  {
    slug: "selank",
    name: "Selank",
    image: "/products/selank-10mg.png",
    variants: [["10mg", 44.99, 59.99]],
  },
  {
    slug: "semax",
    name: "Semax",
    image: "/products/semax-10mg.png",
    variants: [["10mg", 49.99, 64.99]],
  },
  {
    slug: "semax-selank",
    name: "Semax + Selank",
    image: "/products/semax-selank-5mg-5mg.png",
    variants: [["5mg + 5mg", 69.99, 89.99]],
  },
  {
    slug: "sermorelin-acetate",
    name: "Sermorelin Acetate",
    image: "/products/sermorelin-acetate-10mg.png",
    variants: [["10mg", 54.99, 69.99]],
  },
  {
    slug: "sleep-rem-15",
    name: "Sleep REM 15",
    image: "/products/sleep-rem-15-standard.png",
    variants: [["Standard", 69.99, 89.99]],
  },
  {
    slug: "snap-8-ghk-serum",
    name: "Snap-8 + GHK Serum",
    image: "/products/snap-8-ghk-serum-standard.png",
    variants: [["Standard", 49.99, 64.99]],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    image: "/products/tb-500-10mg.png",
    variants: [["10mg", 54.99, 69.99]],
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    image: "/products/tesamorelin-10mg.png",
    variants: [
      ["10mg", 79.99, 104.99],
      ["20mg", 119.99, 154.99],
    ],
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    image: "/products/thymosin-alpha-1-10mg.png",
    variants: [["10mg", 64.99, 84.99]],
  },
  {
    slug: "vls-1sm",
    name: "VLS-1SM",
    image: "/products/vls-1sm-5mg.png",
    variants: [
      ["5mg", 49.99, 64.99],
      ["10mg", 74.99, 99.99],
    ],
  },
  {
    slug: "vls-2trz",
    name: "VLS-2TRZ",
    image: "/products/vls-2trz-10mg.png",
    variants: [
      ["10mg", 69.99, 89.99],
      ["15mg", 89.99, 114.99],
      ["20mg", 104.99, 134.99],
      ["30mg", 134.99, 174.99],
      ["60mg", 209.99, 269.99],
    ],
  },
  {
    slug: "vls-3rt",
    name: "VLS-3RT",
    image: "/products/vls-3rt-10mg.png",
    variants: [
      ["10mg", 79.99, 104.99],
      ["20mg", 119.99, 154.99],
      ["30mg", 154.99, 199.99],
      ["60mg", 239.99, 304.99],
    ],
  },
  {
    slug: "vls-3rt-eloralintide",
    name: "VLS-3RT + Eloralintide",
    image: "/products/vls-3rt-eloralintide-10mg-2-5mg.png",
    variants: [["10mg + 2.5mg", 109.99, 139.99]],
  },
];

export const products = catalog.map((product, index) => ({
  id: String(index + 1),
  slug: product.slug,
  name: product.name,
  category: product.category || "Research Compounds",
  description: `${product.name} supplied for laboratory research and analytical use only.`,
  image: product.image,
  badge: product.badge || null,
  variants: createVariants(product.slug, product.variants),
  defaultVariant: 0,
}));

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((product) => product.badge === "Featured");
