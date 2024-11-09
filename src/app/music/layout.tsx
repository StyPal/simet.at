// app/music/layout.tsx or app/music/page.tsx

import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simet - Music",
  description: "My portfolio",
};

export default function MusicLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
