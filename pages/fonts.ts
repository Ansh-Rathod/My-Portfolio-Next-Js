import localFont from "next/font/local";

// Configure SpaceMono as the only font
export default localFont({
  src: "../public/fonts/SpaceMono-Regular.ttf",
  variable: "--font-space-mono",
  display: "swap",
});
