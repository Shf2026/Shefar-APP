const SCRIPT = `
(function () {
  try {
    var lang = window.localStorage.getItem("shefar-lang");
    if (lang === "fr") {
      document.documentElement.setAttribute("data-lang", "fr");
      document.documentElement.lang = "fr";
    }
  } catch (e) {}
})();
`;

export default function LanguageScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
