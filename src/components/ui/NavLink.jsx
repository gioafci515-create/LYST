import { motion } from "framer-motion";
import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({ to, label, className = "" }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-black focus-visible:outline-offset-2 ${
          isActive ? "font-semibold text-black" : "font-medium text-muted hover:text-black"
        } ${className}`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <motion.span
            initial={false}
            animate={{ scaleX: isActive ? 1 : 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
            className="h-[1.5px] w-20 rounded-full bg-black"
          />
        </>
      )}
    </RouterNavLink>
  );
}
