export const categoryColors = {
  checkout: "#1c8fe0",
  navigation: "#123c7a",
  marketing: "#2a5db0",
  b2b: "#0b2a52",
  marketplace: "#4fb0e8",
  loyalty: "#5b7fbf",
};

// Lighter stand-ins used only for pastel background tints — the real
// category colors are too dark (e.g. b2b) to read as blue once mixed
// at low opacity, they just look gray.
const pastelColors = {
  checkout: "#1c8fe0",
  navigation: "#3a7fd6",
  marketing: "#2a5db0",
  b2b: "#3f6fb0",
  marketplace: "#4fb0e8",
  loyalty: "#5b7fbf",
};

export function tileColor(categoryId) {
  return categoryColors[categoryId] || "#4b5c77";
}

export function pastelTint(categoryId) {
  return pastelColors[categoryId] || tileColor(categoryId);
}
