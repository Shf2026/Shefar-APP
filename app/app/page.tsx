import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/app",
  },
  openGraph: {
    url: "/app",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="ouverture">
          <div className="conteneur">
            <span className="etiquette">Shefar Dashboard</span>
            <h1>Shefar Dashboard</h1>
            <p className="accroche">
              Pilotez votre performance digitale depuis un seul espace.
            </p>
            <p className="introduction">
              Shefar Dashboard centralise les donnees essentielles de votre
              presence digitale afin de rendre vos performances plus lisibles
              et vos decisions plus simples.
            </p>
            <p className="introduction">
              Connectez les services que vous utilisez deja et retrouvez vos
              donnees Google Ads, Analytics, Search Console et Google Business
              Profile dans une interface unique.
            </p>
            <div className="ouverture-actions">
              <a className="bouton bouton-plein" href="#">
                Acceder au Dashboard
              </a>
              <a className="bouton bouton-contour" href="#produits">
                Voir les fonctionnalites
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="produits">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre">Fonctionnalites</p>
              <h2>Vos donnees, rassemblees</h2>
              <p>
                Chaque service connecte alimente une vue d&apos;ensemble
                unique. Plus besoin de passer d&apos;un outil a l&apos;autre
                pour comprendre ce qui fonctionne.
              </p>
            </div>

            <div className="grille">
              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/ads.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Ads</h3>
                <p>
                  Consultez vos campagnes, budgets, couts, conversions et
                  principaux indicateurs de performance.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image
                    src="/googlemybysiness.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </span>
                <h3>Shefar.Local</h3>
                <p>
                  Connectez votre Google Business Profile pour suivre vos
                  etablissements, leur visibilite et leurs performances
                  locales.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image
                    src="/googleanalytics.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </span>
                <h3>Analytics &amp; Search</h3>
                <p>
                  Centralisez les donnees essentielles issues de Google
                  Analytics et Google Search Console.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/Pagespeed.svg" alt="" width={22} height={22} />
                </span>
                <h3>Performance Web</h3>
                <p>
                  Suivez les principaux indicateurs de performance technique
                  et Core Web Vitals.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="conteneur deux-colonnes">
            <div>
              <p className="surtitre">Shefar.Local</p>
              <h2>Votre presence locale, enfin lisible.</h2>
              <p>
                Shefar.Local permet aux entreprises de connecter leurs propres
                etablissements Google Business Profile afin de suivre leurs
                informations, leur visibilite et leurs indicateurs de
                performance depuis le Dashboard Shefar.
              </p>
            </div>

            <div className="arguments">
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>Etablissements</b>
                  <span>
                    Retrouvez toutes vos fiches et leurs informations au meme
                    endroit.
                  </span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>Performance locale</b>
                  <span>
                    Suivez votre visibilite et vos indicateurs sur chaque
                    etablissement.
                  </span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>Suivi centralise</b>
                  <span>
                    Une seule vue pour l&apos;ensemble de vos points de
                    presence.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="securite">
          <div className="conteneur">
            <div className="encadre">
              <h3>Vous gardez le controle de vos comptes Google.</h3>
              <p>
                Shefar utilise OAuth 2.0 pour permettre aux utilisateurs de
                connecter leurs propres services Google. L&apos;acces est
                limite aux donnees necessaires aux fonctionnalites activees
                par l&apos;utilisateur.
              </p>
              <p>
                Shefar ne demande jamais le mot de passe Google des
                utilisateurs. Les autorisations peuvent etre revoquees a tout
                moment depuis leur compte Google.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre">Integrations</p>
              <h2>Services pris en charge</h2>
              <p>
                Chaque connexion est initiee par l&apos;utilisateur et peut
                etre retiree a tout moment.
              </p>
            </div>

            <div className="integrations">
              <span className="integration">
                <Image
                  className="integration-logo"
                  src="/ads.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                Google Ads
              </span>
              <span className="integration">
                <Image
                  className="integration-logo"
                  src="/googleanalytics.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                Google Analytics
              </span>
              <span className="integration">
                <Image
                  className="integration-logo"
                  src="/googlesearchconsole.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                Google Search Console
              </span>
              <span className="integration">
                <Image
                  className="integration-logo"
                  src="/googlemybysiness.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                Google Business Profile
              </span>
              <span className="integration">
                <Image
                  className="integration-logo"
                  src="/Pagespeed.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                PageSpeed Insights
              </span>
              <span className="integration">
                <span className="integration-point"></span>Chrome UX Report
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
