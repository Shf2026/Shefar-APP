import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="entete">
      <div className="conteneur entete-corps">
        <Link className="marque" href="/app">
          <Image
            className="logo-sombre"
            src="/logo-sombre.png"
            alt="Shefar"
            width={127}
            height={26}
            priority
          />
          <Image
            className="logo-clair"
            src="/logo-clair.png"
            alt="Shefar"
            width={127}
            height={26}
            priority
          />
        </Link>
        <nav className="entete-liens">
          <Link className="lien-masquable" href="/app">
            SHEFAR Dashboard
          </Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
