import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

function CheckMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M16 0L5 16L0 8.72727" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Cell({ value }) {
  if (value === true) return <CheckMark />;
  if (value === false) return <span className="text-muted-2">-</span>;
  return <span className="text-ink-soft">{value}</span>;
}

export default function PricingComparison() {
  const { t } = useTranslation("pricing");
  const columns = t("comparison.columns", { returnObjects: true });
  const rows = t("comparison.rows", { returnObjects: true });

  return (
    <section className="flex w-full flex-col items-center bg-surface py-24 max-lg:py-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-12 px-20 max-lg:px-6">
        <Reveal direction="up" className="flex w-full flex-col items-start gap-12">
          <h2 className="font-display text-[36px] font-extrabold text-black">{t("comparison.heading")}</h2>

          <div className="w-full overflow-x-auto rounded-xl border border-line bg-white">
            <div className="min-w-[700px]">
              <div className="flex items-start gap-6 border-b border-line bg-surface p-5">
                <div className="flex-1 text-sm font-bold text-black">{t("comparison.featuresLabel")}</div>
                {columns.map((col) => (
                  <div key={col} className="w-[180px] shrink-0 text-center text-sm font-bold text-black">
                    {col}
                  </div>
                ))}
              </div>
              {rows.map((row) => (
                <div key={row.feature} className="flex items-start gap-6 border-b border-line p-5 last:border-b-0">
                  <div className="flex-1 text-sm leading-[1.5] text-ink-soft">{row.feature}</div>
                  {row.values.map((value, i) => (
                    <div key={i} className="flex w-[180px] shrink-0 items-center justify-center">
                      <Cell value={value} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
