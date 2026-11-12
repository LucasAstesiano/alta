import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALTA Trail Lab — El camino se dibuja paso a paso",
  description:
    "Equipamiento de trail running para tu próximo sendero. Diseño esencial, ajuste y movimiento desde Mendoza, Argentina.",
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
