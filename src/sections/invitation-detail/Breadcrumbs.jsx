import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

export default function Breadcrumbs({ template }) {
  const { t } = useTranslation("invitations");

  return (
    <section className="flex w-full flex-col items-center pt-6">
      <div className="mx-auto flex w-full max-w-[1600px] items-center px-20 max-lg:px-6">
        <Reveal direction="fade" className="flex items-center gap-2 text-[13px]">
          <Link to="/invitations" className="text-muted transition-colors hover:text-black">
            {t("detail.breadcrumbLabel")}
          </Link>
          <span className="text-muted-2">/</span>
          <span className="font-semibold text-black">{template.name}</span>
        </Reveal>
      </div>
    </section>
  );
}
