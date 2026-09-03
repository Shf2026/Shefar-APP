import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const titre = "Privacy Policy — SHEFAR Dashboard";
const description =
  "Privacy Policy for SHEFAR Dashboard: data collected, access to Google APIs, and compliance with the Google API Services User Data Policy and Limited Use requirements.";

export const metadata: Metadata = {
  title: titre,
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: titre,
    description,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="conteneur texte-etroit">
          <div className="legal-entete">
            <h1 data-fr="Politique de confidentialité">Privacy Policy</h1>
            <p className="legal-date" data-fr="Dernière mise à jour : 3 septembre 2026">
              Last updated: September 3, 2026
            </p>
          </div>

          <p data-fr="SHEFAR s'engage à protéger la confidentialité et la sécurité de ses utilisateurs et à faire preuve de transparence quant à la manière dont les données sont consultées, utilisées, stockées, partagées, conservées et supprimées.">
            SHEFAR is committed to protecting the privacy and security of
            its users and to being transparent about how data is accessed,
            used, stored, shared, retained, and deleted.
          </p>
          <p data-fr="SHEFAR Dashboard est une application web conçue pour aider les entreprises à centraliser et comprendre leurs données de performance digitale. L'application permet aux utilisateurs de connecter en toute sécurité les services Google pris en charge, notamment Google Ads et Google Business Profile, via Google OAuth 2.0. Lorsqu'un utilisateur connecte un compte Google, SHEFAR n'accède qu'aux informations que l'utilisateur a explicitement autorisées via l'écran d'autorisation Google.">
            SHEFAR Dashboard is a web application designed to help
            businesses centralize and understand their digital performance
            data. The application allows users to securely connect
            supported Google services, including Google Ads and Google
            Business Profile, through Google OAuth 2.0. When a user
            connects a Google account, SHEFAR only accesses the information
            that the user has explicitly authorized through the Google
            authorization screen.
          </p>
          <p data-fr="Cette politique de confidentialité explique comment SHEFAR traite les informations obtenues via les API Google et, en particulier : les données Google Ads consultées par SHEFAR ; les données Google Business Profile consultées par SHEFAR ; pourquoi SHEFAR accède à ces informations ; comment les données Google sont utilisées au sein de SHEFAR Dashboard ; comment ces informations sont stockées et protégées ; si les informations peuvent être traitées par des prestataires de services ; combien de temps les informations sont conservées ; comment les utilisateurs peuvent demander la suppression de leurs données ; comment les utilisateurs peuvent révoquer l'accès de SHEFAR à leur compte Google ; et comment SHEFAR se conforme à la Google API Services User Data Policy, y compris les exigences de Limited Use.">
            This Privacy Policy explains how SHEFAR handles information
            obtained through Google APIs and, in particular: the Google Ads
            data accessed by SHEFAR; the Google Business Profile data
            accessed by SHEFAR; why SHEFAR accesses this information; how
            Google data is used within SHEFAR Dashboard; how this
            information is stored and protected; whether information may
            be processed by service providers; how long the information is
            retained; how users can request deletion of their data; how
            users can revoke SHEFAR&apos;s access to their Google Account;
            and how SHEFAR complies with the Google API Services User Data
            Policy, including the Limited Use requirements.
          </p>

          <nav className="sommaire" aria-label="Table of contents">
            <h2 data-fr="Sommaire">Table of contents</h2>
            <ol>
              <li><a href="#about" data-fr="À propos de SHEFAR Dashboard">About SHEFAR Dashboard</a></li>
              <li><a href="#oauth" data-fr="Connexion du compte Google et OAuth 2.0">Google Account Connection and OAuth 2.0</a></li>
              <li><a href="#ads" data-fr="Données Google Ads consultées par SHEFAR">Google Ads Data Accessed by SHEFAR</a></li>
              <li><a href="#business-profile" data-fr="Données Google Business Profile consultées par SHEFAR">Google Business Profile Data Accessed by SHEFAR</a></li>
              <li><a href="#why" data-fr="Pourquoi SHEFAR accède aux données Google">Why SHEFAR Accesses Google Data</a></li>
              <li><a href="#how-used" data-fr="Comment les données Google sont utilisées dans SHEFAR Dashboard">How Google Data Is Used in SHEFAR Dashboard</a></li>
              <li><a href="#security" data-fr="Stockage et sécurité des données utilisateur Google">Storage and Security of Google User Data</a></li>
              <li><a href="#sharing" data-fr="Partage des données utilisateur Google et prestataires de services">Sharing of Google User Data and Service Providers</a></li>
              <li><a href="#human-access" data-fr="Accès humain aux données utilisateur Google">Human Access to Google User Data</a></li>
              <li><a href="#advertising-ai" data-fr="Utilisation des données Google à des fins publicitaires, d'IA ou autres">Use of Google Data for Advertising, AI or Other Purposes</a></li>
              <li><a href="#retention" data-fr="Conservation des données">Data Retention</a></li>
              <li><a href="#deletion" data-fr="Comment demander la suppression des données utilisateur Google">How to Request Deletion of Google User Data</a></li>
              <li><a href="#revoking" data-fr="Révoquer l'accès de SHEFAR à votre compte Google">Revoking SHEFAR&apos;s Access to Your Google Account</a></li>
              <li><a href="#disconnecting" data-fr="Déconnecter un service Google de SHEFAR">Disconnecting a Google Service From SHEFAR</a></li>
              <li><a href="#limited-use" data-fr="Google API Services User Data Policy et Limited Use">Google API Services User Data Policy and Limited Use</a></li>
              <li><a href="#user-control" data-fr="Contrôle de l'utilisateur">User Control</a></li>
              <li><a href="#other-info" data-fr="Autres informations personnelles">Other Personal Information</a></li>
              <li><a href="#international" data-fr="Traitement international et prestataires de services">International Processing and Service Providers</a></li>
              <li><a href="#changes" data-fr="Modifications de cette politique de confidentialité">Changes to This Privacy Policy</a></li>
              <li><a href="#contact" data-fr="Contacter SHEFAR">Contact SHEFAR</a></li>
            </ol>
          </nav>

          <article id="about">
            <h2 data-fr="1. À propos de SHEFAR Dashboard">1. About SHEFAR Dashboard</h2>
            <p data-fr="SHEFAR Dashboard est une application de gestion de la performance digitale et de reporting destinée aux entreprises. Son objectif est de rassembler dans une interface unique et compréhensible des informations qui seraient autrement réparties entre plusieurs services.">
              SHEFAR Dashboard is a digital performance management and
              reporting application for businesses. Its purpose is to bring
              information that would otherwise be distributed across
              several services into a single, understandable interface.
            </p>
            <p data-fr="Selon les services activés par l'utilisateur, SHEFAR Dashboard peut se connecter à des services Google tels que :">
              Depending on the services enabled by the user, SHEFAR
              Dashboard may connect to Google services such as:
            </p>
            <ul>
              <li data-fr="Google Ads ;">Google Ads;</li>
              <li data-fr="Google Business Profile ;">Google Business Profile;</li>
              <li data-fr="Google Analytics ;">Google Analytics;</li>
              <li data-fr="Google Search Console ;">Google Search Console;</li>
              <li data-fr="Google PageSpeed Insights ;">Google PageSpeed Insights;</li>
              <li data-fr="Chrome UX Report et d'autres services Google pris en charge.">Chrome UX Report and other supported Google services.</li>
            </ul>
            <p data-fr="La disponibilité d'un service ne signifie pas que SHEFAR y accède automatiquement. Un service Google n'est consulté que lorsque l'utilisateur choisit de le connecter et accorde les autorisations correspondantes via le processus d'autorisation de Google.">
              The availability of a service does not mean that SHEFAR
              automatically accesses it. A Google service is accessed only
              when the user chooses to connect it and grants the
              corresponding permissions through Google&apos;s authorization
              process.
            </p>
          </article>

          <article id="oauth">
            <h2 data-fr="2. Connexion du compte Google et OAuth 2.0">2. Google Account Connection and OAuth 2.0</h2>
            <p data-fr="SHEFAR utilise Google OAuth 2.0 pour demander l'autorisation d'accéder aux services Google. Lorsqu'un utilisateur choisit de connecter des services Google à SHEFAR Dashboard, il est redirigé vers l'interface d'authentification et d'autorisation propre à Google.">
              SHEFAR uses Google OAuth 2.0 to request permission to access
              Google services. When a user chooses to connect Google
              services to SHEFAR Dashboard, the user is redirected to
              Google&apos;s own authentication and authorization interface.
            </p>
            <p data-fr="L'utilisateur peut :">The user can:</p>
            <ul>
              <li data-fr="sélectionner le compte Google à connecter ;">select the Google Account to connect;</li>
              <li data-fr="consulter les autorisations demandées par SHEFAR ;">review the permissions requested by SHEFAR;</li>
              <li data-fr="choisir les comptes ou ressources disponibles, lorsque Google le permet ;">
                choose which accounts or resources are available, where supported by Google;
              </li>
              <li data-fr="accepter ou refuser les autorisations demandées.">accept or refuse the requested permissions.</li>
            </ul>
            <p>
              <strong data-fr="SHEFAR ne demande jamais aux utilisateurs de lui fournir directement leur mot de passe Google. SHEFAR ne collecte ni ne stocke les mots de passe des comptes Google.">
                SHEFAR does not ask users to provide their Google password
                directly to SHEFAR. SHEFAR does not collect or store Google
                Account passwords.
              </strong>{" "}
              <span data-fr="L'authentification est gérée directement par Google. SHEFAR reçoit de Google des identifiants d'autorisation permettant à l'application d'accéder uniquement aux données Google associées aux autorisations accordées par l'utilisateur. Les utilisateurs gardent le contrôle de ces autorisations et peuvent les révoquer à tout moment.">
                Authentication is handled directly by Google. SHEFAR receives
                authorization credentials from Google allowing the
                application to access only the Google data associated with
                the permissions granted by the user. Users remain in control
                of these permissions and may revoke them at any time.
              </span>
            </p>
          </article>

          <article id="ads">
            <h2 data-fr="3. Données Google Ads consultées par SHEFAR">3. Google Ads Data Accessed by SHEFAR</h2>
            <p data-fr="Lorsqu'un utilisateur connecte Google Ads à SHEFAR Dashboard, SHEFAR peut accéder aux informations Google Ads mises à disposition via l'API Google Ads et autorisées par l'utilisateur. Selon le compte connecté, les autorisations et les fonctionnalités activées, ces informations peuvent inclure :">
              When a user connects Google Ads to SHEFAR Dashboard, SHEFAR
              may access Google Ads information made available through the
              Google Ads API and authorized by the user. Depending on the
              connected account, permissions and features enabled, this
              information may include:
            </p>
            <ul>
              <li data-fr="les comptes Google Ads accessibles ;">accessible Google Ads accounts;</li>
              <li data-fr="les identifiants client Google Ads ;">Google Ads customer identifiers;</li>
              <li data-fr="les campagnes ;">campaigns;</li>
              <li data-fr="les noms et statuts des campagnes ;">campaign names and statuses;</li>
              <li data-fr="les budgets publicitaires ;">advertising budgets;</li>
              <li data-fr="les impressions ;">impressions;</li>
              <li data-fr="les clics ;">clicks;</li>
              <li data-fr="les coûts publicitaires ;">advertising costs;</li>
              <li data-fr="les conversions ;">conversions;</li>
              <li data-fr="les taux de conversion ;">conversion rates;</li>
              <li data-fr="le coût par conversion ;">cost per conversion;</li>
              <li data-fr="les indicateurs de performance des campagnes ;">campaign performance metrics;</li>
              <li data-fr="la performance par date ou par période de reporting ;">performance by date or reporting period;</li>
              <li data-fr="l'historique de performance disponible via l'API ;">
                historical performance information available through the API;
              </li>
              <li data-fr="d'autres indicateurs de reporting nécessaires pour afficher la performance Google Ads de l'utilisateur.">
                other reporting metrics required to display the user&apos;s Google Ads performance.
              </li>
            </ul>
            <p data-fr="SHEFAR consulte ces informations à des fins de reporting, de suivi, d'analyse et de fonctionnement du tableau de bord. SHEFAR n'accède pas aux informations Google Ads sans rapport avec les fonctionnalités fournies à l'utilisateur.">
              SHEFAR accesses this information for reporting, monitoring,
              analysis and dashboard functionality. SHEFAR does not access
              Google Ads information that is unrelated to the features
              provided to the user.
            </p>
          </article>

          <article id="business-profile">
            <h2 data-fr="4. Données Google Business Profile consultées par SHEFAR">4. Google Business Profile Data Accessed by SHEFAR</h2>
            <p data-fr="Lorsqu'un utilisateur connecte Google Business Profile, SHEFAR peut accéder aux informations associées aux établissements que l'utilisateur est autorisé à consulter. Selon les API disponibles chez Google, les autorisations accordées par l'utilisateur et les modules SHEFAR activés, ces informations peuvent inclure :">
              When a user connects Google Business Profile, SHEFAR may
              access information associated with the business locations
              that the user is authorized to access. Depending on
              Google&apos;s available APIs, the permissions granted by the
              user and the SHEFAR modules enabled, this information may
              include:
            </p>
            <ul>
              <li data-fr="les comptes Google Business Profile accessibles à l'utilisateur ;">
                Google Business Profile accounts accessible by the user;
              </li>
              <li data-fr="les établissements associés à ces comptes ;">business locations associated with those accounts;</li>
              <li data-fr="les identifiants d'établissement ou de compte ;">business or location identifiers;</li>
              <li data-fr="les noms d'établissement ;">business names;</li>
              <li data-fr="les informations publiques de l'établissement ;">public business information;</li>
              <li data-fr="les informations d'établissement ;">location information;</li>
              <li data-fr="les informations affichées sur le profil d'établissement ;">
                information displayed on the business profile;
              </li>
              <li data-fr="les informations de visibilité locale ;">local visibility information;</li>
              <li data-fr="les informations de performance de l'établissement ;">business performance information;</li>
              <li data-fr="les indicateurs d'engagement ou de performance disponibles ;">
                available engagement or performance metrics;
              </li>
              <li data-fr="les informations utilisées pour suivre l'évolution de la présence et de la visibilité locales.">
                information used to monitor changes in local presence and visibility.
              </li>
            </ul>
            <p data-fr="Les informations exactement disponibles peuvent varier selon les API Google, les autorisations de l'utilisateur et les fonctionnalités disponibles dans SHEFAR Dashboard. SHEFAR ne récupère que les informations nécessaires pour fournir les fonctionnalités Google Business Profile demandées par l'utilisateur.">
              The exact information available may vary depending on the
              Google APIs, the user&apos;s permissions and the features
              available in SHEFAR Dashboard. SHEFAR only retrieves
              information required to provide the Google Business Profile
              features requested by the user.
            </p>
          </article>

          <article id="why">
            <h2 data-fr="5. Pourquoi SHEFAR accède aux données Google">5. Why SHEFAR Accesses Google Data</h2>
            <p data-fr="SHEFAR demande l'accès aux données Google exclusivement pour fournir les services et fonctionnalités sélectionnés par l'utilisateur. Les données Google peuvent être consultées afin de :">
              SHEFAR requests access to Google data exclusively to provide
              the services and features selected by the user. Google data
              may be accessed in order to:
            </p>
            <ul>
              <li data-fr="identifier le compte Google connecté ;">identify the connected Google Account;</li>
              <li data-fr="identifier les comptes Google ou établissements disponibles pour l'utilisateur ;">
                identify Google accounts or business locations available to the user;
              </li>
              <li data-fr="connecter des services Google à SHEFAR Dashboard ;">connect Google services to SHEFAR Dashboard;</li>
              <li data-fr="récupérer les données de reporting Google Ads ;">retrieve Google Ads reporting data;</li>
              <li data-fr="récupérer les informations Google Business Profile ;">retrieve Google Business Profile information;</li>
              <li data-fr="afficher les indicateurs de performance ;">display performance indicators;</li>
              <li data-fr="centraliser les informations de plusieurs services ;">centralize information from several services;</li>
              <li data-fr="comparer la performance dans le temps ;">compare performance over time;</li>
              <li data-fr="identifier les changements significatifs de performance ;">
                identify significant changes in performance;
              </li>
              <li data-fr="générer les vues du tableau de bord ;">generate dashboard views;</li>
              <li data-fr="afficher des alertes ou signaux de performance ;">display alerts or performance signals;</li>
              <li data-fr="identifier des opportunités ou points nécessitant une attention particulière ;">
                identify opportunities or areas requiring attention;
              </li>
              <li data-fr="fournir une analyse à destination de l'utilisateur ;">provide user-facing analysis;</li>
              <li data-fr="actualiser les informations affichées dans le Dashboard ;">
                refresh information displayed in the Dashboard;
              </li>
              <li data-fr="aider les utilisateurs à comprendre et suivre leur performance digitale.">
                help users understand and monitor their digital performance.
              </li>
            </ul>
            <p data-fr="SHEFAR ne demande pas d'autorisations Google uniquement pour des finalités futures, non liées ou non divulguées. Les autorisations sont destinées à rester limitées à ce qui est nécessaire aux fonctionnalités fournies par SHEFAR Dashboard.">
              SHEFAR does not request Google permissions solely for future,
              unrelated or undisclosed purposes. Permissions are intended
              to remain limited to those necessary for the features
              provided by SHEFAR Dashboard.
            </p>
          </article>

          <article id="how-used">
            <h2 data-fr="6. Comment les données Google sont utilisées dans SHEFAR Dashboard">
              6. How Google Data Is Used in SHEFAR Dashboard
            </h2>
            <p data-fr="Les informations obtenues via les API Google sont principalement utilisées pour créer les fonctionnalités destinées à l'utilisateur au sein de SHEFAR Dashboard. Par exemple, les données Google Ads peuvent être utilisées pour afficher les dépenses publicitaires, les impressions, les clics, les conversions, les taux de conversion, le coût par conversion, les tendances de campagne, les variations de performance, les périodes de reporting et d'autres indicateurs publicitaires pertinents.">
              Information obtained through Google APIs is primarily used to
              create the user-facing features available in SHEFAR
              Dashboard. For example, Google Ads data may be used to
              display advertising spend, impressions, clicks, conversions,
              conversion rates, cost per conversion, campaign trends,
              performance variations, reporting periods and other relevant
              advertising KPIs.
            </p>
            <p data-fr="Les données Google Business Profile peuvent être utilisées pour afficher les établissements connectés, les informations d'établissement, les informations de visibilité locale, les indicateurs de performance disponibles, les évolutions de la performance locale et les indicateurs relatifs à la présence locale de l'utilisateur sur Google.">
              Google Business Profile data may be used to display connected
              business locations, business information, local visibility
              information, available performance metrics, changes in local
              performance and indicators relating to the user&apos;s local
              presence on Google.
            </p>
            <p data-fr="SHEFAR peut traiter ces indicateurs pour organiser, comparer et interpréter les informations dans l'intérêt de l'utilisateur. Par exemple, le Dashboard peut mettre en évidence une hausse ou une baisse des conversions, une évolution significative des coûts publicitaires, un changement de performance des campagnes, une évolution de la visibilité locale, un changement de performance d'un établissement, une variation inhabituelle nécessitant une analyse, ou une opportunité ou priorité identifiée à partir des données disponibles.">
              SHEFAR may process these metrics to organize, compare and
              interpret the information for the benefit of the user. For
              example, the Dashboard may highlight an increase or decrease
              in conversions, a significant change in advertising costs, a
              change in campaign performance, a change in local visibility,
              a change in the performance of a business location, an
              unusual variation requiring review, or an opportunity or
              priority identified from the available data.
            </p>
            <p data-fr="L'objectif de ce traitement est de rendre les informations plus faciles à comprendre et à exploiter pour l'utilisateur. Les données utilisateur Google ne sont pas consultées à des fins non liées.">
              The purpose of this processing is to make the information
              easier for the user to understand and act upon. Google user
              data is not accessed for unrelated purposes.
            </p>
          </article>

          <article id="security">
            <h2 data-fr="7. Stockage et sécurité des données utilisateur Google">7. Storage and Security of Google User Data</h2>
            <p data-fr="SHEFAR prend des mesures techniques et organisationnelles raisonnables destinées à protéger les données utilisateur Google contre l'accès non autorisé, la divulgation non autorisée, la perte accidentelle, l'altération, l'utilisation abusive, la destruction et le traitement illicite.">
              SHEFAR takes reasonable technical and organizational measures
              designed to protect Google user data against unauthorized
              access, unauthorized disclosure, accidental loss, alteration,
              misuse, destruction and unlawful processing.
            </p>
            <p data-fr="L'accès aux systèmes traitant les données utilisateur Google est restreint selon les besoins opérationnels. Les identifiants OAuth et informations d'autorisation sont traités comme des informations d'authentification sensibles et protégés en conséquence. SHEFAR prend également des mesures pour protéger les informations lors de leur transmission entre les services Google, l'infrastructure de SHEFAR et le navigateur de l'utilisateur. SHEFAR ne stocke pas le mot de passe Google de l'utilisateur.">
              Access to systems processing Google user data is restricted
              according to operational requirements. OAuth credentials and
              authorization information are treated as sensitive
              authentication information and are protected accordingly.
              SHEFAR also takes measures to protect information during
              transmission between Google services, SHEFAR&apos;s
              infrastructure and the user&apos;s browser. SHEFAR does not
              store the user&apos;s Google password.
            </p>
            <p data-fr="Lorsque des informations Google doivent être temporairement mises en cache ou stockées pour assurer le fonctionnement du Dashboard, SHEFAR limite ce stockage à ce qui est nécessaire au fonctionnement du service. Aucun service en ligne ne peut garantir une sécurité absolue. Toutefois, SHEFAR maintient des mesures de protection destinées à offrir un niveau de protection approprié compte tenu de la nature des informations traitées.">
              Where Google information must be temporarily cached or stored
              to provide Dashboard functionality, SHEFAR limits that
              storage to what is necessary for the operation of the
              service. No internet-based service can guarantee absolute
              security. However, SHEFAR maintains safeguards intended to
              provide an appropriate level of protection considering the
              nature of the information processed.
            </p>
          </article>

          <article id="sharing">
            <h2 data-fr="8. Partage des données utilisateur Google et prestataires de services">
              8. Sharing of Google User Data and Service Providers
            </h2>
            <p data-fr="SHEFAR ne vend pas les données utilisateur Google. SHEFAR ne vend pas les données de l'API Google à des courtiers en données, plateformes publicitaires ou revendeurs d'informations. SHEFAR ne transfère pas les données utilisateur Google à des fins de publicité tierce, de publicité personnalisée, de retargeting ou de publicité par centres d'intérêt.">
              SHEFAR does not sell Google user data. SHEFAR does not sell
              Google API data to data brokers, advertising platforms or
              information resellers. SHEFAR does not transfer Google user
              data for third-party advertising, personalized advertising,
              retargeting or interest-based advertising.
            </p>
            <p data-fr="Les données utilisateur Google peuvent être traitées par des prestataires techniques soigneusement sélectionnés lorsque cela est nécessaire au fonctionnement de SHEFAR Dashboard. Ces prestataires peuvent inclure, par exemple :">
              Google user data may be processed by carefully selected
              technical service providers when this is necessary to
              operate SHEFAR Dashboard. These providers may include, for
              example:
            </p>
            <ul>
              <li data-fr="des prestataires d'hébergement et d'infrastructure ;">hosting and infrastructure providers;</li>
              <li data-fr="des prestataires de services cloud ;">cloud service providers;</li>
              <li data-fr="des prestataires de bases de données ou de stockage ;">database or storage providers;</li>
              <li data-fr="des prestataires d'infrastructure de sauvegarde ;">backup infrastructure providers;</li>
              <li data-fr="des prestataires de sécurité ;">security providers;</li>
              <li data-fr="des prestataires réseau, DNS ou de diffusion de contenu ;">
                network, DNS or content-delivery providers;
              </li>
              <li data-fr="des prestataires de supervision et de maintenance technique ;">
                monitoring and technical maintenance providers;
              </li>
              <li data-fr="des prestataires nécessaires au fonctionnement sécurisé de l'application.">
                providers required for the secure operation of the application.
              </li>
            </ul>
            <p data-fr="Ces prestataires n'agissent que lorsque cela est nécessaire pour fournir ou protéger le service SHEFAR et ne sont pas autorisés à utiliser les données utilisateur Google à leurs propres fins publicitaires ou commerciales indépendantes. Le cas échéant, SHEFAR met en œuvre des garanties contractuelles, techniques et organisationnelles destinées à protéger les informations traitées par ces prestataires. SHEFAR peut également divulguer des informations lorsque cela est nécessaire pour se conformer à la loi applicable, à des procédures judiciaires, à des obligations réglementaires ou à des demandes valides d'autorités compétentes.">
              Such providers act only where necessary to deliver or protect
              the SHEFAR service and are not authorized to use Google user
              data for their own independent advertising or commercial
              purposes. Where required, SHEFAR uses contractual, technical
              and organizational safeguards intended to protect information
              handled by these providers. SHEFAR may also disclose
              information when required to comply with applicable law,
              legal proceedings, regulatory obligations or valid requests
              from competent authorities.
            </p>
          </article>

          <article id="human-access">
            <h2 data-fr="9. Accès humain aux données utilisateur Google">9. Human Access to Google User Data</h2>
            <p data-fr="SHEFAR limite l'accès humain aux données utilisateur Google. Les employés, sous-traitants ou prestataires de services ne sont pas autorisés à accéder librement aux informations utilisateur Google. Un accès humain ne peut avoir lieu que lorsque cela est approprié et nécessaire, notamment dans des situations telles que :">
              SHEFAR limits human access to Google user data. Employees,
              contractors or service providers are not permitted to freely
              access Google user information. Human access may occur only
              where appropriate and necessary, including situations such
              as:
            </p>
            <ul>
              <li data-fr="lorsque l'utilisateur a demandé une assistance et que l'accès est nécessaire pour traiter la demande ;">
                when the user has requested support and access is necessary to resolve the request;
              </li>
              <li data-fr="lorsque l'utilisateur a donné son consentement approprié ;">
                when the user has provided appropriate consent;
              </li>
              <li data-fr="lorsque l'accès est nécessaire pour enquêter sur un incident de sécurité, un abus, une fraude ou une défaillance technique ;">
                when access is necessary to investigate security incidents, abuse, fraud or technical failures;
              </li>
              <li data-fr="lorsque cela est requis pour se conformer aux lois ou obligations légales applicables ;">
                when required to comply with applicable laws or legal obligations;
              </li>
              <li data-fr="lorsque les informations ont été agrégées ou anonymisées de manière appropriée à des fins opérationnelles internes légitimes.">
                when information has been appropriately aggregated or anonymized for legitimate internal operational purposes.
              </li>
            </ul>
            <p data-fr="L'accès est limité à ce qui est raisonnablement nécessaire à la finalité concernée.">
              Access is limited to what is reasonably necessary for the relevant purpose.
            </p>
          </article>

          <article id="advertising-ai">
            <h2 data-fr="10. Utilisation des données Google à des fins publicitaires, d'IA ou autres">
              10. Use of Google Data for Advertising, AI or Other Purposes
            </h2>
            <p data-fr="SHEFAR ne vend pas les données utilisateur Google et ne les utilise pas pour créer des profils publicitaires destinés à des tiers. Les informations obtenues via les API Google ne sont ni transférées ni vendues à des fins de publicité personnalisée, de retargeting, de publicité par centres d'intérêt, de courtage de données publicitaires, de scoring de crédit, de décisions de prêt ou de marketing tiers non lié.">
              SHEFAR does not sell Google user data or use Google user data
              to create advertising profiles for third parties. Information
              obtained from Google APIs is not transferred or sold for
              personalized advertising, retargeting, interest-based
              advertising, advertising data brokerage, credit scoring,
              lending decisions or unrelated third-party marketing.
            </p>
            <p data-fr="Lorsque des systèmes automatisés ou des technologies analytiques sont utilisés au sein de SHEFAR, ils visent à fournir des fonctionnalités bénéficiant directement à l'utilisateur SHEFAR concerné, comme l'organisation des données, l'identification de variations ou la présentation d'analyses de performance. SHEFAR n'utilise pas les données utilisateur Google pour entraîner des modèles d'intelligence artificielle ou d'apprentissage automatique généraux destinés à des tiers non liés.">
              Where automated systems or analytical technologies are used
              within SHEFAR, they are intended to provide functionality
              directly benefiting the relevant SHEFAR user, such as
              organizing data, identifying variations or presenting
              performance insights. SHEFAR does not use Google user data to
              train general-purpose artificial intelligence or
              machine-learning models for unrelated third parties.
            </p>
          </article>

          <article id="retention">
            <h2 data-fr="11. Conservation des données">11. Data Retention</h2>
            <p data-fr="SHEFAR ne conserve les données utilisateur Google que le temps raisonnablement nécessaire pour fournir les fonctionnalités demandées par l'utilisateur, assurer le fonctionnement du service, se conformer aux obligations légales applicables ou résoudre des problèmes de sécurité légitimes. La durée de conservation peut dépendre :">
              SHEFAR retains Google user data only for as long as
              reasonably necessary to provide the features requested by the
              user, maintain the service, comply with applicable legal
              obligations or resolve legitimate security issues. The
              retention period may depend on:
            </p>
            <ul>
              <li data-fr="du fait que le compte SHEFAR de l'utilisateur reste actif ;">
                whether the user&apos;s SHEFAR account remains active;
              </li>
              <li data-fr="du fait que le service Google concerné reste connecté ;">
                whether the relevant Google service remains connected;
              </li>
              <li data-fr="du fait que les données historiques soient nécessaires au reporting destiné à l'utilisateur ;">
                whether historical data is necessary for user-facing reporting;
              </li>
              <li data-fr="du fait que l'utilisateur ait demandé la suppression ;">whether the user has requested deletion;</li>
              <li data-fr="des exigences légales, comptables, de sécurité ou réglementaires.">
                legal, accounting, security or regulatory requirements.
              </li>
            </ul>
            <p data-fr="SHEFAR n'entend pas conserver de copies permanentes des données utilisateur Google lorsque ces informations ne sont plus nécessaires au service. Lorsqu'un utilisateur déconnecte un service Google ou demande la suppression, SHEFAR cessera d'utiliser l'autorisation Google correspondante pour tout nouvel accès aux données et prendra des mesures raisonnables pour supprimer les informations associées qui ne sont plus requises. Des copies résiduelles peuvent subsister temporairement dans des sauvegardes système sécurisées jusqu'à ce que ces sauvegardes soient écrasées ou supprimées selon le cycle de conservation des sauvegardes applicable. Les informations que SHEFAR est légalement tenu de conserver peuvent être préservées uniquement pour la durée légale requise et pour la finalité légale concernée.">
              SHEFAR does not intend to maintain permanent copies of Google
              user data when that information is no longer necessary for
              the service. When a user disconnects a Google service or
              requests deletion, SHEFAR will stop using the corresponding
              Google authorization for new data access and will take
              reasonable steps to remove associated information that is no
              longer required. Residual copies may temporarily remain in
              secure system backups until those backups are overwritten or
              deleted according to the applicable backup retention cycle.
              Information that SHEFAR is legally required to retain may be
              preserved only for the required legal period and for the
              relevant legal purpose.
            </p>
          </article>

          <article id="deletion">
            <h2 data-fr="12. Comment demander la suppression des données utilisateur Google">
              12. How to Request Deletion of Google User Data
            </h2>
            <p>
              <span data-fr="Les utilisateurs peuvent demander la suppression des informations associées à leur compte SHEFAR ou aux services Google connectés. Une demande de suppression peut être soumise en contactant :">
                Users may request deletion of information associated with
                their SHEFAR account or connected Google services. A deletion
                request may be submitted by contacting:
              </span>{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p data-fr="La demande doit identifier le compte SHEFAR concerné et indiquer clairement que l'utilisateur souhaite supprimer les données associées à un compte Google connecté.">
              The request should identify the SHEFAR account concerned and
              clearly state that the user wishes to delete data associated
              with a connected Google Account.
            </p>
            <p data-fr="Suite à une demande de suppression valide, SHEFAR prendra des mesures raisonnables pour :">
              Following a valid deletion request, SHEFAR will take reasonable steps to:
            </p>
            <ul>
              <li data-fr="identifier le compte SHEFAR concerné ;">identify the relevant SHEFAR account;</li>
              <li data-fr="déconnecter l'autorisation Google concernée le cas échéant ;">
                disconnect the relevant Google authorization where appropriate;
              </li>
              <li data-fr="cesser de récupérer de nouvelles informations via la connexion révoquée ;">
                stop retrieving new information through the revoked connection;
              </li>
              <li data-fr="supprimer les identifiants OAuth stockés associés à cette connexion, le cas échéant ;">
                remove stored OAuth credentials associated with that connection where applicable;
              </li>
              <li data-fr="supprimer les données utilisateur Google qui ne sont plus nécessaires ;">
                delete Google user data that is no longer necessary;
              </li>
              <li data-fr="supprimer ou anonymiser les données associées le cas échéant ;">
                remove or anonymize related data where appropriate;
              </li>
              <li data-fr="laisser expirer les copies de sauvegarde résiduelles selon le cycle de vie de sauvegarde applicable.">
                allow residual backup copies to expire according to the applicable backup lifecycle.
              </li>
            </ul>
            <p data-fr="SHEFAR peut demander une vérification raisonnable avant de traiter une demande de suppression afin d'éviter la suppression non autorisée des informations d'un autre utilisateur. SHEFAR vise à traiter les demandes de suppression légitimes sans délai excessif et conformément aux exigences applicables en matière de protection des données.">
              SHEFAR may request reasonable verification before completing
              a deletion request in order to prevent unauthorized deletion
              of another user&apos;s information. SHEFAR aims to process
              legitimate deletion requests without undue delay and in
              accordance with applicable data-protection requirements.
            </p>
          </article>

          <article id="revoking">
            <h2 data-fr="13. Révoquer l'accès de SHEFAR à votre compte Google">
              13. Revoking SHEFAR&apos;s Access to Your Google Account
            </h2>
            <p>
              <span data-fr="Les utilisateurs peuvent révoquer l'accès de SHEFAR directement depuis leur compte Google, à tout moment. Cela peut généralement se faire depuis les">
                Users can revoke SHEFAR&apos;s access directly from their
                Google Account at any time. This can generally be done from
                the
              </span>{" "}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" data-fr="paramètres de sécurité du compte Google">
                Google Account security settings
              </a>{" "}
              <span data-fr="en ouvrant la section relative aux applications connectées, aux applications tierces ou aux services ayant accès au compte, en sélectionnant SHEFAR Dashboard, puis en supprimant l'accès de l'application.">
                by opening the section relating to connected applications,
                third-party applications or services with account access,
                selecting SHEFAR Dashboard, and removing the application&apos;s
                access.
              </span>
            </p>
            <p>
              <span data-fr="Une fois l'accès révoqué, SHEFAR ne pourra plus récupérer de nouvelles données utilisateur Google via cette autorisation. Révoquer l'autorisation Google et supprimer les informations déjà stockées par SHEFAR sont deux actions distinctes. Si un utilisateur souhaite également que les informations déjà stockées soient supprimées, il peut soumettre une demande de suppression à :">
                Once access has been revoked, SHEFAR will no longer be able
                to retrieve new Google user data through that authorization.
                Revoking Google authorization and deleting information
                already stored by SHEFAR are separate actions. If a user also
                wants previously stored information to be deleted, the user
                may submit a deletion request to:
              </span>{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
          </article>

          <article id="disconnecting">
            <h2 data-fr="14. Déconnecter un service Google de SHEFAR">14. Disconnecting a Google Service From SHEFAR</h2>
            <p data-fr="Lorsque cette fonctionnalité est disponible dans SHEFAR Dashboard, les utilisateurs peuvent également déconnecter un service Google directement depuis leur compte SHEFAR. Déconnecter un service empêche SHEFAR de continuer à utiliser cette connexion pour récupérer des informations mises à jour. L'utilisateur peut en outre révoquer l'autorisation directement depuis son compte Google pour un contrôle complet côté Google.">
              Where this functionality is available within SHEFAR
              Dashboard, users may also disconnect a Google service
              directly from their SHEFAR account. Disconnecting a service
              prevents SHEFAR from continuing to use that connection to
              retrieve updated information. The user may additionally
              revoke the authorization directly from the user&apos;s Google
              Account for complete control over Google-side authorization.
            </p>
          </article>

          <article id="limited-use">
            <h2 data-fr="15. Google API Services User Data Policy et Limited Use">
              15. Google API Services User Data Policy and Limited Use
            </h2>
            <p data-fr="SHEFAR s'engage à se conformer à la Google API Services User Data Policy, y compris aux exigences applicables de Limited Use.">
              SHEFAR is committed to complying with the Google API Services
              User Data Policy, including the applicable Limited Use
              requirements.
            </p>
            <div className="mention">
              <p>
                <span data-fr="L'utilisation par SHEFAR des informations reçues des API Google respectera la">
                  SHEFAR&apos;s use of information received from Google APIs
                  will adhere to the
                </span>{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" data-fr="Google API Services User Data Policy">
                  Google API Services User Data Policy
                </a>
                <span data-fr=", y compris les exigences de Limited Use.">, including the Limited Use requirements.</span>
              </p>
            </div>
            <p data-fr="En particulier, SHEFAR limite l'utilisation des données utilisateur Google à la fourniture ou à l'amélioration des fonctionnalités destinées à l'utilisateur, visibles et pertinentes au sein de SHEFAR Dashboard :">
              In particular, SHEFAR limits the use of Google user data to providing or improving user-facing features that are visible and relevant within SHEFAR Dashboard:
            </p>
            <ul>
              <li data-fr="SHEFAR n'utilise pas les données utilisateur Google à des fins non liées ;">
                SHEFAR does not use Google user data for unrelated purposes;
              </li>
              <li data-fr="SHEFAR ne vend pas les données utilisateur Google ;">SHEFAR does not sell Google user data;</li>
              <li data-fr="SHEFAR ne transfère pas les données utilisateur Google à des plateformes publicitaires, courtiers en données ou revendeurs d'informations ;">
                SHEFAR does not transfer Google user data to advertising platforms, data brokers or information resellers;
              </li>
              <li data-fr="SHEFAR n'utilise pas les données utilisateur Google à des fins de publicité personnalisée, par centres d'intérêt ou de retargeting ;">
                SHEFAR does not use Google user data for personalized, interest-based or retargeting advertising;
              </li>
              <li data-fr="SHEFAR n'utilise pas les données utilisateur Google pour déterminer la solvabilité ou les décisions de prêt.">
                SHEFAR does not use Google user data for determining creditworthiness or lending decisions.
              </li>
            </ul>
            <p data-fr="Les transferts de données utilisateur Google sont limités aux circonstances nécessaires pour :">
              Transfers of Google user data are limited to circumstances necessary to:
            </p>
            <ul>
              <li data-fr="fournir ou améliorer les fonctionnalités SHEFAR demandées par l'utilisateur ;">
                provide or improve the SHEFAR features requested by the user;
              </li>
              <li data-fr="faire fonctionner l'infrastructure nécessaire pour fournir ces fonctionnalités ;">
                operate the infrastructure required to provide those features;
              </li>
              <li data-fr="maintenir la sécurité et l'intégrité de SHEFAR ;">maintain the security and integrity of SHEFAR;</li>
              <li data-fr="enquêter sur des incidents de sécurité, abus ou problèmes techniques ;">
                investigate security incidents, abuse or technical issues;
              </li>
              <li data-fr="se conformer aux lois ou obligations légales applicables ;">
                comply with applicable laws or legal obligations;
              </li>
              <li data-fr="réaliser une opération d'entreprise lorsque cela est légalement autorisé et que tout consentement requis a été obtenu.">
                complete a corporate transaction where legally permitted and where any required user consent has been obtained.
              </li>
            </ul>
            <p data-fr="SHEFAR restreint également l'accès humain aux données utilisateur Google, sauf lorsque cet accès est dûment autorisé, requis pour une assistance demandée par l'utilisateur, nécessaire à des fins de sécurité, exigé par la loi, ou autrement permis par la Google API Services User Data Policy. Ces principes s'appliquent tant aux informations reçues directement des API Google qu'aux informations dérivées de ces données, le cas échéant.">
              SHEFAR also restricts human access to Google user data except
              where such access is appropriately authorized, required for
              user-requested support, necessary for security purposes,
              required by law, or otherwise permitted under the Google API
              Services User Data Policy. These principles apply both to
              information received directly from Google APIs and, where
              applicable, to information derived from that data.
            </p>
          </article>

          <article id="user-control">
            <h2 data-fr="16. Contrôle de l'utilisateur">16. User Control</h2>
            <p data-fr="Les utilisateurs gardent le contrôle des services Google connectés à SHEFAR Dashboard. À tout moment, un utilisateur peut :">
              Users remain in control of the Google services connected to SHEFAR Dashboard. At any time, a user may:
            </p>
            <ul>
              <li data-fr="choisir de ne pas connecter un service Google ;">choose not to connect a Google service;</li>
              <li data-fr="refuser une demande d'autorisation OAuth ;">refuse an OAuth permission request;</li>
              <li data-fr="déconnecter un service Google ;">disconnect a Google service;</li>
              <li data-fr="révoquer l'autorisation Google de SHEFAR ;">revoke SHEFAR&apos;s Google authorization;</li>
              <li data-fr="demander la suppression des informations stockées ;">request deletion of stored information;</li>
              <li data-fr="contacter SHEFAR au sujet de l'utilisation des données utilisateur Google.">
                contact SHEFAR regarding the use of Google user data.
              </li>
            </ul>
            <p data-fr="Si une autorisation requise pour une fonctionnalité particulière du Dashboard est refusée ou révoquée, la fonctionnalité correspondante peut ne plus fonctionner, mais les autres fonctionnalités SHEFAR non liées peuvent rester disponibles.">
              If a permission required for a particular Dashboard feature
              is refused or revoked, the corresponding feature may no
              longer function, but unrelated SHEFAR functionality may
              remain available.
            </p>
          </article>

          <article id="other-info">
            <h2 data-fr="17. Autres informations personnelles">17. Other Personal Information</h2>
            <p data-fr="Outre les informations obtenues via les services Google connectés, SHEFAR peut traiter des informations limitées nécessaires à la création, la sécurisation et le fonctionnement d'un compte SHEFAR. Cela peut inclure :">
              In addition to information obtained from connected Google
              services, SHEFAR may process limited information necessary to
              create, secure and operate a SHEFAR account. This may
              include:
            </p>
            <ul>
              <li data-fr="les informations d'identification du compte ;">account identification information;</li>
              <li data-fr="les coordonnées fournies par l'utilisateur ;">contact information provided by the user;</li>
              <li data-fr="les informations d'authentification et de gestion de compte ;">
                authentication and account-management information;
              </li>
              <li data-fr="les informations techniques nécessaires à la sécurité ;">
                technical information necessary for security;
              </li>
              <li data-fr="les journaux d'application ;">application logs;</li>
              <li data-fr="les informations transmises volontairement lors d'un contact avec le support SHEFAR.">
                information voluntarily submitted when contacting SHEFAR support.
              </li>
            </ul>
            <p data-fr="Ces informations ne sont traitées que lorsque cela est nécessaire pour faire fonctionner, sécuriser et assister le service SHEFAR ou pour se conformer aux obligations légales applicables.">
              Such information is processed only where necessary to
              operate, secure and support the SHEFAR service or comply with
              applicable legal obligations.
            </p>
          </article>

          <article id="international">
            <h2 data-fr="18. Traitement international et prestataires de services">
              18. International Processing and Service Providers
            </h2>
            <p data-fr="Certains prestataires techniques utilisés pour faire fonctionner SHEFAR peuvent traiter des informations depuis une infrastructure située dans différents pays. Lorsque des données personnelles sont transférées à l'international, SHEFAR prend des mesures raisonnables pour garantir l'utilisation de garanties appropriées lorsque la législation applicable en matière de protection des données l'exige. Les prestataires de services sont tenus de traiter les informations uniquement conformément à leurs obligations contractuelles et à la loi applicable.">
              Some technical service providers used to operate SHEFAR may
              process information from infrastructure located in different
              countries. Where personal data is transferred
              internationally, SHEFAR takes reasonable steps to ensure that
              appropriate safeguards are used where required by applicable
              data-protection legislation. Service providers are expected
              to process information only according to their contractual
              obligations and applicable law.
            </p>
          </article>

          <article id="changes">
            <h2 data-fr="19. Modifications de cette politique de confidentialité">
              19. Changes to This Privacy Policy
            </h2>
            <p data-fr="SHEFAR peut mettre à jour cette politique de confidentialité lorsque nécessaire pour refléter :">
              SHEFAR may update this Privacy Policy when necessary to reflect:
            </p>
            <ul>
              <li data-fr="des modifications de SHEFAR Dashboard ;">changes to SHEFAR Dashboard;</li>
              <li data-fr="de nouvelles intégrations Google ou des modifications d'intégrations existantes ;">
                new or modified Google integrations;
              </li>
              <li data-fr="des modifications des pratiques de traitement des données ;">
                changes to data-processing practices;
              </li>
              <li data-fr="des exigences légales ou réglementaires ;">legal or regulatory requirements;</li>
              <li data-fr="des exigences de la politique de l'API Google ;">Google API policy requirements;</li>
              <li data-fr="des modifications de sécurité ou d'infrastructure.">security or infrastructure changes.</li>
            </ul>
            <p data-fr="Si SHEFAR modifie de manière substantielle la façon dont les données utilisateur Google sont consultées, utilisées, stockées ou partagées, la politique de confidentialité sera mise à jour avant la mise en œuvre de la nouvelle utilisation, lorsque cela est requis. Le cas échéant, il pourra également être demandé aux utilisateurs de consulter ou d'accepter les informations mises à jour avant que leurs données Google ne soient utilisées à une fin substantiellement différente. La dernière version de cette politique de confidentialité restera publiquement disponible sur le site web de SHEFAR.">
              If SHEFAR materially changes how Google user data is
              accessed, used, stored or shared, the Privacy Policy will be
              updated before the new use is implemented where required.
              Where applicable, users may also be asked to review or
              consent to updated information before their Google data is
              used for a materially different purpose. The latest version
              of this Privacy Policy will remain publicly available on the
              SHEFAR website.
            </p>
          </article>

          <article id="contact">
            <h2 data-fr="20. Contacter SHEFAR">20. Contact SHEFAR</h2>
            <p data-fr="Pour toute question concernant cette politique de confidentialité, les données de l'API Google, les services Google connectés, la suppression de données ou les droits en matière de confidentialité, veuillez contacter :">
              For questions about this Privacy Policy, Google API data,
              connected Google services, data deletion or privacy rights,
              please contact:
            </p>
            <p>
              SHEFAR
              <br />
              <span data-fr="E-mail : ">Email: </span><a href="mailto:support@shefar.fr">support@shefar.fr</a>
              <br />
              <span data-fr="Site web : ">Website: </span><a href="https://shefar.fr">shefar.fr</a>
            </p>
            <p data-fr="Les utilisateurs demandant la suppression de données utilisateur Google doivent indiquer clairement « Demande de suppression de données utilisateur Google » dans leur message afin que la demande puisse être identifiée et traitée correctement.">
              Users requesting deletion of Google user data should clearly
              indicate &quot;Google User Data Deletion Request&quot; in
              their message so that the request can be identified and
              processed appropriately.
            </p>
          </article>

          <article id="summary">
            <h2 data-fr="Résumé des pratiques relatives aux données Google">Summary of Google Data Practices</h2>
            <ul>
              <li><strong data-fr="Données Google Ads consultées :">Google Ads data accessed:</strong> <span data-fr="campagne, budget, impression, clic, coût, conversion et autres informations de reporting et de performance autorisées.">campaign, budget, impression, click, cost, conversion and other authorized reporting and performance information.</span></li>
              <li><strong data-fr="Données Google Business Profile consultées :">Google Business Profile data accessed:</strong> <span data-fr="établissements autorisés, informations de profil d'établissement, informations de visibilité locale et indicateurs de performance disponibles.">authorized business locations, business profile information, local visibility information and available performance metrics.</span></li>
              <li><strong data-fr="Finalité :">Purpose:</strong> <span data-fr="fournir des fonctionnalités de reporting, de suivi, d'analyse et de performance digitale directement au sein de SHEFAR Dashboard.">to provide reporting, monitoring, analysis and digital-performance features directly within SHEFAR Dashboard.</span></li>
              <li><strong data-fr="Stockage :">Storage:</strong> <span data-fr="uniquement lorsque cela est nécessaire pour fournir les fonctionnalités de SHEFAR, sous réserve de garanties techniques et organisationnelles appropriées.">only where necessary to provide SHEFAR functionality, subject to appropriate technical and organizational safeguards.</span></li>
              <li><strong data-fr="Partage :">Sharing:</strong> <span data-fr="aucune vente de données utilisateur Google ; un traitement limité par des prestataires techniques peut avoir lieu uniquement lorsque cela est nécessaire pour faire fonctionner et sécuriser SHEFAR.">no sale of Google user data; limited processing by technical service providers may occur only where necessary to operate and secure SHEFAR.</span></li>
              <li><strong data-fr="Publicité :">Advertising:</strong> <span data-fr="les données utilisateur Google ne sont ni vendues ni utilisées pour la publicité ciblée tierce, le retargeting ou la publicité par centres d'intérêt.">Google user data is not sold or used for third-party targeted advertising, retargeting or interest-based advertising.</span></li>
              <li><strong data-fr="Conservation :">Retention:</strong> <span data-fr="uniquement le temps nécessaire au service SHEFAR demandé, aux exigences de sécurité légitimes ou aux obligations légales applicables.">only for as long as necessary for the requested SHEFAR service, legitimate security requirements or applicable legal obligations.</span></li>
              <li><strong data-fr="Suppression :">Deletion:</strong> <span data-fr="les utilisateurs peuvent demander la suppression en contactant support@shefar.fr.">users may request deletion by contacting support@shefar.fr.</span></li>
              <li><strong data-fr="Autorisation Google :">Google authorization:</strong> <span data-fr="les utilisateurs peuvent révoquer l'accès de SHEFAR à tout moment depuis les paramètres de sécurité de leur compte Google.">users may revoke SHEFAR&apos;s access at any time through their Google Account security settings.</span></li>
              <li><strong data-fr="Limited Use :">Limited Use:</strong> <span data-fr="l'utilisation par SHEFAR des informations reçues des API Google respecte la Google API Services User Data Policy, y compris les exigences de Limited Use.">SHEFAR&apos;s use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.</span></li>
            </ul>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
