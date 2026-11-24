import ShopClient from "@/components/shop/ShopClient";

export const metadata = {
  title: "Shop Research Peptides | Voltera Sciences",
  description:
    "Explore the Voltera Sciences collection of premium research peptides and laboratory compounds, with a focus on quality, purity, and consistency.",
};

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  return <ShopClient initialSearch={params?.search || ""} />;
}
