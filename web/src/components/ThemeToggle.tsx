"use client";
import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  try {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function ThemeToggle(){
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  useEffect(() => {
    if (!theme) return;
    try {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      // Update theme-color meta for mobile browsers
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", theme === "light" ? "#ffffff" : "#0b0f19");
    } catch {}
  }, [theme]);

  if (!theme) return null;

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      title="Toggle theme"
      className="btn btn-outline h-10 px-3 text-sm"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
