import ProductHero from "../sections/product/ProductHero";
import ProductInviteLink from "../sections/product/ProductInviteLink";
import ProductGuestManagement from "../sections/product/ProductGuestManagement";
import ProductExperience from "../sections/product/ProductExperience";
import ProductArchive from "../sections/product/ProductArchive";
import ProductCta from "../sections/product/ProductCta";

export default function Product() {
  return (
    <>
      <ProductHero />
      <ProductInviteLink />
      <ProductGuestManagement />
      <ProductExperience />
      <ProductArchive />
      <ProductCta />
    </>
  );
}
