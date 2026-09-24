import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

function FieldCard({ label, value, full }) {
  return (
    <div
      className={`flex flex-col items-start gap-2 rounded-xl border border-line bg-white p-4 ${
        full ? "w-full" : "flex-1 min-w-[160px]"
      }`}
    >
      <p className="text-[13px] text-muted">{label}</p>
      <p className="text-sm leading-[1.5] text-black">{value}</p>
    </div>
  );
}

function PanelHeader({ title, badge }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-2">
      <p className="text-sm font-bold text-black">{title}</p>
      {badge && (
        <span className="rounded-full border border-line bg-surface px-2.5 py-1.5 text-[9px] font-semibold text-muted">
          {badge}
        </span>
      )}
    </div>
  );
}

// Each step's panel content has a distinct layout in the original design
// (2x2 field grid, stacked full-width fields, image gallery, etc.), so the
// visual structure per index is preserved here while the text/values come
// from the translated `panel` data for that step.
const PANEL_RENDERERS = [
  (panel) => (
    <>
      <PanelHeader title={panel.title} badge={panel.badge} />
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full flex-wrap items-start gap-3">
          <FieldCard label={panel.fields[0].label} value={panel.fields[0].value} />
          <FieldCard label={panel.fields[1].label} value={panel.fields[1].value} />
        </div>
        <div className="flex w-full flex-wrap items-start gap-3">
          <FieldCard label={panel.fields[2].label} value={panel.fields[2].value} />
          <FieldCard label={panel.fields[3].label} value={panel.fields[3].value} />
        </div>
      </div>
    </>
  ),
  (panel) => (
    <>
      <PanelHeader title={panel.title} badge={panel.badge} />
      <div className="flex w-full flex-col items-start gap-3">
        {panel.fields.map((field) => (
          <FieldCard key={field.label} full label={field.label} value={field.value} />
        ))}
      </div>
    </>
  ),
  (panel) => (
    <>
      <PanelHeader title={panel.title} badge={panel.badge} />
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full flex-wrap items-start gap-3">
          <FieldCard label={panel.fields[0].label} value={panel.fields[0].value} />
          <FieldCard label={panel.fields[1].label} value={panel.fields[1].value} />
        </div>
        <FieldCard full label={panel.fields[2].label} value={panel.fields[2].value} />
      </div>
    </>
  ),
  (panel) => (
    <>
      <PanelHeader title={panel.title} badge={panel.badge} />
      <div className="flex w-full items-start gap-3">
        <img
          src="/images/how-it-works-1.png"
          alt={panel.imageAlt}
          className="h-20 flex-1 rounded-lg object-cover max-lg:h-16 lg:h-[100px]"
        />
        <img
          src="/images/how-it-works-2.png"
          alt={panel.imageAlt}
          className="h-20 flex-1 rounded-lg object-cover max-lg:h-16 lg:h-[100px]"
        />
        <img
          src="/images/how-it-works-3.png"
          alt={panel.imageAlt}
          className="h-20 flex-1 rounded-lg object-cover max-lg:h-16 lg:h-[100px]"
        />
      </div>
      <FieldCard full label={panel.fields[0].label} value={panel.fields[0].value} />
    </>
  ),
];

function JourneyStep({ number, title, description, reverse, children }) {
  // Animation direction always matches which side of the DOM order the
  // block visually sits on (left-positioned block -> "left", right -> "right"),
  // consistent with the Reveal usage elsewhere in the app.
  const textBlock = (
    <Reveal
      direction={reverse ? "right" : "left"}
      className="flex w-[560px] max-w-full flex-col items-start gap-6"
    >
      <span className="font-display text-[56px] font-extrabold leading-none text-line max-lg:text-4xl">
        {number}
      </span>
      <h3 className="font-display text-[32px] font-extrabold leading-[1.15] text-black max-lg:text-2xl">
        {title}
      </h3>
      <p className="text-base leading-[1.6] text-muted">{description}</p>
    </Reveal>
  );

  const panelBlock = (
    <Reveal
      direction={reverse ? "left" : "right"}
      delay={0.1}
      whileHover={{ scale: 1.02 }}
      className="flex w-[640px] max-w-full flex-col items-start gap-4"
    >
      {children}
    </Reveal>
  );

  return (
    <div className="flex w-full flex-wrap items-center gap-20 max-lg:gap-10">
      {reverse ? (
        <>
          {panelBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {panelBlock}
        </>
      )}
    </div>
  );
}

export default function JourneySteps() {
  const { t } = useTranslation("howItWorks");
  const steps = t("steps", { returnObjects: true }) ?? [];

  return (
    <section className="flex w-full flex-col items-center bg-surface-2 py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-[120px] px-20 max-lg:gap-16 max-lg:px-6">
        {steps.map((step, index) => (
          <JourneyStep
            key={step.number ?? index}
            number={step.number}
            title={step.title}
            description={step.description}
            reverse={index % 2 === 1}
          >
            {PANEL_RENDERERS[index]?.(step.panel)}
          </JourneyStep>
        ))}
      </div>
    </section>
  );
}
