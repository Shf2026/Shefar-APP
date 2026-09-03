import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const titre = "Terms of Service — SHEFAR Dashboard";
const description =
  "Terms of Service for SHEFAR Dashboard: account access, connecting third-party Google services, liability and termination.";

export const metadata: Metadata = {
  title: titre,
  description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: titre,
    description,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="conteneur texte-etroit">
          <div className="legal-entete">
            <h1 data-fr="Conditions d'utilisation">Terms of Service</h1>
            <p className="legal-date" data-fr="Dernière mise à jour : 3 septembre 2026">
              Last updated: September 3, 2026
            </p>
          </div>

          <p data-fr="Bienvenue sur SHEFAR Dashboard.">Welcome to SHEFAR Dashboard.</p>
          <p data-fr="Les présentes conditions d'utilisation (les « Conditions ») régissent l'accès et l'utilisation du site web SHEFAR, de SHEFAR Dashboard, ainsi que des services, fonctionnalités, tableaux de bord, intégrations, analyses et outils mis à disposition par SHEFAR.">
            These Terms of Service (&quot;Terms&quot;) govern access to and
            use of the SHEFAR website, SHEFAR Dashboard, and the services,
            features, dashboards, integrations, analyses and tools made
            available by SHEFAR.
          </p>
          <p data-fr="En créant un compte, en accédant à SHEFAR Dashboard, en connectant un service tiers, ou en utilisant autrement le Service, vous reconnaissez avoir lu, compris et accepté les présentes Conditions. Si vous utilisez SHEFAR Dashboard pour le compte d'une entreprise, d'une organisation ou d'une autre entité juridique, vous déclarez disposer de l'autorité nécessaire pour accepter les présentes Conditions en son nom.">
            By creating an account, accessing SHEFAR Dashboard, connecting a
            third-party service, or otherwise using the Service, you
            acknowledge that you have read, understood and agreed to these
            Terms. If you use SHEFAR Dashboard on behalf of a company,
            organization or other legal entity, you represent that you have
            the authority to accept these Terms on its behalf.
          </p>
          <p data-fr="Si vous n'acceptez pas ces Conditions, vous ne devez pas utiliser SHEFAR Dashboard.">
            If you do not agree with these Terms, you must not use SHEFAR Dashboard.
          </p>

          <article>
            <h2 data-fr="1. À propos de SHEFAR Dashboard">1. About SHEFAR Dashboard</h2>
            <p data-fr="SHEFAR Dashboard est une application web professionnelle conçue pour aider les entreprises à centraliser, suivre et comprendre leur performance digitale. Selon les fonctionnalités disponibles pour l'utilisateur, SHEFAR Dashboard peut permettre de connecter et d'utiliser des données provenant de services tels que :">
              SHEFAR Dashboard is a professional web application designed to
              help businesses centralize, monitor and understand their
              digital performance. Depending on the features available to
              the user, SHEFAR Dashboard may allow users to connect and use
              data from services including:
            </p>
            <ul>
              <li data-fr="Google Ads ;">Google Ads;</li>
              <li data-fr="Google Business Profile ;">Google Business Profile;</li>
              <li data-fr="Google Analytics ;">Google Analytics;</li>
              <li data-fr="Google Search Console ;">Google Search Console;</li>
              <li data-fr="Google PageSpeed Insights ;">Google PageSpeed Insights;</li>
              <li data-fr="Chrome UX Report ;">Chrome UX Report;</li>
              <li data-fr="d'autres services ou sources de données de performance digitale pris en charge par SHEFAR.">
                other digital-performance services or data sources supported by SHEFAR.
              </li>
            </ul>
            <p data-fr="SHEFAR Dashboard peut organiser ces informations en tableaux de bord, rapports, indicateurs, alertes, résumés, analyses, recommandations et priorités. L'objectif du Service est de rendre les informations de performance digitale plus faciles à comprendre et à exploiter. SHEFAR Dashboard est principalement destiné à un usage professionnel et commercial.">
              SHEFAR Dashboard may organize this information into
              dashboards, reports, indicators, alerts, summaries, analyses,
              recommendations and priorities. The purpose of the Service is
              to make digital-performance information easier to understand
              and use. SHEFAR Dashboard is primarily intended for
              professional and business use.
            </p>
          </article>

          <article>
            <h2 data-fr="2. Acceptation des Conditions">2. Acceptance of the Terms</h2>
            <p data-fr="En utilisant SHEFAR Dashboard, vous acceptez de vous conformer à :">
              By using SHEFAR Dashboard, you agree to comply with:
            </p>
            <ul>
              <li data-fr="ces conditions d'utilisation ;">these Terms of Service;</li>
              <li data-fr="la politique de confidentialité de SHEFAR ;">the SHEFAR Privacy Policy;</li>
              <li data-fr="toute condition supplémentaire présentée pour une fonctionnalité ou un service particulier ;">
                any additional terms presented for a particular feature or service;
              </li>
              <li data-fr="les lois et réglementations applicables ;">applicable laws and regulations;</li>
              <li data-fr="les règles applicables des plateformes tierces lorsque vous connectez un service tiers.">
                applicable third-party platform rules when you connect a third-party service.
              </li>
            </ul>
            <p data-fr="Si vous agissez pour le compte d'une entreprise, vous déclarez et garantissez être autorisé à engager cette entreprise au titre des présentes Conditions.">
              If you are acting on behalf of a business, you represent and
              warrant that you are authorized to bind that business to
              these Terms.
            </p>
          </article>

          <article>
            <h2 data-fr="3. Éligibilité">3. Eligibility</h2>
            <p data-fr="Vous ne pouvez utiliser SHEFAR Dashboard que si :">You may use SHEFAR Dashboard only if:</p>
            <ul>
              <li data-fr="vous avez la capacité juridique de conclure un contrat contraignant ;">
                you are legally capable of entering into a binding agreement;
              </li>
              <li data-fr="vous êtes autorisé à agir pour le compte de l'entreprise ou de l'organisation concernée, le cas échéant ;">
                you are authorized to act on behalf of the relevant business or organization where applicable;
              </li>
              <li data-fr="votre utilisation du Service est conforme aux lois applicables ;">
                your use of the Service complies with applicable laws;
              </li>
              <li data-fr="vous êtes autorisé à accéder à tout compte, compte publicitaire, profil d'établissement, site web ou autre ressource numérique que vous connectez à SHEFAR Dashboard.">
                you are authorized to access any account, advertising account, business profile, website or other digital resource that you connect to SHEFAR Dashboard.
              </li>
            </ul>
            <p data-fr="SHEFAR Dashboard n'est pas conçu comme un service destiné aux enfants.">
              SHEFAR Dashboard is not designed as a service for children.
            </p>
          </article>

          <article>
            <h2 data-fr="4. Usage professionnel">4. Professional Use</h2>
            <p data-fr="SHEFAR Dashboard est principalement conçu pour les entreprises, professionnels, organisations et leurs représentants autorisés. Lors de l'utilisation de SHEFAR Dashboard dans le cadre d'une organisation, vous êtes responsable de vous assurer que :">
              SHEFAR Dashboard is designed primarily for businesses,
              professionals, organizations and their authorized
              representatives. When using SHEFAR Dashboard in connection
              with an organization, you are responsible for ensuring that:
            </p>
            <ul>
              <li data-fr="vous avez l'autorité nécessaire pour utiliser les données concernées ;">
                you have authority to use the relevant data;
              </li>
              <li data-fr="vous avez l'autorité nécessaire pour connecter les comptes tiers concernés ;">
                you have authority to connect the relevant third-party accounts;
              </li>
              <li data-fr="votre utilisation est conforme aux politiques internes de votre organisation ;">
                your use complies with your organization&apos;s internal policies;
              </li>
              <li data-fr="votre utilisation est conforme aux exigences applicables en matière de protection des données et de confidentialité.">
                your use complies with applicable data-protection and confidentiality requirements.
              </li>
            </ul>
          </article>

          <article>
            <h2 data-fr="5. Compte SHEFAR">5. SHEFAR Account</h2>
            <p data-fr="Certaines fonctionnalités peuvent nécessiter la création d'un compte SHEFAR Dashboard. Vous acceptez de fournir des informations exactes lors de la création et de la mise à jour de votre compte. Vous êtes responsable de :">
              Certain features may require the creation of a SHEFAR
              Dashboard account. You agree to provide accurate information
              when creating and maintaining your account. You are
              responsible for:
            </p>
            <ul>
              <li data-fr="préserver la confidentialité de vos identifiants de compte ;">
                maintaining the confidentiality of your account credentials;
              </li>
              <li data-fr="protéger l'accès à votre compte ;">protecting access to your account;</li>
              <li data-fr="utiliser des méthodes d'authentification suffisamment sécurisées ;">
                using sufficiently secure authentication methods;
              </li>
              <li data-fr="veiller à ce que les utilisateurs autorisés respectent les présentes Conditions ;">
                ensuring that authorized users comply with these Terms;
              </li>
              <li data-fr="informer SHEFAR si vous soupçonnez un accès non autorisé à votre compte.">
                notifying SHEFAR if you suspect unauthorized access to your account.
              </li>
            </ul>
            <p data-fr="Vous ne devez pas sciemment partager votre compte avec des personnes non autorisées. SHEFAR peut mettre en œuvre des mesures d'authentification, des contrôles d'accès ou des exigences de sécurité supplémentaires lorsque cela est nécessaire pour protéger les utilisateurs et le Service.">
              You must not knowingly share your account with unauthorized
              individuals. SHEFAR may implement authentication, access
              controls or additional security requirements where necessary
              to protect users and the Service.
            </p>
          </article>

          <article>
            <h2 data-fr="6. Utilisateurs autorisés">6. Authorized Users</h2>
            <p data-fr="Une organisation cliente peut autoriser plusieurs utilisateurs à accéder à SHEFAR Dashboard lorsque le plan ou la fonctionnalité applicable le permet. L'organisation est responsable de :">
              A customer organization may allow several authorized users to
              access SHEFAR Dashboard where the applicable plan or
              functionality permits this. The organization is responsible
              for:
            </p>
            <ul>
              <li data-fr="déterminer qui peut accéder à son compte SHEFAR ;">determining who may access its SHEFAR account;</li>
              <li data-fr="attribuer les droits d'accès appropriés ;">assigning appropriate access rights;</li>
              <li data-fr="retirer l'accès lorsqu'une personne n'est plus autorisée ;">
                removing access when an individual is no longer authorized;
              </li>
              <li data-fr="s'assurer que chaque utilisateur respecte les présentes Conditions.">
                ensuring that each user complies with these Terms.
              </li>
            </ul>
            <p data-fr="SHEFAR peut restreindre, suspendre ou retirer l'accès d'un utilisateur individuel lorsque cela est nécessaire à des fins de sécurité ou de conformité.">
              SHEFAR may restrict, suspend or remove an individual
              user&apos;s access where necessary for security or compliance
              purposes.
            </p>
          </article>

          <article>
            <h2 data-fr="7. Connexion de services tiers">7. Connecting Third-Party Services</h2>
            <p data-fr="SHEFAR Dashboard peut permettre aux utilisateurs de connecter des plateformes et services tiers. Cela peut inclure des services Google et d'autres prestataires de performance digitale. Lors de la connexion d'un service tiers, vous déclarez que :">
              SHEFAR Dashboard may allow users to connect third-party
              platforms and services. These may include Google services and
              other digital-performance providers. When connecting a
              third-party service, you represent that:
            </p>
            <ul>
              <li data-fr="vous êtes autorisé à accéder au compte connecté ;">you are authorized to access the connected account;</li>
              <li data-fr="vous êtes autorisé à donner à SHEFAR l'accès demandé ;">
                you are permitted to provide SHEFAR with the requested access;
              </li>
              <li data-fr="votre connexion ne viole aucune obligation contractuelle, légale ou réglementaire ;">
                your connection does not violate any contractual, legal or regulatory obligation;
              </li>
              <li data-fr="vous n'utiliserez pas SHEFAR pour accéder à des données appartenant à un tiers sans autorisation.">
                you will not use SHEFAR to access data belonging to a third party without authorization.
              </li>
            </ul>
            <p data-fr="SHEFAR n'est pas responsable des connexions non autorisées initiées par des utilisateurs ne disposant pas de l'autorisation appropriée pour accéder au compte tiers concerné.">
              SHEFAR is not responsible for unauthorized connections
              initiated by users who do not have appropriate permission to
              access the relevant third-party account.
            </p>
          </article>

          <article>
            <h2 data-fr="8. Google OAuth 2.0">8. Google OAuth 2.0</h2>
            <p data-fr="SHEFAR Dashboard peut utiliser Google OAuth 2.0 pour permettre aux utilisateurs de connecter les services Google pris en charge. Lors de la connexion d'un compte Google, l'utilisateur est redirigé vers l'interface d'autorisation de Google et peut consulter les autorisations demandées par SHEFAR. L'utilisateur décide s'il souhaite autoriser la connexion.">
              SHEFAR Dashboard may use Google OAuth 2.0 to allow users to
              connect supported Google services. When connecting a Google
              Account, the user is redirected to Google&apos;s authorization
              interface and may review the permissions requested by SHEFAR.
              The user decides whether to authorize the connection.
            </p>
            <p data-fr="SHEFAR ne demande jamais aux utilisateurs de lui fournir directement leur mot de passe de compte Google. Google gère le processus d'authentification et d'autorisation. L'utilisateur peut révoquer l'autorisation de SHEFAR depuis les paramètres de son compte Google à tout moment.">
              SHEFAR does not ask users to provide their Google Account
              password directly to SHEFAR. Google manages the
              authentication and authorization process. The user may revoke
              SHEFAR&apos;s authorization through their Google Account
              settings at any time.
            </p>
          </article>

          <article>
            <h2 data-fr="9. Intégration Google Ads">9. Google Ads Integration</h2>
            <p data-fr="Lorsque cette fonctionnalité est activée, SHEFAR Dashboard peut permettre aux utilisateurs de connecter des comptes Google Ads autorisés. Cette fonctionnalité peut permettre à SHEFAR Dashboard de récupérer et d'afficher des informations telles que :">
              Where enabled, SHEFAR Dashboard may allow users to connect
              authorized Google Ads accounts. This functionality may enable
              SHEFAR Dashboard to retrieve and display information such as:
            </p>
            <ul>
              <li data-fr="les comptes Google Ads ;">Google Ads accounts;</li>
              <li data-fr="les identifiants clients ;">Customer IDs;</li>
              <li data-fr="les campagnes ;">campaigns;</li>
              <li data-fr="les groupes d'annonces ;">ad groups;</li>
              <li data-fr="le statut des campagnes ;">campaign status;</li>
              <li data-fr="les budgets ;">budgets;</li>
              <li data-fr="les dépenses publicitaires ;">advertising spend;</li>
              <li data-fr="les coûts ;">costs;</li>
              <li data-fr="les impressions ;">impressions;</li>
              <li data-fr="les clics ;">clicks;</li>
              <li data-fr="les taux de clics ;">click-through rates;</li>
              <li data-fr="les conversions ;">conversions;</li>
              <li data-fr="les valeurs de conversion, lorsqu'elles sont disponibles ;">conversion values where available;</li>
              <li data-fr="les taux de conversion ;">conversion rates;</li>
              <li data-fr="le coût par conversion ;">cost per conversion;</li>
              <li data-fr="les tendances de performance ;">performance trends;</li>
              <li data-fr="les périodes de reporting ;">reporting periods;</li>
              <li data-fr="d'autres indicateurs de performance publicitaire.">other advertising-performance indicators.</li>
            </ul>
            <p data-fr="Les informations exactement disponibles dépendent :">The exact information available depends on:</p>
            <ul>
              <li data-fr="des API de Google ;">Google&apos;s APIs;</li>
              <li data-fr="de la configuration du compte de l'utilisateur ;">the user&apos;s account configuration;</li>
              <li data-fr="des autorisations accordées par l'utilisateur ;">permissions granted by the user;</li>
              <li data-fr="des fonctionnalités SHEFAR disponibles.">available SHEFAR functionality.</li>
            </ul>
            <p data-fr="L'objectif de l'intégration est d'aider les utilisateurs à suivre et analyser leur propre performance Google Ads.">
              The purpose of the integration is to help users monitor and analyze their own Google Ads performance.
            </p>
          </article>

          <article>
            <h2 data-fr="10. Intégration Google Business Profile">10. Google Business Profile Integration</h2>
            <p data-fr="Lorsque cette fonctionnalité est activée, SHEFAR Dashboard peut permettre aux utilisateurs de connecter des comptes ou établissements Google Business Profile autorisés. Cette fonctionnalité peut permettre à SHEFAR de récupérer et d'afficher des informations relatives à :">
              Where enabled, SHEFAR Dashboard may allow users to connect
              authorized Google Business Profile accounts or locations.
              This functionality may allow SHEFAR to retrieve and display
              information relating to:
            </p>
            <ul>
              <li data-fr="les comptes Business Profile autorisés ;">authorized Business Profile accounts;</li>
              <li data-fr="les établissements ;">business locations;</li>
              <li data-fr="les noms d'établissement ;">business names;</li>
              <li data-fr="les identifiants d'établissement ;">location identifiers;</li>
              <li data-fr="les adresses ;">addresses;</li>
              <li data-fr="les catégories ;">categories;</li>
              <li data-fr="les horaires d'ouverture ;">opening hours;</li>
              <li data-fr="les sites web ;">websites;</li>
              <li data-fr="les informations publiques de l'établissement ;">public business information;</li>
              <li data-fr="les indicateurs de performance d'établissement mis à disposition par Google ;">
                location-performance metrics made available by Google;
              </li>
              <li data-fr="les indicateurs de visibilité locale ;">local visibility indicators;</li>
              <li data-fr="d'autres informations nécessaires pour afficher ou analyser la présence locale d'une entreprise.">
                other information required to display or analyze a business&apos;s local presence.
              </li>
            </ul>
            <p data-fr="Les utilisateurs ne doivent connecter que des comptes ou établissements Business Profile qu'ils possèdent ou sont autorisés à gérer.">
              Users must only connect Business Profile accounts or locations that they own or are authorized to manage.
            </p>
          </article>

          <article>
            <h2 data-fr="11. Autres services Google">11. Other Google Services</h2>
            <p data-fr="SHEFAR Dashboard peut prendre en charge d'autres services Google lorsque cela est nécessaire pour fournir une fonctionnalité clairement identifiée à destination de l'utilisateur. Cela peut inclure des services tels que :">
              SHEFAR Dashboard may support other Google services where
              necessary to provide clearly identified user-facing
              functionality. These may include services such as:
            </p>
            <ul>
              <li data-fr="Google Analytics ;">Google Analytics;</li>
              <li data-fr="Google Search Console ;">Google Search Console;</li>
              <li data-fr="PageSpeed Insights ;">PageSpeed Insights;</li>
              <li data-fr="Chrome UX Report.">Chrome UX Report.</li>
            </ul>
            <p data-fr="Lorsque des autorisations OAuth sont requises, SHEFAR entend ne demander que les autorisations raisonnablement nécessaires à la fonctionnalité demandée. La disponibilité d'une intégration ne signifie pas que chaque utilisateur SHEFAR accorde automatiquement l'accès à ce service.">
              Where OAuth permissions are required, SHEFAR intends to
              request only permissions reasonably necessary for the
              requested functionality. Availability of an integration does
              not mean that every SHEFAR user automatically grants access
              to that service.
            </p>
          </article>

          <article>
            <h2 data-fr="12. Conformité aux API Google">12. Google API Compliance</h2>
            <p data-fr="SHEFAR entend faire fonctionner ses intégrations Google conformément aux politiques et exigences Google applicables. L'utilisation et le transfert par SHEFAR des informations reçues des API Google respecteront la Google API Services User Data Policy, y compris les exigences de Limited Use, le cas échéant. Les utilisateurs doivent également se conformer aux conditions et politiques applicables de Google lors de l'utilisation des services Google via SHEFAR Dashboard.">
              SHEFAR intends to operate its Google integrations in
              accordance with applicable Google policies and requirements.
              SHEFAR&apos;s use and transfer of information received from
              Google APIs will adhere to the Google API Services User Data
              Policy, including the Limited Use requirements, where
              applicable. Users must also comply with the applicable terms
              and policies of Google when using Google services through
              SHEFAR Dashboard.
            </p>
            <p data-fr="SHEFAR peut modifier, restreindre, suspendre ou interrompre une intégration Google lorsque cela est nécessaire pour :">
              SHEFAR may modify, restrict, suspend or discontinue a Google integration where necessary to:
            </p>
            <ul>
              <li data-fr="se conformer aux exigences de Google ;">comply with Google requirements;</li>
              <li data-fr="se conformer aux lois applicables ;">comply with applicable laws;</li>
              <li data-fr="répondre aux modifications de l'API ;">respond to API changes;</li>
              <li data-fr="protéger les utilisateurs ou le Service ;">protect users or the Service;</li>
              <li data-fr="répondre aux exigences de sécurité ;">address security requirements;</li>
              <li data-fr="maintenir la compatibilité technique.">maintain technical compatibility.</li>
            </ul>
          </article>

          <article>
            <h2 data-fr="13. Accès minimum nécessaire">13. Minimum Necessary Access</h2>
            <p data-fr="SHEFAR vise à ne demander l'accès qu'aux données raisonnablement nécessaires pour fournir la fonctionnalité sélectionnée par l'utilisateur. La disponibilité d'une API Google ou d'une autorisation ne confère pas à SHEFAR un droit illimité d'utiliser les informations associées. Les informations reçues via les API Google sont soumises aux finalités, restrictions et garanties décrites dans la politique de confidentialité de SHEFAR.">
              SHEFAR aims to request access only to data reasonably
              necessary to provide the functionality selected by the user.
              The availability of a Google API or permission does not give
              SHEFAR an unrestricted right to use the associated
              information. Information received through Google APIs is
              subject to the purposes, restrictions and safeguards
              described in the SHEFAR Privacy Policy.
            </p>
          </article>

          <article>
            <h2 data-fr="14. Contrôle de l'utilisateur sur les connexions Google">14. User Control Over Google Connections</h2>
            <p data-fr="Les utilisateurs restent responsables du contrôle des services Google connectés à SHEFAR Dashboard. Lorsque cela est disponible, les utilisateurs peuvent :">
              Users remain responsible for controlling the Google services
              connected to SHEFAR Dashboard. Where available, users may:
            </p>
            <ul>
              <li data-fr="choisir de connecter ou non un service Google ;">choose whether to connect a Google service;</li>
              <li data-fr="accepter ou refuser les autorisations demandées ;">accept or refuse requested permissions;</li>
              <li data-fr="déconnecter un service de SHEFAR Dashboard ;">disconnect a service from SHEFAR Dashboard;</li>
              <li data-fr="révoquer l'autorisation de SHEFAR via Google ;">revoke SHEFAR&apos;s authorization through Google;</li>
              <li data-fr="demander la suppression des données associées.">request deletion of associated data.</li>
            </ul>
            <p data-fr="Révoquer une autorisation Google peut empêcher certaines fonctionnalités de SHEFAR de fonctionner.">
              Revoking a Google authorization may prevent some SHEFAR features from functioning.
            </p>
          </article>

          <article>
            <h2 data-fr="15. Vos données">15. Your Data</h2>
            <p data-fr="Vous conservez vos droits sur les données d'entreprise, les informations de compte et autre contenu que vous fournissez licitement à SHEFAR Dashboard ou que vous y connectez. L'utilisation de SHEFAR ne transfère pas la propriété de vos données d'entreprise sous-jacentes à SHEFAR. Vous accordez à SHEFAR les droits limités nécessaires pour :">
              You retain your rights in the business data, account
              information and other content that you lawfully provide to
              or connect with SHEFAR Dashboard. Using SHEFAR does not
              transfer ownership of your underlying business data to
              SHEFAR. You grant SHEFAR the limited rights necessary to:
            </p>
            <ul>
              <li data-fr="accéder aux données autorisées ;">access authorized data;</li>
              <li data-fr="traiter ces données ;">process that data;</li>
              <li data-fr="stocker les données lorsque nécessaire ;">store data where necessary;</li>
              <li data-fr="organiser les données ;">organize data;</li>
              <li data-fr="calculer les indicateurs de performance ;">calculate performance indicators;</li>
              <li data-fr="présenter les données dans les tableaux de bord ;">present data in dashboards;</li>
              <li data-fr="générer des analyses, alertes et résumés ;">generate analyses, alerts and summaries;</li>
              <li data-fr="maintenir et sécuriser le Service ;">maintain and secure the Service;</li>
              <li data-fr="fournir la fonctionnalité que vous avez demandée.">provide the functionality requested by you.</li>
            </ul>
            <p data-fr="Ces droits n'existent que dans la mesure nécessaire pour faire fonctionner et fournir SHEFAR Dashboard ou tel qu'autrement permis par la politique de confidentialité.">
              These rights exist only to the extent necessary to operate
              and provide SHEFAR Dashboard or as otherwise permitted under
              the Privacy Policy.
            </p>
          </article>

          <article>
            <h2 data-fr="16. Données personnelles">16. Personal Data</h2>
            <p data-fr="Les données personnelles traitées via SHEFAR Dashboard sont gérées conformément à la politique de confidentialité de SHEFAR et aux exigences applicables en matière de protection des données. La politique de confidentialité explique, entre autres : quelles informations SHEFAR peut traiter ; les données Google consultées par SHEFAR ; les finalités du traitement ; le stockage ; la sécurité ; les prestataires de services ; la conservation ; la suppression ; les droits des utilisateurs ; la révocation des autorisations Google ; la conformité à la Google API Services User Data Policy ; et les exigences de Limited Use.">
              Personal data processed through SHEFAR Dashboard is handled
              in accordance with the SHEFAR Privacy Policy and applicable
              data-protection requirements. The Privacy Policy explains,
              among other matters: what information SHEFAR may process;
              Google data accessed by SHEFAR; purposes of processing;
              storage; security; service providers; retention; deletion;
              user rights; revocation of Google permissions; Google API
              Services User Data Policy compliance; and Limited Use
              requirements.
            </p>
            <p data-fr="Les utilisateurs doivent consulter la politique de confidentialité avant de connecter un compte Google ou un autre service tiers.">
              Users should review the Privacy Policy before connecting a Google Account or other third-party service.
            </p>
          </article>

          <article>
            <h2 data-fr="17. Responsabilité de l'utilisateur pour les données connectées">
              17. User Responsibility for Connected Data
            </h2>
            <p data-fr="Vous êtes responsable de vous assurer que vous êtes légalement autorisé à traiter et utiliser toutes les données que vous mettez à disposition de SHEFAR Dashboard. Vous ne devez pas utiliser SHEFAR pour :">
              You are responsible for ensuring that you are legally
              entitled to process and use all data that you make available
              to SHEFAR Dashboard. You must not use SHEFAR to:
            </p>
            <ul>
              <li data-fr="accéder au compte d'une autre personne sans autorisation ;">
                access someone else&apos;s account without permission;
              </li>
              <li data-fr="accéder à des informations d'entreprise confidentielles sans autorisation ;">
                access confidential business information without authorization;
              </li>
              <li data-fr="contourner les contrôles d'accès ;">circumvent access controls;</li>
              <li data-fr="collecter illicitement des informations personnelles ;">unlawfully collect personal information;</li>
              <li data-fr="traiter des informations en violation de la loi applicable ;">
                process information in violation of applicable law;
              </li>
              <li data-fr="porter atteinte aux droits de propriété intellectuelle ;">
                infringe intellectual-property rights;
              </li>
              <li data-fr="violer des obligations contractuelles de confidentialité.">
                violate contractual confidentiality obligations.
              </li>
            </ul>
          </article>

          <article>
            <h2 data-fr="18. Exactitude des données tierces">18. Accuracy of Third-Party Data</h2>
            <p data-fr="Une grande partie des informations affichées par SHEFAR Dashboard peut provenir de plateformes tierces. SHEFAR ne crée ni ne contrôle les données sous-jacentes fournies par ces plateformes. Les données affichées dans SHEFAR Dashboard peuvent donc dépendre :">
              Much of the information displayed by SHEFAR Dashboard may
              originate from third-party platforms. SHEFAR does not create
              or control the underlying data provided by those platforms.
              Data displayed in SHEFAR Dashboard may therefore depend on:
            </p>
            <ul>
              <li data-fr="de la disponibilité des API tierces ;">third-party API availability;</li>
              <li data-fr="des délais de reporting ;">reporting delays;</li>
              <li data-fr="des règles d'attribution ;">attribution rules;</li>
              <li data-fr="de la configuration du compte ;">account configuration;</li>
              <li data-fr="des modifications apportées par les prestataires tiers ;">changes made by third-party providers;</li>
              <li data-fr="des limitations des API ;">API limitations;</li>
              <li data-fr="de la fréquence d'actualisation des données ;">data refresh frequency;</li>
              <li data-fr="de problèmes techniques temporaires.">temporary technical issues.</li>
            </ul>
            <p data-fr="SHEFAR ne garantit pas que les données tierces seront toujours complètes, instantanées, exemptes d'erreurs ou identiques aux informations affichées directement sur la plateforme tierce à un instant donné.">
              SHEFAR does not guarantee that third-party data will always
              be complete, instantaneous, error-free or identical to
              information displayed directly in the third-party platform at
              a particular moment.
            </p>
          </article>

          <article>
            <h2 data-fr="19. Tableaux de bord, analyses et calculs">19. Dashboards, Analytics and Calculations</h2>
            <p data-fr="SHEFAR Dashboard peut traiter les données source pour fournir :">SHEFAR Dashboard may process source data to provide:</p>
            <ul>
              <li data-fr="des indicateurs clés de performance ;">KPIs;</li>
              <li data-fr="des tendances ;">trends;</li>
              <li data-fr="des comparaisons ;">comparisons;</li>
              <li data-fr="des ratios ;">ratios;</li>
              <li data-fr="des alertes ;">alerts;</li>
              <li data-fr="des résumés ;">summaries;</li>
              <li data-fr="des visualisations ;">visualizations;</li>
              <li data-fr="des scores de performance ;">performance scores;</li>
              <li data-fr="des opportunités identifiées ;">identified opportunities;</li>
              <li data-fr="des priorités identifiées ;">identified priorities;</li>
              <li data-fr="d'autres analyses.">other analyses.</li>
            </ul>
            <p data-fr="Les valeurs calculées peuvent dépendre de la disponibilité et de la qualité des données source. Les utilisateurs doivent vérifier les informations critiques avant de prendre des décisions financières, commerciales, opérationnelles ou juridiques importantes.">
              Calculated values may depend on the availability and quality
              of the source data. Users should verify critical information
              before making significant financial, commercial, operational
              or legal decisions.
            </p>
          </article>

          <article>
            <h2 data-fr="20. Recommandations et analyses">20. Recommendations and Insights</h2>
            <p data-fr="SHEFAR Dashboard peut générer des recommandations, priorités, avertissements, observations ou analyses. Ces fonctionnalités visent à aider les utilisateurs à comprendre leur performance digitale. Elles ne constituent pas une garantie de résultats futurs. Une recommandation fournie par SHEFAR ne garantit pas :">
              SHEFAR Dashboard may generate recommendations, priorities,
              warnings, observations or analytical insights. These features
              are intended to assist users in understanding digital
              performance. They do not constitute a guarantee of future
              results. A recommendation provided by SHEFAR does not
              guarantee:
            </p>
            <ul>
              <li data-fr="une augmentation du chiffre d'affaires ;">increased revenue;</li>
              <li data-fr="des prospects supplémentaires ;">additional leads;</li>
              <li data-fr="une amélioration de la performance publicitaire ;">increased advertising performance;</li>
              <li data-fr="une amélioration du classement ;">improved rankings;</li>
              <li data-fr="une amélioration de la visibilité locale ;">improved local visibility;</li>
              <li data-fr="des résultats de conversion spécifiques ;">specific conversion results;</li>
              <li data-fr="un retour sur investissement publicitaire spécifique ;">specific return on advertising spend;</li>
              <li data-fr="un résultat commercial particulier.">any particular commercial outcome.</li>
            </ul>
            <p data-fr="Les décisions commerciales et publicitaires restent de la responsabilité de l'utilisateur.">
              Business and advertising decisions remain the responsibility of the user.
            </p>
          </article>

          <article>
            <h2 data-fr="21. Analyse automatisée et intelligence artificielle">
              21. Automated Analysis and Artificial Intelligence
            </h2>
            <p data-fr="Certaines fonctionnalités de SHEFAR peuvent utiliser un traitement automatisé, des algorithmes ou des technologies d'intelligence artificielle pour organiser, résumer ou interpréter des informations. Ces fonctionnalités peuvent être utilisées pour fournir des fonctionnalités destinées à l'utilisateur telles que : des résumés ; des alertes ; des variations détectées ; des observations de performance ; des opportunités ; des priorités suggérées.">
              Some SHEFAR features may use automated processing, algorithms
              or artificial-intelligence technologies to organize,
              summarize or interpret information. Such functionality may
              be used to provide user-facing features such as: summaries;
              alerts; detected variations; performance observations;
              opportunities; suggested priorities.
            </p>
            <p data-fr="Les résultats automatisés peuvent contenir des inexactitudes ou des conclusions incomplètes. Les utilisateurs doivent faire preuve de jugement professionnel et vérifier les informations importantes avant de se fier aux résultats automatisés pour des décisions importantes. Les informations personnelles obtenues via les API Google sont traitées conformément aux restrictions décrites dans la politique de confidentialité de SHEFAR et aux exigences applicables de l'API Google.">
              Automated outputs may contain inaccuracies or incomplete
              conclusions. Users should apply professional judgment and
              verify significant information before relying on automated
              outputs for important decisions. Personal information
              obtained through Google APIs is handled in accordance with
              the restrictions described in the SHEFAR Privacy Policy and
              applicable Google API requirements.
            </p>
          </article>

          <article>
            <h2 data-fr="22. Aucun conseil juridique, financier ou fiscal professionnel">
              22. No Professional Legal, Financial or Tax Advice
            </h2>
            <p data-fr="Sauf accord écrit exprès contraire, SHEFAR Dashboard est un service de performance digitale et de reporting. Les informations fournies via SHEFAR Dashboard ne constituent pas un conseil juridique, comptable, fiscal, en investissement ou financier réglementé. Les utilisateurs doivent obtenir un conseil professionnel approprié lorsque nécessaire.">
              Unless expressly agreed otherwise in writing, SHEFAR
              Dashboard is a digital-performance and reporting service.
              Information provided through SHEFAR Dashboard does not
              constitute legal advice, accounting advice, tax advice,
              investment advice, or regulated financial advice. Users
              should obtain appropriate professional advice where required.
            </p>
          </article>

          <article>
            <h2 data-fr="23. Performance publicitaire">23. Advertising Performance</h2>
            <p data-fr="La performance publicitaire est influencée par de nombreux facteurs hors du contrôle de SHEFAR, notamment :">
              Advertising performance is influenced by many factors outside SHEFAR&apos;s control, including:
            </p>
            <ul>
              <li data-fr="la concurrence ;">competition;</li>
              <li data-fr="les budgets publicitaires ;">advertising budgets;</li>
              <li data-fr="les stratégies d'enchères ;">bidding strategies;</li>
              <li data-fr="la demande du marché ;">market demand;</li>
              <li data-fr="le comportement de recherche ;">search behavior;</li>
              <li data-fr="la qualité du site web ;">website quality;</li>
              <li data-fr="la tarification ;">pricing;</li>
              <li data-fr="le ciblage géographique ;">geographic targeting;</li>
              <li data-fr="la saisonnalité ;">seasonality;</li>
              <li data-fr="les systèmes et algorithmes de Google ;">Google systems and algorithms;</li>
              <li data-fr="l'historique du compte annonceur ;">advertiser account history;</li>
              <li data-fr="le suivi des conversions ;">conversion tracking;</li>
              <li data-fr="l'attractivité du produit ou du service.">product or service attractiveness.</li>
            </ul>
            <p data-fr="SHEFAR ne peut garantir un résultat publicitaire particulier.">
              SHEFAR cannot guarantee a particular advertising result.
            </p>
          </article>

          <article>
            <h2 data-fr="24. Recherche et visibilité locale">24. Search and Local Visibility</h2>
            <p data-fr="De même, SHEFAR ne peut garantir :">Similarly, SHEFAR cannot guarantee:</p>
            <ul>
              <li data-fr="un classement organique particulier ;">a particular organic ranking;</li>
              <li data-fr="une position Google Business Profile spécifique ;">a specific Google Business Profile position;</li>
              <li data-fr="un volume de trafic particulier ;">a particular volume of traffic;</li>
              <li data-fr="un nombre particulier d'appels ou de prospects ;">a particular number of calls or leads;</li>
              <li data-fr="l'inclusion ou la recommandation dans un résultat de recherche ou généré par IA particulier.">
                inclusion or recommendation in a particular search or AI-generated result.
              </li>
            </ul>
            <p data-fr="Les moteurs de recherche et plateformes tierces contrôlent leurs propres systèmes de classement et algorithmes.">
              Search engines and third-party platforms control their own ranking systems and algorithms.
            </p>
          </article>

          <article>
            <h2 data-fr="25. Disponibilité du Service">25. Availability of the Service</h2>
            <p data-fr="SHEFAR s'efforce de maintenir SHEFAR Dashboard disponible et opérationnel. Toutefois, un accès ininterrompu ne peut être garanti. Le Service peut occasionnellement être indisponible en raison de :">
              SHEFAR aims to keep SHEFAR Dashboard available and
              operational. However, uninterrupted access cannot be
              guaranteed. The Service may occasionally be unavailable
              because of:
            </p>
            <ul>
              <li data-fr="la maintenance ;">maintenance;</li>
              <li data-fr="les mises à jour ;">updates;</li>
              <li data-fr="des incidents d'infrastructure ;">infrastructure incidents;</li>
              <li data-fr="des mesures de sécurité ;">security measures;</li>
              <li data-fr="des interruptions chez des tiers ;">third-party outages;</li>
              <li data-fr="des défaillances d'API ;">API failures;</li>
              <li data-fr="des pannes Internet ;">Internet failures;</li>
              <li data-fr="des cas de force majeure ;">force majeure events;</li>
              <li data-fr="des modifications imposées par des prestataires tiers.">changes imposed by third-party providers;</li>
            </ul>
            <p data-fr="Lorsque cela est raisonnablement possible, SHEFAR peut prendre des mesures pour minimiser les perturbations.">
              Where reasonably possible, SHEFAR may take steps to minimize disruption.
            </p>
          </article>

          <article>
            <h2 data-fr="26. Modifications du Service">26. Changes to the Service</h2>
            <p data-fr="SHEFAR peut modifier SHEFAR Dashboard au fil du temps. Cela peut inclure :">
              SHEFAR may modify SHEFAR Dashboard over time. This may include:
            </p>
            <ul>
              <li data-fr="l'ajout de fonctionnalités ;">adding features;</li>
              <li data-fr="l'amélioration des fonctionnalités existantes ;">improving existing functionality;</li>
              <li data-fr="la modification des tableaux de bord ;">changing dashboards;</li>
              <li data-fr="la mise à jour des calculs ;">updating calculations;</li>
              <li data-fr="la modification des intégrations ;">modifying integrations;</li>
              <li data-fr="la suppression de fonctionnalités obsolètes ;">removing obsolete features;</li>
              <li data-fr="l'ajustement des limitations techniques ;">adjusting technical limitations;</li>
              <li data-fr="la modification des éléments d'interface ;">changing interface elements;</li>
              <li data-fr="l'introduction de nouveaux modules.">introducing new modules.</li>
            </ul>
            <p data-fr="SHEFAR peut également modifier des fonctionnalités en réponse à des changements effectués par Google ou d'autres plateformes tierces.">
              SHEFAR may also modify features in response to changes made by Google or other third-party platforms.
            </p>
          </article>

          <article>
            <h2 data-fr="27. Services tiers">27. Third-Party Services</h2>
            <p data-fr="SHEFAR Dashboard dépend en partie de services exploités par des tiers. SHEFAR ne contrôle pas ces tiers et n'est pas responsable de :">
              SHEFAR Dashboard depends in part on services operated by
              third parties. SHEFAR does not control those third parties
              and is not responsible for their:
            </p>
            <ul>
              <li data-fr="leur disponibilité ;">availability;</li>
              <li data-fr="leur tarification ;">pricing;</li>
              <li data-fr="leur fonctionnalité ;">functionality;</li>
              <li data-fr="leurs politiques ;">policies;</li>
              <li data-fr="leurs pratiques de sécurité ;">security practices;</li>
              <li data-fr="leurs interruptions de service ;">service interruptions;</li>
              <li data-fr="leurs modifications d'API ;">API changes;</li>
              <li data-fr="leurs suspensions de compte ;">account suspensions;</li>
              <li data-fr="leurs décisions de traitement des données.">data-processing decisions.</li>
            </ul>
            <p data-fr="Votre utilisation des services tiers reste soumise aux conditions et politiques applicables de ces prestataires.">
              Your use of third-party services remains subject to the applicable terms and policies of those providers.
            </p>
          </article>

          <article>
            <h2 data-fr="28. Modifications des API tierces">28. Changes to Third-Party APIs</h2>
            <p data-fr="Les prestataires tiers peuvent modifier, restreindre ou interrompre des API ou fonctionnalités. Ces changements peuvent affecter le fonctionnement de SHEFAR sans préavis à SHEFAR. Dans ce cas, SHEFAR peut :">
              Third-party providers may change, restrict or discontinue
              APIs or features. Such changes may affect SHEFAR
              functionality without prior notice to SHEFAR. Where this
              occurs, SHEFAR may:
            </p>
            <ul>
              <li data-fr="modifier l'intégration concernée ;">modify the affected integration;</li>
              <li data-fr="désactiver temporairement une fonctionnalité ;">temporarily disable a feature;</li>
              <li data-fr="remplacer une source de données ;">replace a data source;</li>
              <li data-fr="ajuster la fonctionnalité ;">adjust the functionality;</li>
              <li data-fr="interrompre l'intégration concernée.">discontinue the affected integration.</li>
            </ul>
            <p data-fr="SHEFAR n'est pas responsable de l'indisponibilité d'une fonctionnalité résultant d'un changement ou d'un retrait d'API ou de service par un prestataire tiers hors du contrôle de SHEFAR.">
              SHEFAR is not liable for functionality becoming unavailable
              because a third-party provider has changed or withdrawn an
              API or service outside SHEFAR&apos;s control.
            </p>
          </article>

          <article>
            <h2 data-fr="29. Utilisation acceptable">29. Acceptable Use</h2>
            <p data-fr="Vous acceptez d'utiliser SHEFAR Dashboard uniquement à des fins légales et autorisées. Vous ne devez pas :">
              You agree to use SHEFAR Dashboard only for lawful and authorized purposes. You must not:
            </p>
            <ul>
              <li data-fr="violer les lois applicables ;">violate applicable laws;</li>
              <li data-fr="accéder à des comptes sans autorisation ;">access accounts without authorization;</li>
              <li data-fr="usurper l'identité d'une autre personne ou organisation ;">impersonate another person or organization;</li>
              <li data-fr="tenter de contourner l'authentification ;">attempt to bypass authentication;</li>
              <li data-fr="tenter d'obtenir un accès non autorisé aux serveurs ou bases de données ;">
                attempt to gain unauthorized server or database access;
              </li>
              <li data-fr="perturber le fonctionnement de SHEFAR ;">interfere with the operation of SHEFAR;</li>
              <li data-fr="introduire des logiciels malveillants ;">introduce malicious software;</li>
              <li data-fr="téléverser des logiciels malveillants ou du code malveillant ;">upload malware or malicious code;</li>
              <li data-fr="mener des attaques par déni de service ;">conduct denial-of-service attacks;</li>
              <li data-fr="sonder le Service à la recherche de vulnérabilités sans autorisation ;">
                probe the Service for vulnerabilities without authorization;
              </li>
              <li data-fr="procéder à de l'ingénierie inverse du Service, sauf lorsque cela est expressément autorisé par la loi ;">
                reverse engineer the Service except where expressly permitted by law;
              </li>
              <li data-fr="extraire (scraper) le Service de manière abusive ou non autorisée ;">
                scrape the Service in an abusive or unauthorized manner;
              </li>
              <li data-fr="utiliser des systèmes automatisés d'une manière qui perturbe matériellement SHEFAR ;">
                use automated systems in a manner that materially disrupts SHEFAR;
              </li>
              <li data-fr="tenter d'obtenir les informations confidentielles d'un autre utilisateur ;">
                attempt to obtain another user&apos;s confidential information;
              </li>
              <li data-fr="détourner les données de l'API Google ;">misuse Google API data;</li>
              <li data-fr="revendre un accès non autorisé au Service ;">resell unauthorized access to the Service;</li>
              <li data-fr="utiliser SHEFAR à des fins de surveillance illégale ;">use SHEFAR for unlawful surveillance;</li>
              <li data-fr="utiliser SHEFAR pour porter atteinte aux droits de tiers.">use SHEFAR to infringe third-party rights.</li>
            </ul>
          </article>

          <article>
            <h2 data-fr="30. Sécurité">30. Security</h2>
            <p>
              <span data-fr="Les utilisateurs ne doivent pas tenter d'affaiblir ou de contourner les mesures de sécurité de SHEFAR. Si vous découvrez une vulnérabilité suspectée, vous devez la signaler de manière responsable à :">
                Users must not attempt to weaken or circumvent SHEFAR
                security measures. If you discover a suspected vulnerability,
                you should report it responsibly to:
              </span>{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p data-fr="Vous ne devez pas exploiter une vulnérabilité à des fins d'accès non autorisé, d'extraction de données, de perturbation de service ou à toute autre fin préjudiciable.">
              You must not exploit a vulnerability for unauthorized access,
              data extraction, service disruption or any other harmful
              purpose.
            </p>
          </article>

          <article>
            <h2 data-fr="31. Propriété intellectuelle">31. Intellectual Property</h2>
            <p data-fr="SHEFAR et ses concédants conservent tous les droits relatifs à SHEFAR Dashboard, y compris, le cas échéant :">
              SHEFAR and its licensors retain all rights relating to SHEFAR Dashboard, including, where applicable:
            </p>
            <ul>
              <li data-fr="le logiciel ;">software;</li>
              <li data-fr="le code source ;">source code;</li>
              <li data-fr="l'architecture applicative ;">application architecture;</li>
              <li data-fr="les bases de données ;">databases;</li>
              <li data-fr="les interfaces ;">interfaces;</li>
              <li data-fr="les designs visuels ;">visual designs;</li>
              <li data-fr="les logos ;">logos;</li>
              <li data-fr="les marques ;">trademarks;</li>
              <li data-fr="la documentation ;">documentation;</li>
              <li data-fr="les textes ;">text;</li>
              <li data-fr="les rapports ;">reports;</li>
              <li data-fr="les méthodes propriétaires ;">proprietary methods;</li>
              <li data-fr="les systèmes de scoring ;">scoring systems;</li>
              <li data-fr="les structures analytiques ;">analytical structures;</li>
              <li data-fr="les graphiques ;">graphics;</li>
              <li data-fr="le contenu original.">original content.</li>
            </ul>
            <p data-fr="Sauf autorisation expresse, ces éléments ne peuvent être copiés, reproduits, distribués, vendus, concédés sous licence, soumis à ingénierie inverse ou exploités commercialement.">
              Except where expressly authorized, these elements may not be
              copied, reproduced, distributed, sold, licensed, reverse
              engineered or commercially exploited.
            </p>
          </article>

          <article>
            <h2 data-fr="32. Droit limité d'utilisation du Service">32. Limited Right to Use the Service</h2>
            <p data-fr="Sous réserve du respect des présentes Conditions et du paiement des frais applicables, SHEFAR accorde à l'utilisateur un droit limité, non exclusif, non transférable et révocable d'accéder à SHEFAR Dashboard et de l'utiliser à des fins professionnelles autorisées. Ce droit ne transfère pas la propriété de la propriété intellectuelle de SHEFAR.">
              Subject to compliance with these Terms and payment of any
              applicable fees, SHEFAR grants the user a limited,
              non-exclusive, non-transferable and revocable right to access
              and use SHEFAR Dashboard for authorized professional
              purposes. This right does not transfer ownership of
              SHEFAR&apos;s intellectual property.
            </p>
          </article>

          <article>
            <h2 data-fr="33. Retours d'expérience">33. Feedback</h2>
            <p data-fr="Si vous fournissez volontairement des retours, suggestions ou idées concernant SHEFAR Dashboard, SHEFAR peut les utiliser pour améliorer le Service. Fournir un retour ne transfère pas la propriété de vos données d'entreprise confidentielles. SHEFAR n'est pas tenu de mettre en œuvre les suggestions.">
              If you voluntarily provide feedback, suggestions or ideas
              about SHEFAR Dashboard, SHEFAR may use that feedback to
              improve the Service. Providing feedback does not transfer
              ownership of your confidential business data. SHEFAR is not
              required to implement suggestions.
            </p>
          </article>

          <article>
            <h2 data-fr="34. Offres et services payants">34. Plans and Paid Services</h2>
            <p data-fr="Certaines fonctionnalités SHEFAR peuvent nécessiter une offre payante, un abonnement, un contrat de service ou un autre accord commercial. Le cas échéant, le prix applicable, la fréquence de facturation, les fonctionnalités incluses, les limites d'utilisation, la durée de l'abonnement et les conditions commerciales spécifiques seront communiqués au client avant l'achat ou convenus séparément.">
              Certain SHEFAR functionality may require a paid plan,
              subscription, service agreement or other commercial
              arrangement. Where applicable, the applicable price, billing
              frequency, included functionality, usage limits, subscription
              period and specific commercial terms will be communicated to
              the customer before purchase or agreed separately.
            </p>
            <p data-fr="Les conditions commerciales expressément convenues dans un bon de commande, un contrat, un devis ou un accord de service spécifique peuvent compléter les présentes Conditions. En cas de conflit entre les présentes Conditions générales et un accord commercial écrit spécifiquement négocié, l'accord écrit spécifique prévaudra pour l'objet concerné.">
              Commercial terms expressly agreed in an order form, contract,
              quotation or specific service agreement may supplement these
              Terms. If there is a conflict between these general Terms and
              a specifically negotiated written commercial agreement, the
              specific written agreement will prevail for the relevant
              subject matter.
            </p>
          </article>

          <article>
            <h2 data-fr="35. Taxes">35. Taxes</h2>
            <p data-fr="Les prix affichés par SHEFAR peuvent être indiqués hors taxes applicables, sauf indication contraire. Les clients sont responsables des taxes applicables, y compris la TVA lorsque légalement requise, selon les informations de facturation fournies par SHEFAR.">
              Prices displayed by SHEFAR may be stated exclusive of
              applicable taxes unless otherwise indicated. Customers are
              responsible for applicable taxes, including VAT where legally
              required, according to the invoicing information provided by
              SHEFAR.
            </p>
          </article>

          <article>
            <h2 data-fr="36. Facturation">36. Billing</h2>
            <p data-fr="Lorsqu'un abonnement payant s'applique, le client accepte de payer les frais associés au service sélectionné selon les conditions de facturation applicables. La fréquence et le mode de paiement peuvent dépendre de l'offre ou de l'accord concerné. Le défaut de paiement d'un montant non contesté à échéance peut entraîner :">
              Where a paid subscription applies, the customer agrees to pay
              the fees associated with the selected service according to
              the applicable billing terms. Payment frequency and payment
              method may depend on the relevant offer or agreement. Failure
              to pay an undisputed amount when due may result in:
            </p>
            <ul>
              <li data-fr="des rappels ;">reminders;</li>
              <li data-fr="une restriction temporaire des fonctionnalités payantes ;">
                temporary restriction of paid functionality;
              </li>
              <li data-fr="une suspension de l'accès ;">suspension of access;</li>
              <li data-fr="une résiliation conformément à l'accord et à la loi applicables.">
                termination in accordance with the applicable agreement and law.
              </li>
            </ul>
          </article>

          <article>
            <h2 data-fr="37. Essais gratuits et accès promotionnel">37. Free Trials and Promotional Access</h2>
            <p data-fr="SHEFAR peut proposer des périodes d'essai, des démonstrations, un accès bêta ou des fonctionnalités promotionnelles. Sauf indication contraire :">
              SHEFAR may offer trial periods, demonstrations, beta access or promotional functionality. Unless otherwise stated:
            </p>
            <ul>
              <li data-fr="les fonctionnalités d'essai peuvent être limitées ;">trial features may be limited;</li>
              <li data-fr="l'accès d'essai peut expirer ;">trial access may expire;</li>
              <li data-fr="les fonctionnalités peuvent différer des versions payantes ;">
                functionality may differ from paid versions;
              </li>
              <li data-fr="SHEFAR peut modifier ou interrompre les programmes d'essai.">
                SHEFAR may modify or discontinue trial programs.
              </li>
            </ul>
            <p data-fr="L'accès promotionnel ne crée pas d'obligation pour SHEFAR de maintenir la fonctionnalité concernée de manière permanente.">
              Promotional access does not create an obligation for SHEFAR to maintain the relevant functionality permanently.
            </p>
          </article>

          <article>
            <h2 data-fr="38. Fonctionnalités bêta">38. Beta Features</h2>
            <p data-fr="SHEFAR peut mettre à disposition certaines fonctionnalités sous forme bêta, aperçu, expérimentale ou en accès anticipé. Ces fonctionnalités peuvent :">
              SHEFAR may make certain features available in beta, preview, experimental or early-access form. Such features may:
            </p>
            <ul>
              <li data-fr="contenir des erreurs ;">contain errors;</li>
              <li data-fr="changer sans préavis ;">change without notice;</li>
              <li data-fr="fonctionner avec une disponibilité réduite ;">operate with reduced availability;</li>
              <li data-fr="être interrompues ;">be discontinued;</li>
              <li data-fr="produire des résultats incomplets.">produce incomplete results.</li>
            </ul>
            <p data-fr="Les fonctionnalités bêta ne doivent pas être considérées comme des fonctionnalités de production garanties, sauf indication expresse contraire de SHEFAR.">
              Beta functionality should not be treated as guaranteed production functionality unless SHEFAR expressly states otherwise.
            </p>
          </article>

          <article>
            <h2 data-fr="39. Suspension">39. Suspension</h2>
            <p data-fr="SHEFAR peut suspendre ou restreindre temporairement l'accès lorsque cela est raisonnablement nécessaire, notamment lorsque :">
              SHEFAR may temporarily suspend or restrict access where reasonably necessary, including where:
            </p>
            <ul>
              <li data-fr="il existe un risque de sécurité ;">there is a security risk;</li>
              <li data-fr="un compte semble compromis ;">an account appears compromised;</li>
              <li data-fr="une fraude est suspectée ;">there is suspected fraud;</li>
              <li data-fr="le Service fait l'objet d'un usage abusif ;">the Service is being misused;</li>
              <li data-fr="les présentes Conditions ont été violées de manière substantielle ;">
                these Terms have been materially violated;
              </li>
              <li data-fr="des obligations de paiement demeurent impayées ;">payment obligations remain unpaid;</li>
              <li data-fr="la poursuite de l'accès pourrait nuire à SHEFAR ou à un autre utilisateur ;">
                continued access may damage SHEFAR or another user;
              </li>
              <li data-fr="la suspension est requise par la loi ;">suspension is required by law;</li>
              <li data-fr="une plateforme tierce exige une action.">a third-party platform requires action.</li>
            </ul>
            <p data-fr="Le cas échéant, SHEFAR peut chercher à notifier l'utilisateur concerné.">
              Where appropriate, SHEFAR may seek to notify the affected user.
            </p>
          </article>

          <article>
            <h2 data-fr="40. Résiliation par l'utilisateur">40. Termination by the User</h2>
            <p data-fr="Les utilisateurs peuvent cesser d'utiliser SHEFAR Dashboard à tout moment. La résiliation d'un abonnement payant reste soumise aux conditions d'annulation, de préavis et de paiement applicables au plan ou à l'accord commercial sélectionné. Déconnecter Google de SHEFAR ne met pas nécessairement fin à un abonnement SHEFAR payant.">
              Users may stop using SHEFAR Dashboard at any time. Termination
              of a paid subscription remains subject to the cancellation,
              notice and payment conditions applicable to the selected plan
              or commercial agreement. Disconnecting Google from SHEFAR does
              not necessarily terminate a paid SHEFAR subscription.
            </p>
          </article>

          <article>
            <h2 data-fr="41. Résiliation par SHEFAR">41. Termination by SHEFAR</h2>
            <p data-fr="SHEFAR peut mettre fin à l'accès lorsque :">SHEFAR may terminate access where:</p>
            <ul>
              <li data-fr="l'utilisateur viole substantiellement les présentes Conditions ;">
                the user materially violates these Terms;
              </li>
              <li data-fr="le Service est utilisé illégalement ;">the Service is used unlawfully;</li>
              <li data-fr="la poursuite de l'accès crée un risque de sécurité ;">
                continued access creates a security risk;
              </li>
              <li data-fr="une activité frauduleuse est détectée ;">fraudulent activity is detected;</li>
              <li data-fr="des paiements requis restent en souffrance ;">required payments remain outstanding;</li>
              <li data-fr="SHEFAR est légalement tenu de mettre fin à l'accès ;">
                SHEFAR is legally required to terminate access;
              </li>
              <li data-fr="la poursuite de la fourniture du service concerné devient techniquement ou légalement impossible.">
                continuing to provide the relevant service becomes technically or legally impossible.
              </li>
            </ul>
            <p data-fr="La résiliation peut entraîner la perte d'accès aux fonctionnalités de SHEFAR Dashboard.">
              Termination may result in loss of access to SHEFAR Dashboard functionality.
            </p>
          </article>

          <article>
            <h2 data-fr="42. Effet de la résiliation">42. Effect of Termination</h2>
            <p data-fr="Après la résiliation :">After termination:</p>
            <ul>
              <li data-fr="le droit d'accès de l'utilisateur au Service prend fin ;">
                the user&apos;s right to access the Service ends;
              </li>
              <li data-fr="les services connectés peuvent être déconnectés ;">connected services may be disconnected;</li>
              <li data-fr="SHEFAR peut cesser de récupérer de nouvelles données ;">
                SHEFAR may cease retrieving new data;
              </li>
              <li data-fr="les données seront conservées, supprimées ou anonymisées conformément à la politique de confidentialité de SHEFAR et aux obligations légales applicables.">
                data will be retained, deleted or anonymized according to the SHEFAR Privacy Policy and applicable legal obligations.
              </li>
            </ul>
            <p data-fr="Certaines dispositions des présentes Conditions qui, de par leur nature, doivent survivre à la résiliation resteront applicables, notamment les dispositions relatives à la propriété intellectuelle, à la responsabilité, à la confidentialité et au droit applicable.">
              Certain provisions of these Terms that by their nature should
              survive termination will remain applicable, including
              provisions regarding intellectual property, liability,
              confidentiality and governing law.
            </p>
          </article>

          <article>
            <h2 data-fr="43. Suppression des données">43. Data Deletion</h2>
            <p>
              <span data-fr="Les utilisateurs peuvent demander la suppression des données associées à leur compte SHEFAR Dashboard conformément à la politique de confidentialité de SHEFAR. Les demandes concernant les données personnelles ou les données connectées à Google peuvent être envoyées à :">
                Users may request deletion of data associated with their
                SHEFAR Dashboard account in accordance with the SHEFAR
                Privacy Policy. Requests concerning personal data or
                Google-connected data may be sent to:
              </span>{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p data-fr="SHEFAR peut avoir besoin de vérifier l'identité ou l'autorité du demandeur avant de traiter une demande de suppression.">
              SHEFAR may need to verify the identity or authority of the requester before processing a deletion request.
            </p>
          </article>

          <article>
            <h2 data-fr="44. Confidentialité">44. Confidentiality</h2>
            <p data-fr="Lorsqu'un utilisateur fournit à SHEFAR des informations d'entreprise non publiques dans le cadre du Service, SHEFAR traitera ces informations conformément à ses obligations applicables en matière de confidentialité, de sécurité et de protection de la vie privée. Les utilisateurs sont de même responsables de préserver les informations confidentielles de SHEFAR non destinées à une divulgation publique. Des accords de confidentialité spécifiques entre SHEFAR et un client prévaudront le cas échéant.">
              Where a user provides non-public business information to
              SHEFAR in connection with the Service, SHEFAR will handle
              that information according to its applicable confidentiality,
              security and privacy obligations. Users are likewise
              responsible for preserving confidential SHEFAR information
              that is not intended for public disclosure. Specific
              confidentiality agreements between SHEFAR and a customer will
              prevail where applicable.
            </p>
          </article>

          <article>
            <h2 data-fr="45. Sécurité des identifiants">45. Security of Credentials</h2>
            <p data-fr="Les utilisateurs sont responsables du maintien de la sécurité :">Users are responsible for maintaining the security of:</p>
            <ul>
              <li data-fr="de leurs identifiants SHEFAR ;">their SHEFAR credentials;</li>
              <li data-fr="des appareils utilisés pour accéder à SHEFAR ;">devices used to access SHEFAR;</li>
              <li data-fr="des identifiants de compte Google ;">Google Account credentials;</li>
              <li data-fr="des accès administrateur ;">administrator access;</li>
              <li data-fr="des identifiants des services connectés.">connected-service credentials.</li>
            </ul>
            <p data-fr="SHEFAR ne peut être tenu responsable d'un accès résultant d'identifiants volontairement partagés par l'utilisateur avec un tiers non autorisé.">
              SHEFAR cannot be responsible for access resulting from
              credentials voluntarily shared by the user with an
              unauthorized third party.
            </p>
          </article>

          <article>
            <h2 data-fr="46. Exclusion de garanties">46. Disclaimer of Warranties</h2>
            <p data-fr="Dans la mesure permise par la loi applicable, SHEFAR Dashboard est fourni « en l'état disponible ». SHEFAR s'efforce de fournir un service professionnel fiable mais ne garantit pas que :">
              To the extent permitted by applicable law, SHEFAR Dashboard
              is provided on an &quot;as available&quot; basis. SHEFAR works
              to provide a reliable professional service but does not
              warrant that:
            </p>
            <ul>
              <li data-fr="le Service sera toujours ininterrompu ;">the Service will always be uninterrupted;</li>
              <li data-fr="chaque fonctionnalité restera toujours disponible ;">every feature will always remain available;</li>
              <li data-fr="chaque intégration tierce restera opérationnelle ;">
                every third-party integration will remain operational;
              </li>
              <li data-fr="toutes les données seront toujours totalement exemptes d'erreurs ;">
                all data will always be completely error-free;
              </li>
              <li data-fr="chaque analyse sera exacte ;">every analysis will be accurate;</li>
              <li data-fr="chaque recommandation produira un résultat positif ;">
                every recommendation will produce a positive result;
              </li>
              <li data-fr="le Service répondra aux objectifs commerciaux spécifiques de chaque utilisateur.">
                the Service will meet every user&apos;s specific business objectives.
              </li>
            </ul>
            <p data-fr="Rien dans les présentes Conditions n'exclut les garanties qui ne peuvent légalement être exclues.">
              Nothing in these Terms excludes warranties that cannot legally be excluded.
            </p>
          </article>

          <article>
            <h2 data-fr="47. Limitation de responsabilité">47. Limitation of Liability</h2>
            <p data-fr="Dans la mesure permise par la loi applicable, SHEFAR ne sera pas responsable des pertes indirectes ou consécutives résultant de l'utilisation du Service, y compris les pertes résultant :">
              To the extent permitted by applicable law, SHEFAR will not be
              liable for indirect or consequential losses arising from use
              of the Service, including losses resulting from:
            </p>
            <ul>
              <li data-fr="de décisions commerciales fondées uniquement sur les informations du tableau de bord ;">
                business decisions based solely on dashboard information;
              </li>
              <li data-fr="de la performance publicitaire ;">advertising performance;</li>
              <li data-fr="d'une perte de revenus attendus ;">loss of expected revenue;</li>
              <li data-fr="d'une perte d'opportunité ;">loss of opportunity;</li>
              <li data-fr="de modifications de plateformes tierces ;">changes to third-party platforms;</li>
              <li data-fr="de défaillances d'API tierces ;">third-party API failures;</li>
              <li data-fr="d'actions non autorisées d'utilisateurs ;">unauthorized user actions;</li>
              <li data-fr="de pannes Internet ou d'infrastructure hors du contrôle raisonnable de SHEFAR.">
                Internet or infrastructure failures outside SHEFAR&apos;s reasonable control.
              </li>
            </ul>
            <p data-fr="Rien dans les présentes Conditions n'exclut ni ne limite la responsabilité lorsqu'une telle exclusion ou limitation est interdite par la loi applicable. Lorsqu'un accord commercial distinct contient des dispositions de responsabilité spécifiques, ces dispositions peuvent s'appliquer en complément ou à la place de la présente section.">
              Nothing in these Terms excludes or limits liability where
              such exclusion or limitation is prohibited by applicable law.
              Where a separate commercial agreement contains specific
              liability provisions, those provisions may apply in addition
              to or instead of this section.
            </p>
          </article>

          <article>
            <h2 data-fr="48. Indemnisation par l'utilisateur">48. User Indemnification</h2>
            <p data-fr="Dans la mesure permise par la loi applicable, les utilisateurs peuvent être responsables des réclamations ou pertes résultant de leur propre utilisation illicite de SHEFAR, notamment :">
              To the extent permitted by applicable law, users may be
              responsible for claims or losses resulting from their own
              unlawful use of SHEFAR, including:
            </p>
            <ul>
              <li data-fr="un accès non autorisé à des comptes tiers ;">unauthorized access to third-party accounts;</li>
              <li data-fr="une atteinte aux droits de tiers ;">infringement of third-party rights;</li>
              <li data-fr="un traitement illicite d'informations personnelles ;">
                unlawful processing of personal information;
              </li>
              <li data-fr="une utilisation frauduleuse ;">fraudulent use;</li>
              <li data-fr="des attaques de sécurité délibérées ;">deliberate security attacks;</li>
              <li data-fr="des violations substantielles des présentes Conditions.">
                material violations of these Terms.
              </li>
            </ul>
          </article>

          <article>
            <h2 data-fr="49. Force majeure">49. Force Majeure</h2>
            <p data-fr="SHEFAR ne sera pas responsable d'un manquement ou d'un retard causé par des événements raisonnablement hors de son contrôle, notamment :">
              SHEFAR will not be responsible for failure or delay caused by events reasonably beyond its control, including:
            </p>
            <ul>
              <li data-fr="des pannes Internet majeures ;">major Internet outages;</li>
              <li data-fr="des défaillances de télécommunications ;">telecommunications failures;</li>
              <li data-fr="des pannes généralisées de services cloud ;">widespread cloud-service outages;</li>
              <li data-fr="des pannes d'API tierces ;">third-party API outages;</li>
              <li data-fr="des cyberattaques malgré des mesures de sécurité raisonnables ;">
                cyberattacks despite reasonable safeguards;
              </li>
              <li data-fr="des catastrophes naturelles ;">natural disasters;</li>
              <li data-fr="la guerre ;">war;</li>
              <li data-fr="des troubles civils ;">civil unrest;</li>
              <li data-fr="des actions gouvernementales ;">government actions;</li>
              <li data-fr="des changements législatifs ;">changes in law;</li>
              <li data-fr="d'autres événements constituant un cas de force majeure au regard de la loi applicable.">
                other events qualifying as force majeure under applicable law.
              </li>
            </ul>
          </article>

          <article>
            <h2 data-fr="50. Modifications des présentes Conditions">50. Changes to These Terms</h2>
            <p data-fr="SHEFAR peut mettre à jour les présentes Conditions pour refléter :">SHEFAR may update these Terms to reflect:</p>
            <ul>
              <li data-fr="des modifications du Service ;">changes to the Service;</li>
              <li data-fr="de nouvelles fonctionnalités ;">new features;</li>
              <li data-fr="de nouvelles intégrations ;">new integrations;</li>
              <li data-fr="des changements légaux ou réglementaires ;">legal or regulatory changes;</li>
              <li data-fr="des exigences de sécurité ;">security requirements;</li>
              <li data-fr="des exigences de l'API Google ;">Google API requirements;</li>
              <li data-fr="des changements commerciaux ;">commercial changes;</li>
              <li data-fr="des améliorations opérationnelles.">operational improvements.</li>
            </ul>
            <p data-fr="La dernière version sera mise à disposition sur le site web de SHEFAR. Le cas échéant, les utilisateurs pourront être informés des changements substantiels avant l'entrée en vigueur des Conditions mises à jour. La poursuite de l'utilisation du Service après la date d'effet des Conditions mises à jour peut constituer une acceptation lorsque la loi applicable le permet.">
              The latest version will be made available on the SHEFAR
              website. Where required, users may be informed of material
              changes before the updated Terms take effect. Continued use
              of the Service following the effective date of updated Terms
              may constitute acceptance where permitted by applicable law.
            </p>
          </article>

          <article>
            <h2 data-fr="51. Relation entre les parties">51. Relationship Between the Parties</h2>
            <p data-fr="Les présentes Conditions ne créent aucune relation d'emploi, de partenariat, de coentreprise, fiduciaire ou d'agence, sauf accord écrit exprès contraire. SHEFAR fournit le Service en tant que prestataire de services indépendant.">
              These Terms do not create an employment relationship, a partnership, a joint venture, a fiduciary relationship, or an agency relationship, unless expressly agreed otherwise in writing. SHEFAR provides the Service as an independent service provider.
            </p>
          </article>

          <article>
            <h2 data-fr="52. Cession">52. Assignment</h2>
            <p data-fr="Les utilisateurs ne peuvent pas transférer leurs droits ou obligations au titre des présentes Conditions à un tiers sans l'autorisation préalable de SHEFAR lorsque ce consentement est légalement requis. SHEFAR peut transférer ses droits ou obligations dans le cadre d'une restructuration d'entreprise, d'une fusion, d'une acquisition, d'une cession d'activité ou d'un transfert du Service, sous réserve de la loi applicable et des obligations en matière de protection des données.">
              Users may not transfer their rights or obligations under
              these Terms to another party without SHEFAR&apos;s prior
              authorization where such consent is legally required. SHEFAR
              may transfer its rights or obligations as part of a corporate
              restructuring, merger, acquisition, sale of business, or
              transfer of the Service, subject to applicable law and
              data-protection obligations.
            </p>
          </article>

          <article>
            <h2 data-fr="53. Divisibilité">53. Severability</h2>
            <p data-fr="Si une disposition des présentes Conditions est jugée invalide ou inapplicable, les autres dispositions resteront en vigueur dans la mesure permise par la loi. La disposition invalide sera, lorsque cela est possible, interprétée ou ajustée de manière à refléter le plus fidèlement possible son objectif licite d'origine.">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions will remain in effect
              to the extent permitted by law. The invalid provision will,
              where possible, be interpreted or adjusted so that it most
              closely reflects its original lawful purpose.
            </p>
          </article>

          <article>
            <h2 data-fr="54. Absence de renonciation">54. No Waiver</h2>
            <p data-fr="Le fait pour SHEFAR de ne pas faire appliquer une disposition des présentes Conditions ne constitue pas une renonciation permanente à cette disposition. Toute renonciation doit être interprétée de manière restrictive et ne s'applique qu'à la situation particulière concernée, sauf indication expresse contraire.">
              Failure by SHEFAR to enforce a provision of these Terms does
              not constitute a permanent waiver of that provision. Any
              waiver must be interpreted narrowly and applies only to the
              particular situation concerned unless otherwise expressly
              stated.
            </p>
          </article>

          <article>
            <h2 data-fr="55. Intégralité de l'accord">55. Entire Agreement</h2>
            <p data-fr="Les présentes Conditions, ainsi que la politique de confidentialité de SHEFAR, les bons de commande applicables, les accords commerciaux spécifiques et toute condition écrite supplémentaire acceptée par le client, constituent l'accord applicable entre SHEFAR et l'utilisateur concernant le Service. Des accords écrits spécifiques peuvent compléter ou modifier les présentes Conditions générales.">
              These Terms, together with the SHEFAR Privacy Policy,
              applicable order forms, specific commercial agreements, and
              any additional written terms accepted by the customer,
              constitute the applicable agreement between SHEFAR and the
              user concerning the Service. Specific written agreements may
              supplement or modify these general Terms.
            </p>
          </article>

          <article>
            <h2 data-fr="56. Droit applicable">56. Governing Law</h2>
            <p data-fr="Sauf règles légales impératives contraires, les présentes Conditions sont régies par le droit français. Les parties devront d'abord tenter de résoudre à l'amiable tout litige relatif à SHEFAR Dashboard. Pour les clients professionnels, les litiges qui ne peuvent être résolus à l'amiable seront soumis aux juridictions compétentes déterminées conformément au droit français applicable et à toute clause de juridiction spécifique convenue entre les parties. Les droits légaux impératifs qui ne peuvent être exclus contractuellement demeurent inchangés.">
              Unless mandatory legal rules provide otherwise, these Terms
              are governed by French law. The parties should first attempt
              to resolve any dispute relating to SHEFAR Dashboard amicably.
              For professional customers, disputes that cannot be resolved
              amicably will be submitted to the competent courts determined
              in accordance with applicable French law and any specific
              jurisdiction provision agreed between the parties. Mandatory
              legal rights that cannot be contractually excluded remain
              unaffected.
            </p>
          </article>

          <article>
            <h2 data-fr="57. Politique de confidentialité">57. Privacy Policy</h2>
            <p>
              <span data-fr="La">The SHEFAR</span>{" "}
              <a href="/privacy" data-fr="politique de confidentialité">Privacy Policy</a>{" "}
              <span data-fr="de SHEFAR fait partie intégrante des conditions régissant l'utilisation de SHEFAR Dashboard. Elle fournit des informations détaillées sur les informations personnelles, les informations de compte Google, les données Google Ads, les données Google Business Profile, l'autorisation OAuth, l'utilisation des données, le stockage, la sécurité, la conservation, la suppression, les prestataires de services, les droits des utilisateurs, la Google API Services User Data Policy et les exigences de Limited Use. Les utilisateurs doivent consulter la politique de confidentialité avant d'utiliser des fonctionnalités connectées à Google.">
                forms an important part
                of the conditions governing use of SHEFAR Dashboard. It
                provides detailed information about personal information,
                Google Account information, Google Ads data, Google Business
                Profile data, OAuth authorization, data use, storage,
                security, retention, deletion, service providers, user
                rights, the Google API Services User Data Policy and Limited
                Use requirements. Users should review the Privacy Policy
                before using Google-connected functionality.
              </span>
            </p>
          </article>

          <article>
            <h2 data-fr="58. Contact">58. Contact</h2>
            <p data-fr="Pour toute question concernant les présentes Conditions, SHEFAR Dashboard, l'accès au compte, les intégrations Google ou les questions juridiques relatives au Service, veuillez contacter :">
              For questions concerning these Terms, SHEFAR Dashboard,
              account access, Google integrations or legal matters relating
              to the Service, please contact:
            </p>
            <p>
              SHEFAR
              <br />
              <span data-fr="E-mail : ">Email: </span><a href="mailto:support@shefar.fr">support@shefar.fr</a>
              <br />
              <span data-fr="Site web : ">Website: </span><a href="https://shefar.fr">shefar.fr</a>
            </p>
            <p>
              <span data-fr="Pour toute demande relative à la confidentialité, aux données personnelles ou aux données utilisateur Google, les utilisateurs peuvent également contacter :">
                For privacy, personal-data or Google user-data requests,
                users may also contact:
              </span>{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
          </article>

          <article>
            <h2 data-fr="59. Autorisation Google et conditions tierces">
              59. Google Authorization and Third-Party Terms
            </h2>
            <p data-fr="En connectant un service Google, l'utilisateur reconnaît que Google peut appliquer séparément ses propres conditions, politiques et exigences de compte. Les Conditions de SHEFAR ne remplacent pas les conditions de Google. Les utilisateurs sont responsables du respect des exigences de Google applicables à leur propre compte et services Google. Si une intégration Google n'est plus autorisée, SHEFAR peut ne plus être en mesure de fournir les fonctionnalités dépendant de cette intégration.">
              By connecting a Google service, the user acknowledges that
              Google may separately apply its own terms, policies and
              account conditions. SHEFAR&apos;s Terms do not replace
              Google&apos;s terms. Users are responsible for complying with
              Google&apos;s requirements applicable to their own Google
              Account and services. If a Google integration is no longer
              authorized, SHEFAR may no longer be able to provide
              functionality dependent on that integration.
            </p>
          </article>

          <article>
            <h2 data-fr="60. Disposition finale">60. Final Provision</h2>
            <p data-fr="En accédant à SHEFAR Dashboard ou en l'utilisant, vous confirmez que :">
              By accessing or using SHEFAR Dashboard, you confirm that:
            </p>
            <ul>
              <li data-fr="vous avez lu les présentes Conditions ;">you have read these Terms;</li>
              <li data-fr="vous comprenez les présentes Conditions ;">you understand these Terms;</li>
              <li data-fr="vous avez l'autorité nécessaire pour les accepter ;">
                you have authority to accept them;
              </li>
              <li data-fr="vous acceptez de vous y conformer ;">you agree to comply with them;</li>
              <li data-fr="vous comprenez que les services tiers connectés restent soumis à leurs propres conditions et disponibilité ;">
                you understand that connected third-party services remain subject to their own terms and availability;
              </li>
              <li data-fr="vous comprenez que SHEFAR fournit des outils et analyses destinés à soutenir la prise de décision professionnelle mais ne garantit pas de résultats commerciaux particuliers.">
                you understand that SHEFAR provides tools and analyses intended to support professional decision-making but does not guarantee particular commercial results.
              </li>
            </ul>
            <p data-fr="Si vous n'acceptez pas les présentes Conditions, vous devez cesser d'utiliser SHEFAR Dashboard et déconnecter tout service tiers connecté.">
              If you do not agree with these Terms, you should stop using
              SHEFAR Dashboard and disconnect any connected third-party
              services.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
