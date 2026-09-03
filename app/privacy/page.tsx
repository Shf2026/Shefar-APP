import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const titre = "Politique de confidentialite — Shefar Dashboard";
const description =
  "Politique de confidentialite de Shefar Dashboard : donnees collectees, acces aux API Google, conformite Google API Services User Data Policy et Limited Use.";

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
            <h1>Politique de confidentialite</h1>
            <p className="legal-date">Derniere mise a jour : 2 septembre 2026</p>
          </div>

          <p>
            La presente Politique de confidentialite explique de maniere
            detaillee comment Shefar Dashboard collecte, accede, utilise,
            stocke, protege, partage et supprime les donnees lorsque vous
            utilisez notre application, notamment lorsque vous connectez un
            compte ou un service Google.
          </p>
          <p>
            Shefar Dashboard est une application web destinee aux
            entreprises. Elle permet de connecter certains services Google,
            notamment Google Ads et Google Business Profile, afin de
            centraliser des donnees de performance dans un tableau de bord,
            de suivre des indicateurs, d&apos;identifier des variations et de
            faciliter le pilotage de la performance digitale.
          </p>
          <p>
            Cette politique s&apos;applique au site et a l&apos;application
            Shefar Dashboard accessibles notamment depuis{" "}
            <strong>shefar.fr</strong>.
          </p>

          <nav className="sommaire" aria-label="Sommaire">
            <h2>Sommaire</h2>
            <ol>
              <li><a href="#responsable">Responsable du traitement</a></li>
              <li><a href="#donnees">Quelles donnees Shefar Dashboard peut collecter</a></li>
              <li><a href="#oauth">Connexion avec Google OAuth 2.0</a></li>
              <li><a href="#google">Donnees Google auxquelles Shefar Dashboard peut acceder</a></li>
              <li><a href="#ads">Donnees Google Ads</a></li>
              <li><a href="#business-profile">Donnees Google Business Profile</a></li>
              <li><a href="#autres-services">Donnees provenant d&apos;autres services Google</a></li>
              <li><a href="#pagespeed">Google PageSpeed Insights et donnees techniques</a></li>
              <li><a href="#utilisation">Pourquoi Shefar Dashboard utilise les donnees Google</a></li>
              <li><a href="#non-utilisation">Ce que Shefar ne fait pas avec les donnees Google</a></li>
              <li><a href="#ia">Intelligence artificielle et donnees Google</a></li>
              <li><a href="#base-juridique">Base juridique du traitement</a></li>
              <li><a href="#jetons">Jetons OAuth et autorisations Google</a></li>
              <li><a href="#limitation-acces">Limitation des acces</a></li>
              <li><a href="#stockage">Stockage des donnees</a></li>
              <li><a href="#securite">Mesures de securite</a></li>
              <li><a href="#partage">Partage des donnees</a></li>
              <li><a href="#vente">Absence de vente des donnees</a></li>
              <li><a href="#conservation">Conservation des donnees</a></li>
              <li><a href="#deconnexion">Deconnexion d&apos;un compte Google</a></li>
              <li><a href="#suppression">Suppression des donnees</a></li>
              <li><a href="#revocation">Revocation des autorisations Google</a></li>
              <li><a href="#droits">Droits des utilisateurs</a></li>
              <li><a href="#tiers">Donnees concernant des tiers</a></li>
              <li><a href="#journaux">Journaux techniques et securite</a></li>
              <li><a href="#cookies">Cookies et stockage local</a></li>
              <li><a href="#transferts">Transferts internationaux</a></li>
              <li><a href="#mineurs">Mineurs</a></li>
              <li><a href="#google-policy">Google API Services User Data Policy</a></li>
              <li><a href="#limited-use">Limited Use</a></li>
              <li><a href="#modifications">Modification de cette Politique de confidentialite</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
          </nav>

          <article id="responsable">
            <h2>1. Responsable du traitement</h2>
            <p>Le service Shefar Dashboard est exploite par Shefar.</p>
            <p>
              Pour toute question concernant la confidentialite,
              l&apos;utilisation de vos donnees, l&apos;acces aux donnees
              Google ou une demande de suppression :{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p>
              Les demandes relatives a l&apos;exercice de vos droits ou a la
              suppression de donnees peuvent etre adressees a cette meme
              adresse.
            </p>
          </article>

          <article id="donnees">
            <h2>2. Quelles donnees Shefar Dashboard peut collecter</h2>
            <p>
              Les donnees traitees dependent des fonctionnalites utilisees et
              des services que vous choisissez volontairement de connecter.
              Shefar Dashboard ne cherche pas a collecter des donnees sans
              rapport avec le fonctionnement de l&apos;application.
            </p>
            <h3>2.1 Donnees de compte Shefar Dashboard</h3>
            <p>
              Lorsque vous utilisez Shefar Dashboard, nous pouvons traiter
              certaines informations necessaires a la creation, a
              l&apos;administration et a la securisation de votre espace
              utilisateur, telles que :
            </p>
            <ul>
              <li>nom et prenom ;</li>
              <li>adresse e-mail professionnelle ;</li>
              <li>societe ou organisation associee au compte ;</li>
              <li>identifiant interne du compte ;</li>
              <li>date de creation du compte ;</li>
              <li>parametres et preferences du compte ;</li>
              <li>services connectes ;</li>
              <li>informations techniques necessaires a la securite et a l&apos;authentification.</li>
            </ul>
            <p>
              Ces informations permettent notamment d&apos;identifier
              l&apos;utilisateur, de securiser son espace et de lui fournir
              les fonctionnalites auxquelles il a acces.
            </p>
          </article>

          <article id="oauth">
            <h2>3. Connexion avec Google OAuth 2.0</h2>
            <p>
              Shefar Dashboard utilise Google OAuth 2.0 pour permettre aux
              utilisateurs d&apos;autoriser l&apos;acces a certains services
              Google.
            </p>
            <p>
              Lors de la connexion, l&apos;utilisateur est redirige vers
              Google. Google presente alors :
            </p>
            <ul>
              <li>le nom de l&apos;application Shefar Dashboard ;</li>
              <li>le compte Google utilise ;</li>
              <li>les autorisations demandees ;</li>
              <li>les services auxquels Shefar Dashboard souhaite acceder.</li>
            </ul>
            <p>
              L&apos;utilisateur choisit lui-meme d&apos;autoriser ou de
              refuser cet acces.
            </p>
            <p>
              <strong>
                Shefar Dashboard ne demande, ne collecte et ne stocke jamais
                le mot de passe de votre compte Google.
              </strong>{" "}
              L&apos;authentification et l&apos;autorisation sont gerees
              directement par Google.
            </p>
          </article>

          <article id="google">
            <h2>4. Donnees Google auxquelles Shefar Dashboard peut acceder</h2>
            <p>
              Lorsque vous connectez un service Google, Shefar Dashboard peut
              acceder uniquement aux donnees necessaires aux fonctionnalites
              activees et correspondant aux autorisations que vous avez
              expressement accordees.
            </p>
            <h3>4.1 Informations relatives au compte Google</h3>
            <p>
              Lorsque cela est necessaire au fonctionnement de
              l&apos;authentification, Shefar Dashboard peut recevoir des
              informations permettant d&apos;identifier le compte connecte,
              par exemple :
            </p>
            <ul>
              <li>adresse e-mail du compte Google ;</li>
              <li>identifiant du compte ;</li>
              <li>informations de profil de base disponibles dans le cadre de l&apos;autorisation accordee ;</li>
              <li>comptes ou ressources auxquels l&apos;utilisateur est autorise a acceder.</li>
            </ul>
            <p>
              Ces informations servent notamment a associer correctement les
              services Google au compte Shefar Dashboard concerne.
            </p>
          </article>

          <article id="ads">
            <h2>5. Donnees Google Ads</h2>
            <p>
              Lorsque l&apos;utilisateur connecte un compte Google Ads,
              Shefar Dashboard peut acceder aux donnees necessaires a
              l&apos;affichage et a l&apos;analyse des performances
              publicitaires. Selon les fonctionnalites activees et les
              donnees disponibles dans le compte Google Ads, celles-ci
              peuvent comprendre notamment :
            </p>
            <ul>
              <li>identifiant du compte Google Ads ;</li>
              <li>Customer ID ;</li>
              <li>nom du compte ;</li>
              <li>campagnes ;</li>
              <li>groupes de campagnes ou groupes d&apos;annonces ;</li>
              <li>annonces lorsque necessaire a l&apos;affichage des performances ;</li>
              <li>budgets ;</li>
              <li>depenses publicitaires ;</li>
              <li>couts ;</li>
              <li>impressions ;</li>
              <li>clics ;</li>
              <li>taux de clic ;</li>
              <li>conversions ;</li>
              <li>valeur des conversions lorsqu&apos;elle est disponible ;</li>
              <li>taux de conversion ;</li>
              <li>cout par conversion ;</li>
              <li>periodes et dates associees aux performances ;</li>
              <li>statuts des campagnes ;</li>
              <li>autres indicateurs de performance necessaires au fonctionnement du tableau de bord.</li>
            </ul>
            <p>
              Ces donnees sont utilisees pour permettre a l&apos;utilisateur
              de consulter et d&apos;analyser ses propres performances Google
              Ads dans Shefar Dashboard.
            </p>
          </article>

          <article id="business-profile">
            <h2>6. Donnees Google Business Profile</h2>
            <p>
              Lorsque l&apos;utilisateur connecte Google Business Profile,
              Shefar Dashboard peut acceder aux informations necessaires a la
              gestion et a l&apos;analyse de la presence locale de
              l&apos;entreprise. Selon les autorisations accordees et les
              donnees disponibles, cela peut notamment comprendre :
            </p>
            <ul>
              <li>comptes Google Business Profile accessibles ;</li>
              <li>etablissements associes au compte ;</li>
              <li>identifiants d&apos;etablissements ;</li>
              <li>nom commercial ;</li>
              <li>adresse de l&apos;etablissement ;</li>
              <li>coordonnees publiques ;</li>
              <li>categories d&apos;activite ;</li>
              <li>horaires ;</li>
              <li>URL du site internet ;</li>
              <li>informations publiques de la fiche etablissement ;</li>
              <li>donnees et indicateurs de performance rendus disponibles par Google pour les etablissements ;</li>
              <li>informations necessaires a l&apos;identification et a l&apos;affichage des etablissements dans Shefar Dashboard.</li>
            </ul>
            <p>
              Shefar Dashboard utilise ces informations afin de centraliser
              et presenter la visibilite locale de l&apos;entreprise dans son
              espace utilisateur.
            </p>
          </article>

          <article id="autres-services">
            <h2>7. Donnees provenant d&apos;autres services Google</h2>
            <p>
              Shefar Dashboard peut integrer d&apos;autres services Google
              lorsque ceux-ci sont necessaires a une fonctionnalite
              clairement proposee a l&apos;utilisateur. Dans ce cas :
            </p>
            <ul>
              <li>l&apos;utilisateur est informe de la connexion ;</li>
              <li>les autorisations correspondantes sont presentees par Google ;</li>
              <li>seules les donnees necessaires a la fonctionnalite sont demandees ;</li>
              <li>les donnees sont utilisees uniquement pour fournir la fonctionnalite concernee.</li>
            </ul>
            <p>
              Shefar applique le principe de minimisation des autorisations
              et ne demande pas l&apos;acces a des donnees Google uniquement
              dans l&apos;eventualite d&apos;une utilisation future. Google
              exige que les applications demandent uniquement les
              permissions necessaires aux fonctionnalites reellement
              proposees.
            </p>
          </article>

          <article id="pagespeed">
            <h2>8. Google PageSpeed Insights et donnees techniques</h2>
            <p>
              Shefar Dashboard peut egalement analyser des informations
              techniques relatives aux pages web, notamment au moyen de
              services tels que Google PageSpeed Insights. Ces analyses
              peuvent porter sur :
            </p>
            <ul>
              <li>performances d&apos;une page ;</li>
              <li>temps de chargement ;</li>
              <li>Core Web Vitals ;</li>
              <li>indicateurs d&apos;experience utilisateur ;</li>
              <li>metriques techniques ;</li>
              <li>opportunites d&apos;optimisation.</li>
            </ul>
            <p>
              Lorsque ces informations sont obtenues a partir d&apos;une URL
              publique et ne necessitent pas l&apos;acces a des donnees
              privees d&apos;un compte Google, elles ne sont pas traitees
              comme des donnees Google OAuth privees.
            </p>
          </article>

          <article id="utilisation">
            <h2>9. Pourquoi Shefar Dashboard utilise les donnees Google</h2>
            <p>
              Les donnees obtenues via les API Google sont utilisees
              exclusivement pour fournir ou ameliorer les fonctionnalites
              visibles de Shefar Dashboard demandees par l&apos;utilisateur.
              Elles peuvent notamment etre utilisees pour :
            </p>
            <ul>
              <li>connecter le compte Google de l&apos;utilisateur ;</li>
              <li>identifier les comptes Google Ads accessibles ;</li>
              <li>identifier les etablissements Google Business Profile accessibles ;</li>
              <li>recuperer les donnees autorisees ;</li>
              <li>afficher ces donnees dans Shefar Dashboard ;</li>
              <li>centraliser plusieurs indicateurs dans une interface unique ;</li>
              <li>calculer des indicateurs de performance ;</li>
              <li>comparer les resultats entre differentes periodes ;</li>
              <li>suivre l&apos;evolution des campagnes ;</li>
              <li>suivre la visibilite locale ;</li>
              <li>identifier des variations significatives ;</li>
              <li>generer des alertes ou priorites a partir des donnees de l&apos;utilisateur ;</li>
              <li>presenter des analyses et syntheses directement dans Shefar Dashboard ;</li>
              <li>securiser et maintenir la connexion avec les services Google ;</li>
              <li>permettre l&apos;actualisation des informations lorsque necessaire.</li>
            </ul>
            <p>
              Les donnees Google ne sont pas utilisees a des fins etrangeres
              au fonctionnement de Shefar Dashboard. Cette utilisation est
              conforme au principe Google de Limited Use, qui exige que les
              donnees obtenues via les API servent aux fonctionnalites
              visibles et demandees par l&apos;utilisateur.
            </p>
          </article>

          <article id="non-utilisation">
            <h2>10. Ce que Shefar ne fait pas avec les donnees Google</h2>
            <ul>
              <li>Shefar ne vend pas les donnees Google des utilisateurs.</li>
              <li>Shefar ne loue pas les donnees Google des utilisateurs.</li>
              <li>Shefar ne commercialise pas les donnees Google des utilisateurs aupres de courtiers en donnees.</li>
              <li>Shefar n&apos;utilise pas les donnees Google obtenues via les API pour creer des profils publicitaires independants du service demande.</li>
              <li>Shefar n&apos;utilise pas ces donnees pour cibler des utilisateurs avec de la publicite exterieure aux fonctionnalites de Shefar Dashboard.</li>
              <li>Shefar ne transfere pas les donnees Google a des tiers pour leur propre utilisation commerciale.</li>
              <li>Shefar ne permet pas a des tiers d&apos;utiliser les donnees Google des utilisateurs pour effectuer de la surveillance.</li>
              <li>Shefar n&apos;accede pas a davantage de donnees que necessaire au fonctionnement des fonctionnalites proposees.</li>
            </ul>
          </article>

          <article id="ia">
            <h2>11. Intelligence artificielle et donnees Google</h2>
            <p>
              Lorsque Shefar Dashboard utilise des fonctionnalites
              d&apos;analyse automatisee ou d&apos;intelligence artificielle
              pour presenter des syntheses, alertes, opportunites ou
              priorites a l&apos;utilisateur, l&apos;utilisation des donnees
              reste limitee a la fourniture des fonctionnalites de Shefar
              Dashboard.
            </p>
            <p>
              <strong>
                Les donnees personnelles obtenues via les API Google ne sont
                pas utilisees pour developper, entrainer ou ameliorer des
                modeles d&apos;intelligence artificielle ou de machine
                learning generalistes ou non personnalises.
              </strong>
            </p>
            <p>
              Cette precision est particulierement importante dans le cadre
              des exigences actuelles de Google concernant l&apos;utilisation
              de donnees provenant des API Google dans des fonctionnalites
              d&apos;IA ou de machine learning.
            </p>
          </article>

          <article id="base-juridique">
            <h2>12. Base juridique du traitement</h2>
            <p>
              Lorsque la reglementation europeenne relative a la protection
              des donnees s&apos;applique, les traitements peuvent notamment
              reposer sur :
            </p>
            <ul>
              <li>
                <strong>L&apos;execution du service demande par l&apos;utilisateur</strong> —
                lorsque le traitement est necessaire pour fournir Shefar
                Dashboard et les fonctionnalites souscrites ;
              </li>
              <li>
                <strong>Le consentement ou l&apos;autorisation de l&apos;utilisateur</strong> —
                notamment lorsqu&apos;un utilisateur choisit volontairement
                de connecter un service Google par OAuth 2.0 ;
              </li>
              <li>
                <strong>L&apos;interet legitime de Shefar</strong> — pour
                certaines operations strictement necessaires a la securite, a
                la prevention de la fraude, au maintien du service et a
                l&apos;amelioration de sa fiabilite ;
              </li>
              <li>
                <strong>Les obligations legales</strong> — lorsque certaines
                donnees doivent etre conservees ou communiquees en
                application d&apos;une obligation legale.
              </li>
            </ul>
          </article>

          <article id="jetons">
            <h2>13. Jetons OAuth et autorisations Google</h2>
            <p>
              Apres l&apos;autorisation de l&apos;utilisateur, Google peut
              fournir a Shefar Dashboard des jetons techniques permettant a
              l&apos;application d&apos;acceder aux donnees autorisees. Ces
              jetons peuvent notamment permettre :
            </p>
            <ul>
              <li>de maintenir la connexion avec un service Google ;</li>
              <li>d&apos;eviter de demander une nouvelle autorisation a chaque consultation ;</li>
              <li>d&apos;actualiser les donnees lorsque la fonctionnalite le necessite.</li>
            </ul>
            <p>
              Ces jetons sont consideres comme des donnees sensibles
              d&apos;authentification. Ils font l&apos;objet de mesures de
              securite renforcees et ne sont pas volontairement exposes dans
              l&apos;interface utilisateur, dans les journaux publics ou dans
              le code source accessible publiquement.
            </p>
          </article>

          <article id="limitation-acces">
            <h2>14. Limitation des acces</h2>
            <p>
              Les acces aux donnees sont limites aux systemes et personnes
              ayant besoin d&apos;y acceder pour :
            </p>
            <ul>
              <li>fournir le service ;</li>
              <li>administrer l&apos;infrastructure ;</li>
              <li>assurer la securite ;</li>
              <li>resoudre un incident technique ;</li>
              <li>fournir une assistance demandee par l&apos;utilisateur ;</li>
              <li>respecter une obligation legale.</li>
            </ul>
            <p>
              Les donnees provenant des API Google ne sont pas librement
              accessibles aux employes, prestataires ou developpeurs. Un
              acces humain a des donnees Google n&apos;intervient que
              lorsque cela est necessaire et autorise, notamment pour
              assurer le support demande par l&apos;utilisateur, resoudre un
              incident de securite ou respecter une obligation legale. Les
              exigences Google Limited Use imposent egalement des
              restrictions importantes sur l&apos;acces humain aux donnees
              provenant des API.
            </p>
          </article>

          <article id="stockage">
            <h2>15. Stockage des donnees</h2>
            <p>
              Shefar Dashboard peut stocker les donnees strictement
              necessaires au fonctionnement du service, notamment afin :
            </p>
            <ul>
              <li>d&apos;eviter des appels API inutiles ;</li>
              <li>de permettre l&apos;affichage du tableau de bord ;</li>
              <li>de conserver les indicateurs historiques necessaires au suivi des performances ;</li>
              <li>d&apos;assurer la continuite du service ;</li>
              <li>de permettre la comparaison entre differentes periodes ;</li>
              <li>de conserver les parametres de connexion.</li>
            </ul>
            <p>
              Les donnees sont stockees dans l&apos;infrastructure technique
              utilisee par Shefar et protegees par des mesures adaptees a
              leur sensibilite.
            </p>
          </article>

          <article id="securite">
            <h2>16. Mesures de securite</h2>
            <p>
              Shefar met en oeuvre des mesures techniques et
              organisationnelles destinees a proteger les donnees contre
              l&apos;acces non autorise, la divulgation, la modification, la
              perte, la destruction et l&apos;utilisation abusive. Ces
              mesures peuvent notamment comprendre :
            </p>
            <ul>
              <li>authentification des utilisateurs ;</li>
              <li>gestion differenciee des droits d&apos;acces ;</li>
              <li>chiffrement des communications via HTTPS/TLS ;</li>
              <li>controle des acces aux serveurs ;</li>
              <li>separation entre comptes administrateurs, developpeurs et comptes techniques ;</li>
              <li>protection des secrets et variables d&apos;environnement ;</li>
              <li>restrictions d&apos;acces aux bases de donnees ;</li>
              <li>journalisation de certains evenements sensibles ;</li>
              <li>sauvegardes ;</li>
              <li>surveillance de l&apos;infrastructure ;</li>
              <li>mecanismes de detection des incidents ;</li>
              <li>protection des services exposes publiquement.</li>
            </ul>
            <p>Aucun systeme ne peut cependant garantir un niveau de securite absolu.</p>
          </article>

          <article id="partage">
            <h2>17. Partage des donnees</h2>
            <p>
              Shefar ne partage les donnees Google qu&apos;avec les
              prestataires techniques strictement necessaires au
              fonctionnement de Shefar Dashboard, lorsque ce partage est
              necessaire a la fourniture du service et soumis a des
              obligations de confidentialite et de securite. Cela peut
              notamment concerner des prestataires intervenant pour :
            </p>
            <ul>
              <li>l&apos;hebergement ;</li>
              <li>la securite reseau ;</li>
              <li>le stockage ;</li>
              <li>la maintenance technique ;</li>
              <li>les services d&apos;infrastructure.</li>
            </ul>
            <p>
              Les donnees ne sont pas communiquees a ces prestataires pour
              qu&apos;ils les utilisent a leurs propres fins commerciales.
              Google autorise les transferts de donnees uniquement dans
              certaines circonstances precises, notamment lorsque ceux-ci
              sont necessaires a la fourniture d&apos;une fonctionnalite
              visible et demandee par l&apos;utilisateur.
            </p>
          </article>

          <article id="vente">
            <h2>18. Absence de vente des donnees</h2>
            <p>
              Shefar ne vend aucune donnee personnelle ni aucune donnee
              obtenue via les API Google. Les donnees ne constituent pas un
              produit commercialise par Shefar. Le modele de Shefar Dashboard
              repose sur la fourniture de services et fonctionnalites de
              pilotage digital aux entreprises, et non sur la
              commercialisation des donnees de ses utilisateurs.
            </p>
          </article>

          <article id="conservation">
            <h2>19. Conservation des donnees</h2>
            <p>Les donnees sont conservees uniquement pendant la duree necessaire :</p>
            <ul>
              <li>a la fourniture de Shefar Dashboard ;</li>
              <li>a l&apos;execution des fonctionnalites demandees ;</li>
              <li>au maintien de l&apos;historique necessaire au tableau de bord ;</li>
              <li>au respect des obligations legales applicables ;</li>
              <li>au traitement d&apos;un eventuel litige ;</li>
              <li>a la securite de l&apos;infrastructure.</li>
            </ul>
            <p>
              Lorsque les donnees ne sont plus necessaires, elles sont
              supprimees ou anonymisees selon leur nature et les obligations
              applicables.
            </p>
          </article>

          <article id="deconnexion">
            <h2>20. Deconnexion d&apos;un compte Google</h2>
            <p>
              L&apos;utilisateur peut deconnecter un service Google de
              Shefar Dashboard. La deconnexion empeche Shefar Dashboard de
              continuer a utiliser l&apos;autorisation concernee pour
              acceder aux nouvelles donnees du service deconnecte.
            </p>
            <p>
              L&apos;utilisateur peut egalement revoquer directement
              l&apos;autorisation accordee a Shefar Dashboard depuis les
              parametres de securite de son compte Google. La revocation des
              autorisations Google ne signifie pas necessairement la
              suppression immediate de toutes les donnees deja
              enregistrees dans Shefar Dashboard lorsqu&apos;une conservation
              est encore legitimement necessaire. L&apos;utilisateur peut
              demander leur suppression conformement a la section suivante.
            </p>
          </article>

          <article id="suppression">
            <h2>21. Suppression des donnees</h2>
            <p>
              L&apos;utilisateur peut demander la suppression des donnees
              associees a son compte Shefar Dashboard. Pour effectuer une
              demande : <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p>La demande devra permettre a Shefar d&apos;identifier le compte concerne.</p>
            <p>
              Lorsque la demande est valide et qu&apos;aucune obligation
              legale ne justifie une conservation supplementaire, Shefar
              procede a la suppression ou a l&apos;anonymisation des donnees
              concernees dans les systemes actifs dans un delai raisonnable.
              Les copies contenues dans des sauvegardes peuvent etre
              supprimees progressivement selon le cycle normal de rotation
              des sauvegardes, sous reserve des obligations legales
              applicables et a condition qu&apos;elles ne soient pas
              reintroduites dans les systemes actifs.
            </p>
          </article>

          <article id="revocation">
            <h2>22. Revocation des autorisations Google</h2>
            <p>
              L&apos;utilisateur garde le controle des autorisations Google
              accordees a Shefar Dashboard. Il peut notamment :
            </p>
            <ul>
              <li>deconnecter le service depuis Shefar Dashboard lorsque cette fonctionnalite est disponible ;</li>
              <li>acceder aux parametres de securite de son compte Google ;</li>
              <li>retirer l&apos;acces accorde a Shefar Dashboard, depuis{" "}
                <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                  myaccount.google.com/permissions
                </a>
                .
              </li>
            </ul>
            <p>
              Apres revocation, Shefar Dashboard ne peut plus utiliser le
              jeton concerne pour obtenir de nouvelles donnees via les API
              Google.
            </p>
          </article>

          <article id="droits">
            <h2>23. Droits des utilisateurs</h2>
            <p>
              Lorsque la reglementation applicable le prevoit, vous pouvez
              disposer notamment des droits suivants :
            </p>
            <ul>
              <li>droit d&apos;acces ;</li>
              <li>droit de rectification ;</li>
              <li>droit a l&apos;effacement ;</li>
              <li>droit a la limitation du traitement ;</li>
              <li>droit d&apos;opposition ;</li>
              <li>droit a la portabilite dans les cas prevus par la loi ;</li>
              <li>droit de retirer votre consentement lorsqu&apos;un traitement repose sur celui-ci ;</li>
              <li>droit de deposer une reclamation aupres d&apos;une autorite competente.</li>
            </ul>
            <p>
              Pour exercer l&apos;un de ces droits :{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
          </article>

          <article id="tiers">
            <h2>24. Donnees concernant des tiers</h2>
            <p>
              Lorsqu&apos;un utilisateur connecte un compte professionnel
              contenant des informations relatives a une organisation, des
              etablissements ou d&apos;autres utilisateurs, il lui
              appartient de s&apos;assurer qu&apos;il dispose des droits
              necessaires pour connecter ce compte et utiliser ces donnees
              dans Shefar Dashboard.
            </p>
            <p>
              L&apos;utilisateur ne doit pas utiliser Shefar Dashboard afin
              d&apos;acceder a des donnees auxquelles il n&apos;est pas
              autorise a acceder.
            </p>
          </article>

          <article id="journaux">
            <h2>25. Journaux techniques et securite</h2>
            <p>
              Pour assurer la securite et le fonctionnement du service,
              Shefar peut conserver certaines informations techniques telles
              que :
            </p>
            <ul>
              <li>date et heure de connexion ;</li>
              <li>adresse IP ;</li>
              <li>type de navigateur ;</li>
              <li>erreurs applicatives ;</li>
              <li>evenements de securite ;</li>
              <li>tentatives d&apos;acces ;</li>
              <li>journaux necessaires au diagnostic technique.</li>
            </ul>
            <p>Ces donnees sont utilisees notamment pour assurer la securite, prevenir les abus, diagnostiquer les incidents, proteger les comptes utilisateurs et maintenir la disponibilite de Shefar Dashboard.</p>
          </article>

          <article id="cookies">
            <h2>26. Cookies et stockage local</h2>
            <p>
              Shefar Dashboard peut utiliser des cookies ou mecanismes de
              stockage technique strictement necessaires pour :
            </p>
            <ul>
              <li>maintenir une session utilisateur ;</li>
              <li>assurer l&apos;authentification ;</li>
              <li>securiser la navigation ;</li>
              <li>memoriser certaines preferences ;</li>
              <li>assurer le bon fonctionnement de l&apos;application.</li>
            </ul>
            <p>
              Lorsque des cookies non strictement necessaires sont utilises,
              ils sont soumis aux regles applicables en matiere
              d&apos;information et de consentement.
            </p>
          </article>

          <article id="transferts">
            <h2>27. Transferts internationaux</h2>
            <p>
              Certains prestataires techniques utilises pour fournir Shefar
              Dashboard peuvent traiter des donnees depuis differents pays.
              Lorsque la reglementation l&apos;exige, Shefar veille a ce que
              ces transferts reposent sur un mecanisme juridique approprie et
              sur des garanties adaptees au niveau de protection requis.
            </p>
          </article>

          <article id="mineurs">
            <h2>28. Mineurs</h2>
            <p>
              Shefar Dashboard est un service professionnel destine aux
              entreprises et a leurs representants. Il n&apos;est pas concu
              comme un service destine aux enfants. Shefar ne cherche pas
              volontairement a collecter des donnees personnelles concernant
              des mineurs dans le cadre de l&apos;utilisation normale de
              Shefar Dashboard.
            </p>
          </article>

          <article id="google-policy">
            <h2>29. Google API Services User Data Policy</h2>
            <p>
              L&apos;utilisation par Shefar Dashboard des informations
              recues des API Google respecte la Google API Services User
              Data Policy, y compris les exigences de Limited Use. Cela
              signifie notamment que l&apos;utilisation des donnees Google
              est limitee aux fonctionnalites visibles et demandees par
              l&apos;utilisateur et que leur transfert, leur utilisation
              publicitaire et leur acces humain sont strictement encadres.
            </p>
            <p>
              Google exige expressement qu&apos;une politique de
              confidentialite explique de maniere complete comment une
              application accede, utilise, stocke ou partage les donnees
              Google des utilisateurs.
            </p>
          </article>

          <article id="limited-use">
            <h2>30. Limited Use</h2>
            <div className="mention">
              <p>
                Shefar Dashboard&apos;s use and transfer of information
                received from Google APIs will adhere to the{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </div>
            <p>En particulier :</p>
            <ul>
              <li>les donnees sont utilisees uniquement pour fournir ou ameliorer les fonctionnalites visibles de Shefar Dashboard ;</li>
              <li>elles ne sont pas vendues ;</li>
              <li>elles ne sont pas transferees a des tiers a des fins publicitaires ;</li>
              <li>elles ne sont pas utilisees pour creer des bases de donnees commerciales independantes ;</li>
              <li>l&apos;acces humain est limite aux situations autorisees ;</li>
              <li>les donnees ne sont pas utilisees pour entrainer des modeles d&apos;IA generalistes ou non personnalises.</li>
            </ul>
          </article>

          <article id="modifications">
            <h2>31. Modification de cette Politique de confidentialite</h2>
            <p>Cette politique peut evoluer afin de tenir compte :</p>
            <ul>
              <li>de nouvelles fonctionnalites ;</li>
              <li>de modifications reglementaires ;</li>
              <li>de changements concernant les API Google ;</li>
              <li>de nouvelles pratiques de securite ;</li>
              <li>de changements dans la maniere dont les donnees sont traitees.</li>
            </ul>
            <p>
              Lorsque la maniere dont Shefar utilise les donnees Google
              change de maniere substantielle, la politique sera mise a jour
              et les utilisateurs seront informes lorsque cela est
              necessaire. Google demande egalement que les utilisateurs
              soient informes lorsqu&apos;une application modifie la maniere
              dont elle utilise leurs donnees Google.
            </p>
          </article>

          <article id="contact">
            <h2>32. Contact</h2>
            <p>
              Pour toute question concernant cette Politique de
              confidentialite, vos donnees personnelles, les donnees
              provenant de Google, les autorisations OAuth, la suppression de
              vos donnees, la revocation d&apos;un acces ou la securite de
              votre compte, vous pouvez contacter :
            </p>
            <p>
              Shefar
              <br />
              E-mail : <a href="mailto:support@shefar.fr">support@shefar.fr</a>
              <br />
              Site : <a href="https://shefar.fr">shefar.fr</a>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}