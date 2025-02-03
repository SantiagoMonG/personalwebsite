"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents rendering until the client has mounted to avoid hydration issues
  if (!mounted) return <>{children}</>;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}