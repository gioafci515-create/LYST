// Motion tokens — sourced from the Figma "01 — Motion & Interaction System" spec.
// Philosophy: "Quiet. Precise. Human. Premium." Every animation confirms an
// action, directs attention, explains a state change, shows a spatial
// connection, or amplifies an emotional moment — never purely decorative.

export const EASE = [0.22, 1, 0.36, 1];

// Seconds, matched to the spec's named buckets.
export const DURATION = {
  instant: 0.11, // 100-120ms — hover, icon state, checkbox, small feedback
  fast: 0.17, // 160-180ms — buttons, links, navigation, inputs, dropdown states
  standard: 0.24, // 220-260ms — cards, tabs, filters, accordions, modal opening
  editorial: 0.45, // 380-480ms — page transitions, image reveals, hero content
};

// Exact per-component timings called out in the spec.
export const TIMING = {
  buttonPrimaryHover: 0.16,
  buttonPrimaryPressed: 0.1,
  buttonPrimaryLoading: 0.22,
  buttonSecondaryHover: 0.18,
  textLinkArrowHover: 0.16,
  textLinkUnderlineHover: 0.16,
  navLinkHover: 0.18,
  toggle: 0.16,
  invitationCardHover: 0.24,
  accordionExpand: 0.22,
  modalOpen: 0.24,
  dropdownOpen: 0.16,
  checkbox: 0.16,
};

// transition presets, ready to spread into framer-motion's `transition` prop
export const transition = (seconds) => ({ duration: seconds, ease: EASE });

export const hoverTap = (hoverSeconds = TIMING.buttonPrimaryHover, pressedSeconds = TIMING.buttonPrimaryPressed) => ({
  whileTapTransition: transition(pressedSeconds),
  whileHoverTransition: transition(hoverSeconds),
});
