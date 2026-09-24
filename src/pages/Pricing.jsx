import PricingHero from "../sections/pricing/PricingHero";
import PricingTiers from "../sections/pricing/PricingTiers";
import PricingComparison from "../sections/pricing/PricingComparison";
import PricingFaq from "../sections/pricing/PricingFaq";

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <PricingComparison />
      <PricingFaq />
    </>
  );
}
