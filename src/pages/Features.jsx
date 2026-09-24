import FeaturesHero from "../sections/features/FeaturesHero";
import FeaturesManage from "../sections/features/FeaturesManage";
import FeaturesExperience from "../sections/features/FeaturesExperience";
import FeaturesRemember from "../sections/features/FeaturesRemember";
import FeaturesCta from "../sections/features/FeaturesCta";

export default function Features() {
  return (
    <>
      <FeaturesHero />
      <div className="h-px w-full bg-line" />
      <FeaturesManage />
      <FeaturesExperience />
      <FeaturesRemember />
      <FeaturesCta />
    </>
  );
}
