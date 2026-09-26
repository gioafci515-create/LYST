export default function FormInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  success,
  className = "",
  ...props
}) {
  const inputId = id || label;

  return (
    <div className={`flex w-full flex-col items-start gap-2 ${disabled ? "opacity-50" : ""} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-semibold text-ink-soft">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full rounded-lg px-3.5 py-3 text-sm text-ink-soft outline-none transition-colors duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-muted disabled:cursor-not-allowed disabled:border-line disabled:bg-surface-2 ${
          error
            ? "border-[1.5px] border-[#d92e2e] bg-[#fff7f7]"
            : success
              ? "border-[1.5px] border-[#219657] bg-[#f7fff7]"
              : "border border-line bg-surface hover:border-[#bfbfbd] focus:border-2 focus:border-ink focus:bg-white"
        }`}
        {...props}
      />
      {error && <p className="text-xs text-[#d92e2e]">{error}</p>}
      {success && <p className="text-xs text-[#219657]">{success}</p>}
    </div>
  );
}
