import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALTA Trail Lab — El camino se dibuja paso a paso",
  description:
    "Equipo esencial de trail running, diseñado en Patagonia para quienes encuentran su norte fuera del camino.",
  icons: {
    icon: "/alta-mark.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
