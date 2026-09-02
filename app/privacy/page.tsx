import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const titre = "Politique de confidentialite — Shefar";
const description =
  "Politique de confidentialite de Shefar Dashboard : donnees collectees, usage des API Google, conformite Google API Services User Data Policy.";

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
            <p className="legal-date">Derniere mise a jour : 1er septembre 2026</p>
          </div>

          <nav className="sommaire" aria-label="Sommaire">
            <h2>Sommaire</h2>
            <ol>
              <li>
                <a href="#responsable">Responsable du traitement</a>
              </li>
              <li>
                <a href="#donnees">Donnees collectees</a>
              </li>
              <li>
                <a href="#google">Donnees issues des API Google</a>
              </li>
              <li>
                <a href="#oauth">Connexion OAuth 2.0</a>
              </li>
              <li>
                <a href="#utilisation">Utilisation des donnees</a>
              </li>
              <li>
                <a href="#limited-use">Google API Services User Data Policy</a>
              </li>
              <li>
                <a href="#partage">Partage et absence de vente</a>
              </li>
              <li>
                <a href="#stockage">Stockage et securite</a>
              </li>
              <li>
                <a href="#conservation">Duree de conservation</a>
              </li>
              <li>
                <a href="#revocation">Revocation des acces</a>
              </li>
              <li>
                <a href="#suppression">Suppression des donnees</a>
              </li>
              <li>
                <a href="#droits">Vos droits</a>
              </li>
              <li>
                <a href="#cookies">Cookies</a>
              </li>
              <li>
                <a href="#modifications">Modifications</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ol>
          </nav>

          <article id="responsable">
            <h2>1. Responsable du traitement</h2>
            <p>
              Shefar edite Shefar Dashboard, une application permettant aux
              entreprises de centraliser et d&apos;analyser les donnees de
              leur presence digitale.
            </p>
            <p>
              Shefar agit en qualite de responsable du traitement pour les
              donnees de compte de ses utilisateurs, et en qualite de
              sous-traitant pour les donnees issues des services tiers que ses
              utilisateurs choisissent de connecter.
            </p>
            <p>
              Pour toute question relative a cette politique :{" "}
              <a href="mailto:contact@shefar.fr">contact@shefar.fr</a>
            </p>
          </article>

          <article id="donnees">
            <h2>2. Donnees collectees</h2>

            <h3>Donnees de compte</h3>
            <p>
              Lors de la creation d&apos;un compte, nous collectons les
              informations strictement necessaires au fonctionnement du
              service :
            </p>
            <ul>
              <li>
                Adresse e-mail, utilisee comme identifiant et pour les
                communications liees au service
              </li>
              <li>Prenom et nom, lorsqu&apos;ils sont renseignes</li>
              <li>Nom de l&apos;entreprise, secteur d&apos;activite et taille</li>
              <li>Adresse du site web analyse</li>
              <li>
                Mot de passe, conserve uniquement sous forme d&apos;empreinte
                chiffree et jamais en clair
              </li>
            </ul>

            <h3>Donnees techniques</h3>
            <p>
              Nous enregistrons les dates de connexion et l&apos;adresse IP
              d&apos;origine des tentatives d&apos;authentification, afin de
              detecter et limiter les tentatives d&apos;acces non autorisees.
            </p>

            <h3>Donnees issues des services connectes</h3>
            <p>
              Lorsque vous connectez un service tiers, nous accedons en
              lecture aux donnees decrites a la section suivante. Aucune
              connexion n&apos;est etablie sans votre autorisation explicite.
            </p>
          </article>

          <article id="google">
            <h2>3. Donnees issues des API Google</h2>
            <p>
              Shefar Dashboard permet a chaque utilisateur de connecter ses
              propres comptes Google. L&apos;acces est toujours en lecture
              seule : Shefar ne modifie, ne cree ni ne supprime aucune donnee
              sur vos comptes Google.
            </p>

            <h3>Google Ads</h3>
            <p>
              Autorisation demandee :{" "}
              <strong>https://www.googleapis.com/auth/adwords</strong>
            </p>
            <p>
              Nous accedons a la liste de vos comptes publicitaires
              accessibles, ainsi qu&apos;aux donnees de campagnes, groupes
              d&apos;annonces, mots-cles, annonces, conversions, budgets et
              depenses. Ces donnees alimentent l&apos;analyse de vos
              performances publicitaires et les recommandations associees.
            </p>

            <h3>Google Analytics</h3>
            <p>
              Autorisation demandee :{" "}
              <strong>
                https://www.googleapis.com/auth/analytics.readonly
              </strong>
            </p>
            <p>
              Nous accedons a la liste de vos proprietes Analytics et aux
              statistiques agregees d&apos;audience, d&apos;acquisition, de
              comportement et de conversion. Nous n&apos;accedons a aucune
              donnee permettant d&apos;identifier individuellement un visiteur
              de votre site.
            </p>

            <h3>Google Search Console</h3>
            <p>
              Autorisation demandee :{" "}
              <strong>
                https://www.googleapis.com/auth/webmasters.readonly
              </strong>
            </p>
            <p>
              Nous accedons a la liste de vos sites verifies et aux donnees de
              performance dans la recherche : requetes, impressions, clics,
              positions moyennes et pages concernees.
            </p>

            <h3>Google Business Profile</h3>
            <p>
              Autorisation demandee :{" "}
              <strong>https://www.googleapis.com/auth/business.manage</strong>
            </p>
            <p>
              Nous accedons a la liste de vos comptes et etablissements, a
              leurs informations publiques — nom, adresse, categories,
              horaires, coordonnees — ainsi qu&apos;aux avis clients et aux
              statistiques de visibilite locale. Bien que l&apos;autorisation
              Google porte le nom <em>manage</em>, Shefar l&apos;utilise
              exclusivement en lecture.
            </p>

            <h3>PageSpeed Insights et Chrome UX Report</h3>
            <p>
              Ces services sont interroges a partir de l&apos;adresse publique
              de votre site. Ils ne necessitent aucune autorisation sur votre
              compte Google et ne donnent acces a aucune donnee privee.
            </p>

            <h3>Identite du compte connecte</h3>
            <p>
              Les autorisations <strong>openid</strong> et{" "}
              <strong>email</strong> nous permettent d&apos;afficher quelle
              adresse Google a autorise chaque connexion, afin que vous
              puissiez identifier et gerer vos acces.
            </p>
          </article>

          <article id="oauth">
            <h2>4. Connexion OAuth 2.0</h2>
            <p>
              Toutes les connexions aux services Google passent par le
              protocole OAuth 2.0, le mecanisme d&apos;autorisation officiel
              de Google.
            </p>
            <ul>
              <li>
                Vous etes redirige vers un ecran de consentement heberge par
                Google, sur lequel vous choisissez le compte a connecter et
                consultez les autorisations demandees
              </li>
              <li>
                <strong>
                  Shefar ne demande, ne recoit et ne stocke jamais votre mot
                  de passe Google.
                </strong>{" "}
                Nous n&apos;y avons a aucun moment acces
              </li>
              <li>
                Google nous transmet un jeton d&apos;autorisation, que nous
                conservons sous forme chiffree pour maintenir la connexion
                active sans vous redemander votre accord a chaque visite
              </li>
              <li>
                Ce jeton ne quitte jamais nos serveurs. Il n&apos;est jamais
                transmis a votre navigateur ni a un tiers
              </li>
            </ul>
          </article>

          <article id="utilisation">
            <h2>5. Utilisation des donnees</h2>
            <p>Les donnees collectees servent exclusivement a :</p>
            <ul>
              <li>Afficher vos performances au sein de Shefar Dashboard</li>
              <li>Calculer des indicateurs, des scores et des tendances</li>
              <li>
                Produire des recommandations et des priorites d&apos;action
                adaptees a votre activite
              </li>
              <li>Generer les rapports que vous demandez</li>
              <li>Assurer le fonctionnement, la securite et la maintenance du service</li>
            </ul>
            <p>
              Les donnees issues des API Google ne sont utilisees que pour
              fournir les fonctionnalites que vous avez activees. Elles ne
              servent a aucune autre finalite.
            </p>
            <p>
              <strong>
                Nous n&apos;utilisons pas vos donnees pour entrainer des
                modeles d&apos;intelligence artificielle
              </strong>
              , generalises ou non.
            </p>
          </article>

          <article id="limited-use">
            <h2>6. Google API Services User Data Policy</h2>
            <div className="mention">
              <p>
                Shefar&apos;s use and transfer of information received from
                Google APIs will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </div>
            <p>
              L&apos;utilisation et le transfert par Shefar des informations
              recues des API Google respectent la politique relative aux
              donnees utilisateur des services d&apos;API Google, y compris
              les exigences d&apos;utilisation limitee.
            </p>
          </article>

          <article id="partage">
            <h2>7. Partage et absence de vente</h2>
            <p>
              <strong>Shefar ne vend aucune donnee.</strong> Vos donnees ne
              sont ni cedees, ni louees, ni echangees a des fins commerciales,
              publicitaires ou statistiques.
            </p>
            <p>
              Vos donnees ne sont accessibles qu&apos;aux utilisateurs de
              votre propre organisation, disposant d&apos;une licence active.
              Aucune organisation ne peut acceder aux donnees d&apos;une
              autre.
            </p>
            <p>Les seules communications a des tiers concernent :</p>
            <ul>
              <li>
                Nos prestataires techniques d&apos;hebergement et
                d&apos;envoi d&apos;e-mails, lies par des engagements de
                confidentialite et agissant sur nos seules instructions
              </li>
              <li>Les autorites competentes, lorsque la loi nous y contraint</li>
            </ul>
          </article>

          <article id="stockage">
            <h2>8. Stockage et securite</h2>
            <p>
              Les donnees sont hebergees sur des serveurs situes dans
              l&apos;Union europeenne.
            </p>
            <ul>
              <li>
                Les echanges entre votre navigateur et nos serveurs sont
                chiffres en HTTPS
              </li>
              <li>
                Les jetons d&apos;autorisation Google sont chiffres avant
                enregistrement en base de donnees
              </li>
              <li>
                Les mots de passe sont conserves sous forme d&apos;empreinte
                bcrypt, irreversible
              </li>
              <li>
                Chaque requete est cloisonnee par organisation :
                l&apos;appartenance est verifiee cote serveur a partir du
                jeton de session, jamais a partir d&apos;un parametre transmis
                par le navigateur
              </li>
              <li>
                Les tentatives de connexion sont limitees afin de prevenir les
                attaques par force brute
              </li>
              <li>
                L&apos;acces aux donnees necessite une licence active
                attribuee par l&apos;administrateur de votre organisation
              </li>
            </ul>
          </article>

          <article id="conservation">
            <h2>9. Duree de conservation</h2>
            <ul>
              <li>
                <strong>Donnees de compte</strong> : conservees tant que le
                compte est actif
              </li>
              <li>
                <strong>Donnees issues des services connectes</strong> :
                conservees tant que la connexion correspondante est active, et
                supprimees lors de sa revocation
              </li>
              <li>
                <strong>Journaux de connexion</strong> : conserves douze mois
                a des fins de securite
              </li>
              <li>
                <strong>Apres suppression d&apos;un compte</strong> : les
                donnees sont effacees sous trente jours, sauf obligation
                legale de conservation
              </li>
            </ul>
          </article>

          <article id="revocation">
            <h2>10. Revocation des acces</h2>
            <p>
              Vous pouvez retirer a tout moment l&apos;acces accorde a
              Shefar, par deux moyens :
            </p>
            <ul>
              <li>
                Depuis Shefar Dashboard, rubrique Connexions, en retirant la
                source concernee. Le jeton correspondant est alors supprime de
                nos serveurs et revoque aupres de Google
              </li>
              <li>
                Depuis votre compte Google, sur la page{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  myaccount.google.com/permissions
                </a>
                , en retirant l&apos;acces accorde a Shefar
              </li>
            </ul>
            <p>
              Dans les deux cas, la revocation prend effet immediatement.
              Nous cessons d&apos;acceder a vos donnees Google et supprimons
              le jeton associe.
            </p>
          </article>

          <article id="suppression">
            <h2>11. Suppression des donnees</h2>
            <p>
              Vous pouvez demander la suppression de votre compte et de
              l&apos;ensemble des donnees associees en ecrivant a{" "}
              <a href="mailto:contact@shefar.fr">contact@shefar.fr</a> depuis
              l&apos;adresse e-mail rattachee a votre compte.
            </p>
            <p>
              La demande est traitee sous trente jours. Elle entraine la
              suppression de votre compte, des donnees de votre organisation,
              des jetons d&apos;autorisation et de l&apos;ensemble des
              donnees importees depuis vos services connectes.
            </p>
          </article>

          <article id="droits">
            <h2>12. Vos droits</h2>
            <p>
              Conformement au reglement general sur la protection des
              donnees, vous disposez d&apos;un droit d&apos;acces, de
              rectification, d&apos;effacement, de limitation,
              d&apos;opposition et de portabilite sur les donnees vous
              concernant.
            </p>
            <p>
              Pour exercer ces droits, ecrivez a{" "}
              <a href="mailto:contact@shefar.fr">contact@shefar.fr</a>. Nous
              repondons sous un mois.
            </p>
            <p>
              Vous pouvez egalement introduire une reclamation aupres de la
              Commission nationale de l&apos;informatique et des libertes
              (CNIL).
            </p>
          </article>

          <article id="cookies">
            <h2>13. Cookies</h2>
            <p>
              Shefar Dashboard utilise uniquement des cookies necessaires a
              son fonctionnement : maintien de votre session et securisation
              des formulaires.
            </p>
            <p>
              Ces cookies sont deposes en <em>httpOnly</em>, ce qui les rend
              inaccessibles au code s&apos;executant dans votre navigateur.
            </p>
            <p>
              <strong>
                Nous n&apos;utilisons aucun cookie publicitaire ni aucun
                traceur tiers
              </strong>{" "}
              sur les pages du service.
            </p>
          </article>

          <article id="modifications">
            <h2>14. Modifications</h2>
            <p>
              Cette politique peut evoluer. Toute modification substantielle
              sera portee a votre connaissance par e-mail ou par une
              notification dans l&apos;application, avant son entree en
              vigueur.
            </p>
            <p>La date de derniere mise a jour figure en haut de cette page.</p>
          </article>

          <article id="contact">
            <h2>15. Contact</h2>
            <p>
              Pour toute question relative a cette politique ou au traitement
              de vos donnees :{" "}
              <a href="mailto:contact@shefar.fr">contact@shefar.fr</a>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
