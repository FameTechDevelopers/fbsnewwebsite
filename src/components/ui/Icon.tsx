// Lightweight inline icon set (no extra packages needed).
const paths = {
  mobile: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 17h2",
  code: "m8 9-4 3 4 3m8-6 4 3-4 3M14 5l-4 14",
  cart: "M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2M10 21h.01M17 21h.01",
  pen: "M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z",
  megaphone: "M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1Zm13-3a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14",
  search: "m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
  heart: "M12 20s-7-4.4-9.2-8.7C1.3 8.2 3.2 4.5 6.7 4.5c2 0 3.4 1.1 4.3 2.5.9-1.4 2.3-2.5 4.3-2.5 3.5 0 5.4 3.7 3.9 6.8C19 15.6 12 20 12 20Z",
  diamond: "M6 3h12l4 6-10 12L2 9l4-6Zm-4 6h20M12 21 8 9l4-6 4 6-4 12",
  cube: "m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5m-9 5L3 7m9 5v10",
  play: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-2-14 6 4-6 4V8Z",
  layers: "m12 2 10 5-10 5L2 7l10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5",
  doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 0v6h6M8 13h8M8 17h5",
  cloud: "M17.5 19H7a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 11 4 4 0 0 1 17.5 19Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4",
  sparkles: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 2l.6 1.4L7 4l-1.4.6L5 6l-.6-1.4L3 4l1.4-.6L5 2Z",
  bot: "M12 8V4H8m-4 8h16a0 0 0 0 1 0 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Zm0 0a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M2 14h2m16 0h2M9 15v1m6-1v1",
  briefcase: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1m-9 0h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm-2 6h18",
  graduation: "M22 10 12 5 2 10l10 5 10-5Zm-16 2v5c3 2 9 2 12 0v-5m4-2v6",
  workflow: "M4 4h6v6H4V4Zm10 10h6v6h-6v-6ZM7 10v4a3 3 0 0 0 3 3h4M17 14v-4a3 3 0 0 0-3-3h-4",
  building: "M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16m0-10h2a2 2 0 0 1 2 2v8M9 7h2M9 11h2M9 15h2",
  scale: "M12 3v18m-7 0h14M5 7h14M7 7l-3 7a3 3 0 0 0 6 0L7 7Zm10 0-3 7a3 3 0 0 0 6 0l-3-7ZM12 3l-1.5 2h3L12 3Z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  check: "m5 12 5 5L20 7",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6",
  pin: "M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-15v5l3 3",
  plus: "M12 5v14M5 12h14",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z",
  quote: "M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6",
  rocket: "M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2m6-9a2 2 0 1 0 0-.01M9 12l3 3m-5.5.5L4 13l3-1 6-7c2-2 6-2 7-2 0 1 0 5-2 7l-7 6-1 3-2.5-2.5",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  chart: "M3 3v18h18M7 15l4-4 3 3 6-6",
  whatsapp: "M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6L3 21Zm6-12c0 4 2 6 6 6l1.3-1.5-2-1-1 .8c-1.2-.5-2.1-1.4-2.6-2.6l.8-1-1-2L9 9Z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
