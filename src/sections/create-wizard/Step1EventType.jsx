import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  BellIcon,
  CakeIcon,
  WineOffIcon,
  BriefcaseIcon,
  HeartHandshakeIcon,
  MoreHorizontalIcon,
} from "./icons";

const TYPES = [
  { id: "wedding", Icon: BellIcon },
  { id: "birthday", Icon: CakeIcon },
  { id: "dinner", Icon: WineOffIcon },
  { id: "corporate", Icon: BriefcaseIcon },
  { id: "charity", Icon: HeartHandshakeIcon },
  { id: "other", Icon: MoreHorizontalIcon },
];

export default function Step1EventType({ data, updateData }) {
  const { t } = useTranslation("createWizard");

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[13px] font-bold text-muted-2">{t("step1.eyebrow")}</p>
      <h1 className="font-display text-4xl font-extrabold text-black md:text-[40px]">{t("step1.title")}</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TYPES.map(({ id, Icon }) => {
          const selected = data.eventType === id;
          return (
            <motion.button
              key={id}
              type="button"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => updateData({ eventType: id })}
              aria-pressed={selected}
              className={`flex items-center gap-4 rounded-xl border p-6 text-left transition-colors ${
                selected ? "border-2 border-black bg-white p-[23px]" : "border-line bg-surface hover:border-ink-soft"
              }`}
            >
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
                  selected ? "bg-black text-white" : "border border-line bg-white text-black"
                }`}
              >
                <Icon />
              </span>
              <span className="text-base font-bold text-black">{t(`step1.types.${id}`)}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export function isStep1Valid(data) {
  return Boolean(data.eventType);
}
