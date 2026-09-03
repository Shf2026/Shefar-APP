import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomeContent() {
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
              Shefar Dashboard est une application web de pilotage de la
              performance digitale destinee aux entreprises. Elle permet de
              connecter de maniere securisee plusieurs services Google,
              notamment Google Ads et Google Business Profile, afin de
              recuperer uniquement les donnees autorisees par
              l&apos;utilisateur via les API Google et de les centraliser
              dans une interface unique.
            </p>
            <p className="introduction">
              L&apos;application permet ensuite de suivre les principaux
              indicateurs de performance : campagnes publicitaires, budgets,
              impressions, clics, couts, conversions, taux de conversion,
              donnees de visibilite locale et informations liees aux
              etablissements Google Business Profile. Ces donnees sont
              organisees dans des tableaux de bord lisibles afin de faciliter
              le suivi des performances et la comprehension de leur
              evolution.
            </p>
            <p className="introduction">
              L&apos;objectif de Shefar Dashboard est de transformer des
              donnees dispersees entre plusieurs plateformes Google en une
              vision claire et exploitable. L&apos;utilisateur peut ainsi
              identifier plus rapidement les variations importantes, les
              points de vigilance, les opportunites et les actions a
              prioriser pour mieux piloter sa performance digitale.
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
              <p className="surtitre">Integrations</p>
              <h2>Connectez vos services Google a Shefar Dashboard</h2>
              <p>
                Centralisez Google Ads, Google Analytics, Google Search
                Console, Google Business Profile, PageSpeed Insights et
                Chrome UX Report dans une seule interface de pilotage.
              </p>
            </div>

            <div className="grille">
              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/ads.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Ads</h3>
                <p>
                  Shefar Dashboard se connecte a Google Ads afin de
                  centraliser les donnees des comptes et campagnes autorises
                  par l&apos;utilisateur : campagnes, budgets, impressions,
                  clics, couts, conversions, taux de conversion et autres KPI
                  publicitaires disponibles via les API Google.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/googleanalytics.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Analytics</h3>
                <p>
                  La connexion a Google Analytics permet de centraliser les
                  principaux indicateurs lies a l&apos;utilisation et aux
                  performances du site internet : audience, sources
                  d&apos;acquisition, sessions, evenements, conversions et
                  evolution des comportements observes sur le site.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/googlesearchconsole.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Search Console</h3>
                <p>
                  Shefar Dashboard utilise les donnees autorisees de Google
                  Search Console pour suivre la visibilite dans les resultats
                  de recherche Google : clics organiques, impressions,
                  requetes, pages, positions moyennes et taux de clic.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/googlemybysiness.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Business Profile</h3>
                <p>
                  La connexion a Google Business Profile permet de
                  centraliser les informations relatives aux etablissements
                  de l&apos;entreprise et a leur visibilite locale : fiches,
                  informations publiques et indicateurs de performance
                  disponibles.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/Pagespeed.svg" alt="" width={22} height={22} />
                </span>
                <h3>PageSpeed Insights &amp; Chrome UX Report</h3>
                <p>
                  Shefar Dashboard complete les donnees marketing avec des
                  indicateurs techniques provenant de Google PageSpeed
                  Insights et du Chrome UX Report (CrUX) : vitesse,
                  performance des pages, experience utilisateur et Core Web
                  Vitals (LCP, INP, CLS).
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="connexion">
          <div className="conteneur texte-etroit legal">
            <article>
              <h2>Etape 1 — Connectez vos comptes et services Google</h2>
              <h3>Connectez votre entreprise a Shefar Dashboard</h3>
              <p>
                Shefar Dashboard permet a l&apos;utilisateur de connecter les
                comptes Google necessaires au fonctionnement des differents
                modules de l&apos;application. La connexion est realisee via
                Google OAuth 2.0, le protocole d&apos;autorisation de Google.
              </p>
              <p>Lorsque vous choisissez de connecter un service Google, vous etes redirige vers Google afin de :</p>
              <ul>
                <li>selectionner votre compte Google ;</li>
                <li>identifier les comptes ou etablissements auxquels vous souhaitez donner acces ;</li>
                <li>consulter les autorisations demandees par Shefar Dashboard ;</li>
                <li>accepter ou refuser ces autorisations.</li>
              </ul>
              <p>
                <strong>
                  Shefar Dashboard ne demande, ne collecte et ne stocke
                  jamais votre mot de passe Google.
                </strong>{" "}
                L&apos;acces aux donnees est realise a l&apos;aide des
                autorisations OAuth accordees directement par
                l&apos;utilisateur.
              </p>

              <h3>Google Ads</h3>
              <p>
                La connexion a Google Ads permet a Shefar Dashboard de
                recuperer les donnees necessaires au suivi de vos campagnes
                publicitaires. Selon les donnees disponibles sur votre compte
                et les fonctionnalites activees, Shefar Dashboard peut
                notamment centraliser :
              </p>
              <ul>
                <li>les comptes Google Ads connectes ;</li>
                <li>les campagnes ;</li>
                <li>les budgets publicitaires ;</li>
                <li>les impressions ;</li>
                <li>les clics ;</li>
                <li>les couts ;</li>
                <li>les conversions ;</li>
                <li>les taux de conversion ;</li>
                <li>le cout par conversion ;</li>
                <li>les performances des campagnes ;</li>
                <li>l&apos;evolution des principaux indicateurs dans le temps.</li>
              </ul>
              <p>
                Ces informations permettent a l&apos;utilisateur de retrouver
                ses principaux KPI Google Ads dans son tableau de bord Shefar
                Dashboard et de suivre plus facilement l&apos;evolution de
                ses investissements publicitaires.
              </p>

              <h3>Google Business Profile</h3>
              <p>
                La connexion a Google Business Profile permet de centraliser
                les informations relatives aux etablissements et a leur
                presence locale sur Google. Selon les donnees disponibles et
                les modules utilises, Shefar Dashboard peut notamment
                exploiter les informations necessaires pour afficher :
              </p>
              <ul>
                <li>les etablissements associes au compte ;</li>
                <li>les informations de la fiche etablissement ;</li>
                <li>les donnees liees a la visibilite locale ;</li>
                <li>les performances disponibles pour les etablissements ;</li>
                <li>les principaux signaux permettant de suivre l&apos;evolution de la presence locale.</li>
              </ul>
              <p>
                Shefar Dashboard permet ainsi aux entreprises disposant
                d&apos;un ou plusieurs etablissements de retrouver leurs
                informations locales dans le meme environnement que leurs
                autres indicateurs digitaux.
              </p>

              <h3>Donnees techniques du site</h3>
              <p>
                Shefar Dashboard peut egalement integrer des donnees
                techniques permettant d&apos;evaluer les performances
                d&apos;un site internet, notamment via Google PageSpeed
                Insights, afin de mesurer :
              </p>
              <ul>
                <li>la performance des pages ;</li>
                <li>la vitesse de chargement ;</li>
                <li>l&apos;experience utilisateur ;</li>
                <li>les Core Web Vitals et autres metriques techniques disponibles ;</li>
                <li>les elements techniques pouvant necessiter une optimisation.</li>
              </ul>
              <p>
                Ces donnees viennent completer les informations marketing
                afin de fournir une vision plus globale de la performance
                digitale.
              </p>

              <h3>Pourquoi Shefar Dashboard demande un acces Google</h3>
              <p>
                Les autorisations Google demandees par Shefar Dashboard
                servent exclusivement a permettre les fonctionnalites
                activees par l&apos;utilisateur. Elles peuvent notamment etre
                necessaires pour :
              </p>
              <ul>
                <li>identifier le compte connecte ;</li>
                <li>recuperer les comptes accessibles par l&apos;utilisateur ;</li>
                <li>afficher les donnees Google Ads ;</li>
                <li>afficher les donnees Google Business Profile ;</li>
                <li>centraliser les indicateurs dans le dashboard ;</li>
                <li>actualiser les donnees lorsque l&apos;utilisateur consulte son espace.</li>
              </ul>
              <p>
                Shefar Dashboard n&apos;accede qu&apos;aux donnees
                correspondant aux autorisations accordees par
                l&apos;utilisateur. L&apos;utilisateur peut revoquer
                l&apos;acces a son compte Google a tout moment depuis les
                parametres de securite de son compte Google.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="pilotage">
          <div className="conteneur texte-etroit legal">
            <article>
              <h2>Etape 2 — Centralisez, analysez et pilotez vos performances</h2>
              <h3>Un tableau de bord unique pour vos donnees digitales</h3>
              <p>
                Une fois les services connectes, Shefar Dashboard centralise
                les donnees provenant des differentes sources afin de les
                rendre plus simples a consulter et a comparer. Le tableau de
                bord peut ainsi reunir dans un meme environnement :
              </p>
              <ul>
                <li>donnees Google Ads ;</li>
                <li>donnees Google Business Profile ;</li>
                <li>performances du site internet ;</li>
                <li>indicateurs de visibilite ;</li>
                <li>evolution des performances ;</li>
                <li>alertes ;</li>
                <li>opportunites ;</li>
                <li>priorites identifiees.</li>
              </ul>

              <h3>Suivez vos KPI Google Ads</h3>
              <p>
                Shefar Dashboard permet de suivre les principaux indicateurs
                de vos campagnes Google Ads sans devoir analyser chaque
                campagne separement dans plusieurs ecrans : depenses
                publicitaires, clics, impressions, conversions, couts par
                conversion, taux de conversion et autres indicateurs
                disponibles dans les comptes connectes.
              </p>

              <h3>Suivez votre visibilite locale</h3>
              <p>
                Pour les entreprises disposant d&apos;etablissements
                physiques, Shefar Dashboard permet de centraliser les
                informations provenant de Google Business Profile et de
                rapprocher les donnees de visibilite locale des autres
                indicateurs digitaux de l&apos;entreprise.
              </p>

              <h3>Analysez les performances du site</h3>
              <p>
                Les informations techniques peuvent etre regroupees avec les
                donnees marketing afin d&apos;aider l&apos;utilisateur a
                comprendre si certaines performances digitales peuvent etre
                affectees par l&apos;experience proposee sur le site.
              </p>

              <h3>Identifiez les variations importantes</h3>
              <p>
                Shefar Dashboard ne se limite pas a afficher des chiffres.
                L&apos;application organise les donnees afin de faciliter
                l&apos;identification des changements importants :
              </p>
              <ul>
                <li>une hausse ou une baisse des conversions ;</li>
                <li>une evolution du cout publicitaire ;</li>
                <li>une variation de la visibilite ;</li>
                <li>une evolution des performances d&apos;un etablissement ;</li>
                <li>une degradation d&apos;un indicateur technique ;</li>
                <li>un changement necessitant une verification.</li>
              </ul>

              <h3>Identifiez vos priorites</h3>
              <p>Shefar Dashboard rassemble les informations necessaires pour permettre a l&apos;entreprise de distinguer :</p>
              <ul>
                <li>ce qui fonctionne ;</li>
                <li>ce qui evolue ;</li>
                <li>ce qui necessite une analyse ;</li>
                <li>ce qui peut etre optimise ;</li>
                <li>ce qui doit etre traite en priorite.</li>
              </ul>
            </article>
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
                  <span>Retrouvez toutes vos fiches et leurs informations au meme endroit.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>Performance locale</b>
                  <span>Suivez votre visibilite et vos indicateurs sur chaque etablissement.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>Suivi centralise</b>
                  <span>Une seule vue pour l&apos;ensemble de vos points de presence.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="fonctionnement">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre">Fonctionnement</p>
              <h2>Une application concue pour centraliser les donnees Google de votre entreprise</h2>
              <p>
                Shefar Dashboard repond a un besoin concret : eviter que les
                donnees importantes d&apos;une entreprise restent dispersees
                entre Google Ads, Google Business Profile, les outils de
                performance du site et differentes interfaces de reporting.
              </p>
            </div>
            <div className="arguments">
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>1. Connectez vos services Google</b>
                  <span>L&apos;utilisateur connecte les services qu&apos;il souhaite utiliser.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>2. Recuperation des donnees autorisees</b>
                  <span>Shefar Dashboard recupere les donnees autorisees via les API correspondantes.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>3. Centralisation dans votre espace</b>
                  <span>Les indicateurs sont organises et affiches dans votre tableau de bord.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>4. Suivi et priorisation</b>
                  <span>Vous suivez vos performances et identifiez vos priorites.</span>
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
                moment depuis leur compte Google. Vous pouvez revoquer les
                autorisations Google accordees a Shefar Dashboard et demander
                la suppression de vos donnees conformement a notre politique
                de confidentialite.
              </p>
              <div className="ouverture-actions">
                <a className="bouton bouton-contour" href="/privacy">
                  Consulter la Politique de confidentialite
                </a>
                <a className="bouton bouton-contour" href="/terms">
                  Consulter les Conditions d&apos;utilisation
                </a>
              </div>
              <p>
                Contact :{" "}
                <a href="mailto:support@shefar.fr">support@shefar.fr</a>
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre">Integrations</p>
              <h2>Services pris en charge</h2>
              <p>Chaque connexion est initiee par l&apos;utilisateur et peut etre retiree a tout moment.</p>
            </div>
            <div className="integrations">
              <span className="integration">
                <Image className="integration-logo" src="/ads.svg" alt="" width={16} height={16} />
                Google Ads
              </span>
              <span className="integration">
                <Image className="integration-logo" src="/googleanalytics.svg" alt="" width={16} height={16} />
                Google Analytics
              </span>
              <span className="integration">
                <Image className="integration-logo" src="/googlesearchconsole.svg" alt="" width={16} height={16} />
                Google Search Console
              </span>
              <span className="integration">
                <Image className="integration-logo" src="/googlemybysiness.svg" alt="" width={16} height={16} />
                Google Business Profile
              </span>
              <span className="integration">
                <Image className="integration-logo" src="/Pagespeed.svg" alt="" width={16} height={16} />
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
