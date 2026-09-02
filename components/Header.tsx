import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="entete">
      <div className="conteneur entete-corps">
        <Link className="marque" href="/app">
          <Image src="/logo.png" alt="Shefar" width={127} height={26} priority />
        </Link>
        <nav className="entete-liens">
          <Link className="lien-masquable" href="/app">
            Shefar Dashboard
          </Link>
          <Link href="/privacy">Confidentialite</Link>
          <Link href="/terms">Conditions</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
