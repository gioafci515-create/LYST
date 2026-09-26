import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TEMPLATES_META } from "./InvitationsCatalog";
import ComingSoon from "./ComingSoon";
import Breadcrumbs from "../sections/invitation-detail/Breadcrumbs";
import DetailHero from "../sections/invitation-detail/DetailHero";
import MoreInvitations from "../sections/invitation-detail/MoreInvitations";

export default function InvitationDetail() {
  const { slug } = useParams();
  const { t } = useTranslation("invitations");
  const translatedTemplates = t("templates", { returnObjects: true });

  const templates = useMemo(() => {
    const bySlug = new Map(translatedTemplates.map((item) => [item.slug, item]));
    return TEMPLATES_META.map((meta) => ({ ...meta, ...bySlug.get(meta.slug) }));
  }, [translatedTemplates]);

  const template = templates.find((item) => item.slug === slug);

  if (!template) return <ComingSoon titleKey="invitationDetail" />;

  return (
    <>
      <Breadcrumbs template={template} />
      <DetailHero template={template} />
      <MoreInvitations templates={templates} currentSlug={slug} />
    </>
  );
}
