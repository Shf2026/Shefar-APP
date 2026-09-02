"use client";

const STORAGE_KEY = "shefar-theme";

function basculerTheme() {
  const html = document.documentElement;
  const actuel = html.getAttribute("data-theme") === "clair" ? "clair" : "sombre";
  const suivant = actuel === "clair" ? "sombre" : "clair";

  if (suivant === "clair") {
    html.setAttribute("data-theme", "clair");
  } else {
    html.removeAttribute("data-theme");
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, suivant);
  } catch {
    // localStorage indisponible (navigation privee) : le choix ne sera pas memorise
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      className="bascule-theme"
      aria-label="Basculer entre le theme clair et le theme sombre"
      onClick={basculerTheme}
    >
      <svg
        className="icone-soleil"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
      <svg
        className="icone-lune"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
