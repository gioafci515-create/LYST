// Small inline icon set for the create-wizard flow.
// Hand-drawn approximations (not the exact Figma vector data, which wasn't
// extractable as path geometry) in a lucide-style 20x20 stroke grid so they
// read consistently with the rest of the product's line-icon language.

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function BellIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 2.5a5 5 0 0 0-5 5c0 4.8-1.7 6-1.7 6h13.4s-1.7-1.2-1.7-6a5 5 0 0 0-5-5Z" />
      <path d="M8.3 16.5a1.7 1.7 0 0 0 3.4 0" />
    </svg>
  );
}

export function CakeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 17V11a1.5 1.5 0 0 1 1.5-1.5h10A1.5 1.5 0 0 1 16.5 11v6" />
      <path d="M3.5 17h13" />
      <path d="M3.5 13.5c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0 2-.8 3 0" />
      <path d="M10 9.5V6.5" />
      <path d="M10 6.5c1 0 1.4-.7.8-1.6L10 3.5l-.8 1.4c-.6.9-.2 1.6.8 1.6Z" />
    </svg>
  );
}

export function WineOffIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h8l-.9 6.2a3.1 3.1 0 0 1-6.2 0L6 3Z" />
      <path d="M10 12.5V17" />
      <path d="M7 17h6" />
      <path d="M3 3l14 14" />
    </svg>
  );
}

export function BriefcaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7" width="14" height="9" rx="1.2" />
      <path d="M7.2 7V5.3A1.3 1.3 0 0 1 8.5 4h3a1.3 1.3 0 0 1 1.3 1.3V7" />
      <path d="M3 11.5h14" />
    </svg>
  );
}

export function HeartHandshakeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 17.2S2.8 13 2.8 8a3.8 3.8 0 0 1 6.5-2.7L10 6l.7-.7A3.8 3.8 0 0 1 17.2 8c0 5-7.2 9.2-7.2 9.2Z" />
    </svg>
  );
}

export function MoreHorizontalIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="4.2" cy="10" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="10" cy="10" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="15.8" cy="10" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M1.5 5.2 4 7.7l4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckCircleIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <path d="M2 9.3 6.4 14 16 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XCircleIcon(props) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <circle cx="7" cy="7" r="5.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 4v3.2l2.2 1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M7 12.8s4.2-3.8 4.2-7.3A4.2 4.2 0 0 0 2.8 5.5c0 3.5 4.2 7.3 4.2 7.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="5.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function LinkIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6.7 9.3a3 3 0 0 0 4.3.2l2-2a3 3 0 0 0-4.2-4.2l-1.1 1.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 6.7a3 3 0 0 0-4.3-.2l-2 2a3 3 0 0 0 4.2 4.2l1.1-1.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
