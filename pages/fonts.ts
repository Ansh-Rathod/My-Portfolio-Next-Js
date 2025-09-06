import localFont from "next/font/local";

// Configure SpaceMono as the only font
export const spaceMono = localFont({
  src: "../public/fonts/SpaceMono-Regular.ttf",
  variable: "--font-space-mono",
  display: "swap",
});
