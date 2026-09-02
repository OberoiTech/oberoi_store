// Drop a file into the matching folder and it shows up automatically —
// no code changes needed. The filename (without extension) must match
// the product `id` or platform `id` from src/data/products.js.
//
//   src/assets/Images/products/one-step-checkout.jpg   -> product id "one-step-checkout"
//   src/assets/Images/platforms/woocommerce.jpg         -> platform id "woocommerce"
//
// Supported extensions: jpg, jpeg, png, webp

const productModules = import.meta.glob("../assets/Images/products/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const platformModules = import.meta.glob("../assets/Images/platforms/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

function buildMap(modules) {
  const map = {};
  for (const path in modules) {
    const filename = path.split("/").pop();
    const key = filename.replace(/\.[^.]+$/, "");
    map[key] = modules[path];
  }
  return map;
}

export const productImages = buildMap(productModules);
export const platformImages = buildMap(platformModules);
