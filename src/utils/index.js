export const darkenHexColor = (hex, percent) => {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Parse hex to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Darken each RGB component by percentage
  r = Math.floor((r * (100 - percent)) / 100);
  g = Math.floor((g * (100 - percent)) / 100);
  b = Math.floor((b * (100 - percent)) / 100);

  // Ensure values are within valid RGB range
  r = r < 0 ? 0 : r > 255 ? 255 : r;
  g = g < 0 ? 0 : g > 255 ? 255 : g;
  b = b < 0 ? 0 : b > 255 ? 255 : b;

  // Convert RGB to hex
  const darkerHex =
    "#" + (r * 65536 + g * 256 + b).toString(16).padStart(6, "0");

  return darkerHex;
};

export const lightenHexColor = (hex, percent) => {
  // Remove the # if it's there
  hex = hex.replace(/^#/, "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the lighter color
  const newR = Math.min(255, Math.round(r + ((255 - r) * percent) / 100));
  const newG = Math.min(255, Math.round(g + ((255 - g) * percent) / 100));
  const newB = Math.min(255, Math.round(b + ((255 - b) * percent) / 100));

  // Convert the new RGB values back to hex
  const lighterHex =
    "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1);

  return lighterHex;
};
