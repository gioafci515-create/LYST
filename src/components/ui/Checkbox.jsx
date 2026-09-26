export default function Checkbox({ checked, onChange, label, disabled = false, className = "" }) {
  return (
    <label
      className={`inline-flex items-center gap-2.5 ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"} ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        className="peer sr-only"
      />
      <span
        className={`relative size-5 shrink-0 overflow-hidden rounded transition-colors duration-150 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-dashed peer-focus-visible:outline-ink peer-focus-visible:outline-offset-2 ${
          checked ? "" : `border-[1.5px] ${disabled ? "border-[#d9d9d6]" : "border-[#bfbfbd]"}`
        }`}
      >
        {checked && <img src="/images/checkbox-check.svg" alt="" className="absolute inset-0 size-full" />}
      </span>
      {label && (
        <span className={`text-sm ${checked ? "font-medium text-ink" : disabled ? "text-[#bfbfbd]" : "text-muted"}`}>
          {label}
        </span>
      )}
    </label>
  );
}
