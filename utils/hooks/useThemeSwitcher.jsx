"use client";

import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkScheme = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  const setDataThemeAttr = (theme) => {
    return document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const mediaScheme = window.matchMedia(preferDarkScheme);
    const userPreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          setDataThemeAttr("dark");
        } else {
          setDataThemeAttr("light");
        }
      } else {
        let check = mediaScheme.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          setDataThemeAttr("dark");
        } else {
          setDataThemeAttr("light");
        }
      }
    };

    handleChange();

    mediaScheme.addEventListener("change", handleChange);

    return () => mediaScheme.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const storeMode = (theme) => {
      if (!theme) return;
      window.localStorage.setItem("theme", theme);
      setDataThemeAttr(theme);
    };

    if (mode === "dark") {
      storeMode("dark");
    } else {
      storeMode("light");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
