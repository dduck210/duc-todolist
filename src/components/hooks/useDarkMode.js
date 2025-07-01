import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [enabled, setEnabled] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", enabled);
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
