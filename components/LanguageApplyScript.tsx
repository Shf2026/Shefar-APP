"use client";

import { useEffect } from "react";

export default function LanguageApplyScript() {
  useEffect(() => {
    if (document.documentElement.getAttribute("data-lang") !== "fr") return;
    document.querySelectorAll<HTMLElement>("[data-fr]").forEach((el) => {
      if (!el.hasAttribute("data-en")) {
        el.setAttribute("data-en", el.textContent || "");
      }
      el.textContent = el.getAttribute("data-fr") || "";
    });
  }, []);

  return null;
}
