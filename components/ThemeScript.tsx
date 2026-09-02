const SCRIPT = `
(function () {
  try {
    var theme = window.localStorage.getItem("shefar-theme");
    if (theme === "clair") {
      document.documentElement.setAttribute("data-theme", "clair");
    }
  } catch (e) {}
})();
`;

export default function ThemeScript() {
  // Script bloquant, pose avant le premier rendu, pour eviter un flash du
  // theme sombre par defaut avant application du choix memorise en localStorage.
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
