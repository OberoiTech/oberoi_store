const paths = {
  cart: "M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-1.5 3H17M10 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9 2-4.35-4.35",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  star: "M12 2.8 14.9 8.7 21.4 9.6 16.7 14.2 17.8 20.7 12 17.6 6.2 20.7 7.3 14.2 2.6 9.6 9.1 8.7 12 2.8Z",
  chevron: "m6 9 6 6 6-6",
  trash: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6",
  arrowRight: "M4 12h16M13 5l7 7-7 7",
  check: "m5 13 4 4L19 7",
  megaphone: "M3 10v4h4l6 4V6l-6 4H3Zm14-2a5 5 0 0 1 0 8",
  briefcase: "M3 8h18v11H3V8Zm5 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  store: "M4 9v10h16V9M2 5h20l-2 4H4L2 5Zm6 4v10M16 9v10",
  heart: "M12 20s-7-4.4-9.5-8.8C.7 8 2.2 4.5 5.6 4.1 8 3.8 10 5 12 7c2-2 4-3.2 6.4-2.9 3.4.4 4.9 3.9 3.1 7.1C19 15.6 12 20 12 20Z",
  minus: "M5 12h14",
  plus: "M12 5v14M5 12h14",
  shield: "M12 3 4 6v6c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V6l-8-3Z",
  truck: "M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6ZM6.5 19a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm11 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  lock: "M6 11V8a6 6 0 0 1 12 0v3M5 11h14v10H5V11Zm7 4v3",
  mobile: "M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm5 16h.01",
};

export default function Icon({ name, size = 18, strokeWidth = 1.8, className = "" }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
