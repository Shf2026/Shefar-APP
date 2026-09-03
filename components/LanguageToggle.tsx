"use client";

const STORAGE_KEY = "shefar-lang";

function basculerLangue() {
  const html = document.documentElement;
  const actuel = html.getAttribute("data-lang") === "fr" ? "fr" : "en";
  const suivant = actuel === "fr" ? "en" : "fr";

  document.querySelectorAll<HTMLElement>("[data-fr]").forEach((el) => {
    if (suivant === "fr") {
      if (!el.hasAttribute("data-en")) {
        el.setAttribute("data-en", el.textContent || "");
      }
      el.textContent = el.getAttribute("data-fr") || "";
    } else {
      el.textContent = el.getAttribute("data-en") || el.textContent || "";
    }
  });

  if (suivant === "fr") {
    html.setAttribute("data-lang", "fr");
  } else {
    html.removeAttribute("data-lang");
  }
  html.lang = suivant;

  try {
    window.localStorage.setItem(STORAGE_KEY, suivant);
  } catch {
    // localStorage unavailable (private browsing): choice will not be remembered
  }
}

export default function LanguageToggle() {
  return (
    <button
      type="button"
      className="bascule-langue"
      aria-label="Switch language / Changer de langue"
      onClick={basculerLangue}
      data-fr="EN"
    >
      FR
    </button>
  );
}
