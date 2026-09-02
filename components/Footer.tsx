import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pied">
      <div className="conteneur">
        <div className="pied-corps">
          <div className="pied-marque">
            <Link className="marque" href="/app">
              <Image
                className="logo-sombre"
                src="/logo-sombre.png"
                alt="Shefar"
                width={127}
                height={26}
              />
              <Image
                className="logo-clair"
                src="/logo-clair.png"
                alt="Shefar"
                width={127}
                height={26}
              />
            </Link>
            <p>Une lecture claire de votre performance digitale.</p>
          </div>

          <div className="pied-liens">
            <div className="pied-colonne">
              <h4>Produit</h4>
              <ul>
                <li>
                  <Link href="/app">Shefar Dashboard</Link>
                </li>
              </ul>
            </div>
            <div className="pied-colonne">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/privacy">Politique de confidentialite</Link>
                </li>
                <li>
                  <Link href="/terms">Conditions d&apos;utilisation</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pied-bas">© 2026 Shefar</div>
      </div>
    </footer>
  );
}
