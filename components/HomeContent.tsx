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
            <span className="etiquette">SHEFAR Dashboard</span>
            <h1>SHEFAR Dashboard</h1>
            <p
              className="introduction"
              data-fr="SHEFAR Dashboard est une application web conçue pour aider les entreprises à gérer et à comprendre leur performance digitale. Elle permet aux utilisateurs de connecter en toute sécurité plusieurs services Google, notamment Google Ads et Google Business Profile, afin de récupérer uniquement les données autorisées par l'utilisateur via les API Google et de les centraliser au sein d'une seule interface."
            >
              SHEFAR Dashboard is a web application designed to help
              businesses manage and understand their digital performance. It
              allows users to securely connect several Google services,
              including Google Ads and Google Business Profile, in order to
              retrieve only the data authorized by the user through Google
              APIs and centralize it within a single interface.
            </p>
            <p
              className="introduction"
              data-fr="L'application permet aux entreprises de suivre leurs principaux indicateurs de performance, notamment les campagnes publicitaires, les budgets, les impressions, les clics, les coûts, les conversions, les taux de conversion, les données de visibilité locale et les informations associées aux établissements Google Business Profile. Ces données sont organisées dans des tableaux de bord clairs et accessibles afin de faciliter le suivi de la performance et d'aider les utilisateurs à comprendre l'évolution de leurs résultats dans le temps."
            >
              The application allows businesses to monitor their main
              performance indicators, including advertising campaigns,
              budgets, impressions, clicks, costs, conversions, conversion
              rates, local visibility data and information associated with
              Google Business Profile locations. These data are organized
              into clear and accessible dashboards to make performance
              monitoring easier and help users understand how their results
              evolve over time.
            </p>
            <p
              className="introduction"
              data-fr="L'objectif de SHEFAR Dashboard est de transformer des données réparties sur plusieurs plateformes Google en une vue claire et exploitable. Les utilisateurs peuvent ainsi identifier plus rapidement les changements importants, les points nécessitant une attention particulière, les opportunités et les actions prioritaires afin de gérer plus efficacement leur performance digitale."
            >
              The purpose of SHEFAR Dashboard is to transform data that is
              distributed across several Google platforms into a clear and
              actionable view. Users can therefore identify important
              changes, areas requiring attention, opportunities and priority
              actions more quickly in order to manage their digital
              performance more effectively.
            </p>
            <div className="ouverture-actions">
              <a className="bouton bouton-plein" href="#" data-fr="Accéder au Dashboard">
                Access the Dashboard
              </a>
              <a className="bouton bouton-contour" href="#produits" data-fr="Voir les fonctionnalités">
                View features
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="produits">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre" data-fr="Intégrations">
                Integrations
              </p>
              <h2 data-fr="Connectez vos services Google à SHEFAR Dashboard">
                Connect Your Google Services to SHEFAR Dashboard
              </h2>
              <p data-fr="Centralisez Google Ads, Google Analytics, Google Search Console, Google Business Profile, PageSpeed Insights et Chrome UX Report au sein d'une seule interface de gestion de la performance.">
                Centralize Google Ads, Google Analytics, Google Search
                Console, Google Business Profile, PageSpeed Insights and
                Chrome UX Report in a single performance management
                interface.
              </p>
            </div>

            <div className="grille">
              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/ads.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Ads</h3>
                <p data-fr="SHEFAR Dashboard se connecte à Google Ads pour centraliser les données des comptes et campagnes autorisés par l'utilisateur : campagnes, budgets, impressions, clics, coûts, conversions, taux de conversion et autres indicateurs publicitaires disponibles via l'API Google Ads.">
                  SHEFAR Dashboard connects to Google Ads to centralize data
                  from accounts and campaigns authorized by the user:
                  campaigns, budgets, impressions, clicks, costs,
                  conversions, conversion rates and other advertising KPIs
                  available through the Google Ads API.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/googleanalytics.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Analytics</h3>
                <p data-fr="La connexion à Google Analytics permet à SHEFAR Dashboard de centraliser les indicateurs clés relatifs à l'utilisation et à la performance du site web : trafic, sources d'acquisition, sessions, événements, conversions et évolution du comportement des utilisateurs dans le temps.">
                  Connecting Google Analytics allows SHEFAR Dashboard to
                  centralize key indicators relating to website usage and
                  performance: traffic, acquisition sources, sessions,
                  events, conversions and changes in user behavior over
                  time.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/googlesearchconsole.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Search Console</h3>
                <p data-fr="SHEFAR Dashboard utilise les données Google Search Console autorisées pour aider les entreprises à suivre leur visibilité dans Google Search : clics organiques, impressions, requêtes de recherche, pages, positions moyennes et taux de clics.">
                  SHEFAR Dashboard uses authorized Google Search Console data
                  to help businesses monitor their visibility in Google
                  Search: organic clicks, impressions, search queries,
                  pages, average positions and click-through rates.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/googlemybysiness.svg" alt="" width={22} height={22} />
                </span>
                <h3>Google Business Profile</h3>
                <p data-fr="La connexion à Google Business Profile permet à SHEFAR Dashboard de centraliser les informations relatives aux établissements de l'entreprise et à sa présence locale sur Google : établissements, informations de profil public et indicateurs de performance locale disponibles.">
                  Connecting Google Business Profile allows SHEFAR Dashboard
                  to centralize information about a company&apos;s business
                  locations and local presence on Google: locations, public
                  profile information and available local-performance
                  indicators.
                </p>
              </article>

              <article className="carte">
                <span className="carte-signe carte-signe-logo" aria-hidden="true">
                  <Image src="/Pagespeed.svg" alt="" width={22} height={22} />
                </span>
                <h3>PageSpeed Insights &amp; Chrome UX Report</h3>
                <p data-fr="SHEFAR Dashboard complète les données marketing avec des indicateurs de performance technique issus de Google PageSpeed Insights et du Chrome UX Report (CrUX) : vitesse des pages, expérience utilisateur et Core Web Vitals (LCP, INP, CLS).">
                  SHEFAR Dashboard complements marketing data with technical
                  performance indicators from Google PageSpeed Insights and
                  the Chrome UX Report (CrUX): page speed, user experience
                  and Core Web Vitals (LCP, INP, CLS).
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="connexion">
          <div className="conteneur texte-etroit legal">
            <article>
              <h2 data-fr="Étape 1 — Connectez vos comptes et services Google">
                Step 1 — Connect Your Google Accounts and Services
              </h2>
              <h3 data-fr="Connectez votre entreprise à SHEFAR Dashboard">
                Connect Your Business to SHEFAR Dashboard
              </h3>
              <p data-fr="SHEFAR Dashboard permet aux utilisateurs de connecter les comptes et services Google nécessaires aux différents modules de l'application. La connexion s'effectue via Google OAuth 2.0, le protocole d'autorisation sécurisé de Google.">
                SHEFAR Dashboard allows users to connect the Google accounts
                and services required for the different modules of the
                application. The connection is made through Google OAuth
                2.0, Google&apos;s secure authorization protocol.
              </p>
              <p data-fr="Lorsque vous choisissez de connecter un service Google, vous êtes redirigé vers Google où vous pouvez :">
                When you choose to connect a Google service, you are redirected to Google where you can:
              </p>
              <ul>
                <li data-fr="sélectionner votre compte Google ;">select your Google Account;</li>
                <li data-fr="identifier les comptes ou établissements que vous souhaitez rendre accessibles ;">
                  identify the accounts or business locations you want to make accessible;
                </li>
                <li data-fr="consulter les autorisations demandées par SHEFAR Dashboard ;">
                  review the permissions requested by SHEFAR Dashboard;
                </li>
                <li data-fr="accepter ou refuser les autorisations demandées.">
                  accept or refuse the requested permissions.
                </li>
              </ul>
              <p>
                <strong data-fr="SHEFAR Dashboard ne demande, ne collecte ni ne stocke jamais le mot de passe de votre compte Google.">
                  SHEFAR Dashboard never asks for, collects or stores your
                  Google Account password.
                </strong>{" "}
                <span data-fr="L'authentification est gérée directement par Google. L'accès aux données Google s'effectue à l'aide des autorisations OAuth explicitement accordées par l'utilisateur.">
                  Authentication is handled directly by Google. Access to
                  Google data is performed using the OAuth permissions
                  explicitly granted by the user.
                </span>
              </p>

              <h3>Google Ads</h3>
              <p data-fr="La connexion à Google Ads permet à SHEFAR Dashboard de récupérer les informations nécessaires au suivi de vos campagnes publicitaires. Selon les informations disponibles dans votre compte Google Ads et les fonctionnalités activées, SHEFAR Dashboard peut centraliser :">
                Connecting Google Ads allows SHEFAR Dashboard to retrieve
                the information necessary to monitor your advertising
                campaigns. Depending on the information available in your
                Google Ads account and the features enabled, SHEFAR
                Dashboard may centralize:
              </p>
              <ul>
                <li data-fr="les comptes Google Ads connectés ;">connected Google Ads accounts;</li>
                <li data-fr="les campagnes ;">campaigns;</li>
                <li data-fr="les budgets publicitaires ;">advertising budgets;</li>
                <li data-fr="les impressions ;">impressions;</li>
                <li data-fr="les clics ;">clicks;</li>
                <li data-fr="les coûts publicitaires ;">advertising costs;</li>
                <li data-fr="les conversions ;">conversions;</li>
                <li data-fr="les taux de conversion ;">conversion rates;</li>
                <li data-fr="le coût par conversion ;">cost per conversion;</li>
                <li data-fr="la performance des campagnes ;">campaign performance;</li>
                <li data-fr="l'évolution des indicateurs clés de performance dans le temps.">
                  changes in key performance indicators over time.
                </li>
              </ul>
              <p data-fr="Ces informations permettent aux utilisateurs d'accéder directement à leurs principaux indicateurs Google Ads depuis SHEFAR Dashboard et de suivre plus facilement l'évolution de leur investissement publicitaire.">
                This information allows users to access their main Google
                Ads KPIs directly from SHEFAR Dashboard and monitor the
                evolution of their advertising investment more easily.
              </p>

              <h3>Google Business Profile</h3>
              <p data-fr="La connexion à Google Business Profile permet à SHEFAR Dashboard de centraliser les informations relatives aux établissements et à leur présence locale sur Google. Selon les informations disponibles et les modules activés, SHEFAR Dashboard peut utiliser les informations nécessaires pour afficher :">
                Connecting Google Business Profile allows SHEFAR Dashboard
                to centralize information relating to business locations
                and their local presence on Google. Depending on the
                information available and the modules enabled, SHEFAR
                Dashboard may use information required to display:
              </p>
              <ul>
                <li data-fr="les établissements associés au compte connecté ;">
                  locations associated with the connected account;
                </li>
                <li data-fr="les informations du profil d'établissement ;">business profile information;</li>
                <li data-fr="les indicateurs de visibilité locale ;">local visibility indicators;</li>
                <li data-fr="les informations de performance disponibles par établissement ;">
                  available location performance information;
                </li>
                <li data-fr="les signaux clés utilisés pour suivre l'évolution de la présence locale.">
                  key signals used to monitor changes in local presence.
                </li>
              </ul>
              <p data-fr="SHEFAR Dashboard permet ainsi aux entreprises disposant d'un ou plusieurs établissements d'accéder à leurs informations locales dans le même environnement que leurs autres indicateurs de performance digitale.">
                SHEFAR Dashboard therefore allows businesses with one or
                several locations to access their local information in the
                same environment as their other digital-performance
                indicators.
              </p>

              <h3 data-fr="Données techniques du site web">Website Technical Data</h3>
              <p data-fr="SHEFAR Dashboard peut également intégrer des informations techniques utilisées pour évaluer la performance du site web, notamment via Google PageSpeed Insights, afin de mesurer :">
                SHEFAR Dashboard may also integrate technical information
                used to evaluate website performance, notably through
                Google PageSpeed Insights, in order to measure:
              </p>
              <ul>
                <li data-fr="la performance des pages ;">page performance;</li>
                <li data-fr="la vitesse de chargement ;">loading speed;</li>
                <li data-fr="l'expérience utilisateur ;">user experience;</li>
                <li data-fr="les Core Web Vitals et autres indicateurs techniques ;">
                  Core Web Vitals and other technical metrics;
                </li>
                <li data-fr="les éléments techniques susceptibles de nécessiter une optimisation.">
                  technical elements that may require optimization.
                </li>
              </ul>
              <p data-fr="Ces indicateurs complètent les informations marketing et offrent une vision plus complète de la performance digitale.">
                These indicators complement marketing information and
                provide a more complete view of digital performance.
              </p>

              <h3 data-fr="Pourquoi SHEFAR Dashboard demande un accès à Google">
                Why SHEFAR Dashboard Requests Access to Google
              </h3>
              <p data-fr="Les autorisations Google demandées par SHEFAR Dashboard sont utilisées exclusivement pour fournir les fonctionnalités activées par l'utilisateur. Ces autorisations peuvent être nécessaires pour :">
                The Google permissions requested by SHEFAR Dashboard are
                used exclusively to provide the features activated by the
                user. These permissions may be required to:
              </p>
              <ul>
                <li data-fr="identifier le compte Google connecté ;">identify the connected Google Account;</li>
                <li data-fr="récupérer les comptes accessibles à l'utilisateur ;">
                  retrieve accounts accessible to the user;
                </li>
                <li data-fr="afficher les données Google Ads ;">display Google Ads data;</li>
                <li data-fr="afficher les données Google Business Profile ;">
                  display Google Business Profile data;
                </li>
                <li data-fr="centraliser les indicateurs de performance dans le Dashboard ;">
                  centralize performance indicators in the Dashboard;
                </li>
                <li data-fr="mettre à jour les informations lorsque l'utilisateur accède à son compte.">
                  update information when the user accesses their account.
                </li>
              </ul>
              <p data-fr="SHEFAR Dashboard n'accède qu'aux données Google correspondant aux autorisations explicitement accordées par l'utilisateur. Les utilisateurs peuvent révoquer à tout moment l'accès de SHEFAR Dashboard à leur compte Google depuis les paramètres de sécurité de leur compte Google.">
                SHEFAR Dashboard only accesses Google data that corresponds
                to the permissions explicitly granted by the user. Users can
                revoke SHEFAR Dashboard&apos;s access to their Google
                Account at any time from their Google Account security
                settings.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="pilotage">
          <div className="conteneur texte-etroit legal">
            <article>
              <h2 data-fr="Étape 2 — Centralisez, analysez et pilotez votre performance">
                Step 2 — Centralize, Analyze and Manage Your Performance
              </h2>
              <h3 data-fr="Un seul Dashboard pour vos données digitales">
                One Dashboard for Your Digital Data
              </h3>
              <p data-fr="Une fois les services sélectionnés connectés, SHEFAR Dashboard centralise les données provenant de différentes sources afin d'en faciliter la consultation, la compréhension et la comparaison. Le Dashboard peut rassembler :">
                Once the selected services are connected, SHEFAR Dashboard
                centralizes data from different sources in order to make it
                easier to consult, understand and compare. The Dashboard
                may bring together:
              </p>
              <ul>
                <li data-fr="les données Google Ads ;">Google Ads data;</li>
                <li data-fr="les données Google Business Profile ;">Google Business Profile data;</li>
                <li data-fr="les informations de performance du site web ;">website performance information;</li>
                <li data-fr="les indicateurs de visibilité ;">visibility indicators;</li>
                <li data-fr="les tendances de performance ;">performance trends;</li>
                <li data-fr="les alertes ;">alerts;</li>
                <li data-fr="les opportunités ;">opportunities;</li>
                <li data-fr="les priorités identifiées.">identified priorities.</li>
              </ul>

              <h3 data-fr="Suivez vos indicateurs Google Ads">Monitor Your Google Ads KPIs</h3>
              <p data-fr="SHEFAR Dashboard permet aux utilisateurs de suivre les principaux indicateurs de leurs campagnes Google Ads sans avoir à analyser chaque campagne séparément sur plusieurs écrans : dépenses publicitaires, clics, impressions, conversions, coût par conversion, taux de conversion et autres indicateurs disponibles dans les comptes connectés.">
                SHEFAR Dashboard allows users to monitor the main indicators
                of their Google Ads campaigns without having to analyze
                each campaign separately across multiple screens:
                advertising spend, clicks, impressions, conversions, cost
                per conversion, conversion rates and other indicators
                available in the connected accounts.
              </p>

              <h3 data-fr="Suivez votre visibilité locale">Monitor Your Local Visibility</h3>
              <p data-fr="Pour les entreprises disposant d'établissements physiques, SHEFAR Dashboard peut centraliser les informations issues de Google Business Profile et comparer les informations de visibilité locale avec les autres indicateurs de performance digitale de l'entreprise.">
                For businesses with physical locations, SHEFAR Dashboard
                can centralize information obtained from Google Business
                Profile and compare local visibility information with the
                company&apos;s other digital-performance indicators.
              </p>

              <h3 data-fr="Analysez la performance de votre site web">Analyze Your Website Performance</h3>
              <p data-fr="Les informations techniques du site web peuvent être combinées aux données marketing afin d'aider les utilisateurs à comprendre si certains problèmes de performance digitale peuvent être liés à l'expérience proposée par leur site web.">
                Technical website information can be combined with
                marketing data to help users understand whether certain
                digital-performance issues may be related to the experience
                provided by their website.
              </p>

              <h3 data-fr="Identifiez les changements importants">Identify Important Changes</h3>
              <p data-fr="SHEFAR Dashboard ne se limite pas à afficher des chiffres. L'application organise les informations afin de faciliter l'identification des changements significatifs :">
                SHEFAR Dashboard does more than simply display numbers. The
                application organizes information in order to make
                significant changes easier to identify:
              </p>
              <ul>
                <li data-fr="une hausse ou une baisse des conversions ;">an increase or decrease in conversions;</li>
                <li data-fr="une évolution des coûts publicitaires ;">a change in advertising costs;</li>
                <li data-fr="une évolution de la visibilité locale ;">a change in local visibility;</li>
                <li data-fr="une évolution de la performance d'un établissement ;">
                  a change in the performance of a business location;
                </li>
                <li data-fr="une dégradation d'un indicateur technique ;">a deterioration in a technical indicator;</li>
                <li data-fr="une variation inhabituelle nécessitant une analyse.">
                  an unusual variation requiring review.
                </li>
              </ul>

              <h3 data-fr="Identifiez vos priorités">Identify Your Priorities</h3>
              <p data-fr="SHEFAR Dashboard rassemble les informations nécessaires pour aider les entreprises à distinguer :">
                SHEFAR Dashboard brings together the information necessary to help businesses distinguish:
              </p>
              <ul>
                <li data-fr="ce qui fonctionne bien ;">what is performing well;</li>
                <li data-fr="ce qui évolue ;">what is changing;</li>
                <li data-fr="ce qui nécessite une analyse approfondie ;">what requires further analysis;</li>
                <li data-fr="ce qui peut être optimisé ;">what can be optimized;</li>
                <li data-fr="ce qui doit être priorisé.">what should be prioritized.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="fonctionnement">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre" data-fr="Fonctionnement">
                How It Works
              </p>
              <h2 data-fr="Un Dashboard conçu pour centraliser les données Google de votre entreprise">
                A Dashboard Designed to Centralize Your Company&apos;s Google Data
              </h2>
              <p data-fr="SHEFAR Dashboard répond à un problème simple : les données importantes de l'entreprise sont souvent réparties entre Google Ads, Google Business Profile, les outils de performance du site web et de multiples interfaces de reporting.">
                SHEFAR Dashboard addresses a simple problem: important
                business data is often distributed across Google Ads,
                Google Business Profile, website-performance tools and
                multiple reporting interfaces.
              </p>
            </div>
            <div className="arguments">
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b data-fr="1. Connectez vos services Google">1. Connect your Google services</b>
                  <span data-fr="Vous décidez quels services Google connecter à SHEFAR Dashboard.">
                    You decide which Google services to connect to SHEFAR Dashboard.
                  </span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b data-fr="2. Récupérez les données autorisées">2. Retrieve authorized data</b>
                  <span data-fr="SHEFAR Dashboard récupère les données que vous avez autorisées via les API concernées.">
                    SHEFAR Dashboard retrieves the data you have authorized through the relevant APIs.
                  </span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b data-fr="3. Centralisez dans votre Dashboard">3. Centralize in your Dashboard</b>
                  <span data-fr="Vos indicateurs clés sont centralisés au sein de votre compte SHEFAR Dashboard.">
                    Your key indicators are centralized within your SHEFAR Dashboard account.
                  </span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b data-fr="4. Suivez et priorisez">4. Track and prioritize</b>
                  <span data-fr="Vous suivez votre performance, identifiez les changements importants et déterminez vos priorités.">
                    You monitor your performance, identify important changes and determine your priorities.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="securite">
          <div className="conteneur">
            <div className="encadre">
              <h3 data-fr="Vous gardez le contrôle de vos comptes Google.">
                You stay in control of your Google accounts.
              </h3>
              <p data-fr="SHEFAR Dashboard utilise OAuth 2.0 pour permettre aux utilisateurs de connecter leurs propres services Google. L'accès est limité aux données nécessaires aux fonctionnalités activées par l'utilisateur.">
                SHEFAR Dashboard uses OAuth 2.0 to let users connect their
                own Google services. Access is limited to the data required
                for the features activated by the user.
              </p>
              <p data-fr="SHEFAR Dashboard ne demande jamais votre mot de passe Google. Les autorisations peuvent être révoquées à tout moment depuis votre compte Google. Vous pouvez révoquer les autorisations Google accordées à SHEFAR Dashboard et demander la suppression de vos données conformément à notre politique de confidentialité.">
                SHEFAR Dashboard never asks for your Google password.
                Permissions can be revoked at any time from your Google
                Account. You can revoke the Google permissions granted to
                SHEFAR Dashboard and request deletion of your data in
                accordance with our Privacy Policy.
              </p>
              <div className="ouverture-actions">
                <a className="bouton bouton-contour" href="/privacy" data-fr="Consulter notre politique de confidentialité">
                  View our Privacy Policy
                </a>
                <a className="bouton bouton-contour" href="/terms" data-fr="Consulter nos conditions d'utilisation">
                  View our Terms of Service
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
              <p className="surtitre" data-fr="Intégrations">
                Integrations
              </p>
              <h2 data-fr="Services pris en charge">Supported services</h2>
              <p data-fr="Chaque connexion est initiée par l'utilisateur et peut être supprimée à tout moment.">
                Each connection is initiated by the user and can be removed at any time.
              </p>
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
