import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const titre = "Conditions d'utilisation — Shefar";
const description =
  "Conditions d'utilisation de Shefar Dashboard : acces au service, connexion des services tiers Google, responsabilite et resiliation.";

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
            <h1>Conditions d&apos;utilisation</h1>
            <p className="legal-date">Derniere mise a jour : 1er septembre 2026</p>
          </div>

          <article>
            <h2>1. Objet</h2>
            <p>
              Les presentes conditions regissent l&apos;utilisation de Shefar
              Dashboard, application permettant aux entreprises de
              centraliser et d&apos;analyser les donnees de leur presence
              digitale.
            </p>
            <p>
              L&apos;utilisation du service implique l&apos;acceptation
              pleine et entiere de ces conditions.
            </p>
          </article>

          <article>
            <h2>2. Acces au service</h2>
            <p>
              L&apos;acces a Shefar Dashboard necessite la creation d&apos;un
              compte et l&apos;attribution d&apos;une licence active. Les
              licences sont fournies par Shefar selon l&apos;offre souscrite,
              puis attribuees aux membres de l&apos;organisation par son
              administrateur.
            </p>
            <p>
              Chaque compte est personnel. Les identifiants ne doivent pas
              etre partages. L&apos;utilisateur est responsable de la
              confidentialite de son mot de passe et de toute activite
              realisee depuis son compte.
            </p>
          </article>

          <article>
            <h2>3. Connexion de services tiers</h2>
            <p>
              Shefar Dashboard permet de connecter des services tiers,
              notamment Google Ads, Google Analytics, Google Search Console
              et Google Business Profile.
            </p>
            <p>
              Chaque connexion est initiee par l&apos;utilisateur et repose
              sur le protocole OAuth 2.0. L&apos;utilisateur garantit
              disposer des droits necessaires sur les comptes qu&apos;il
              connecte.
            </p>
            <p>
              L&apos;acces accorde est en lecture seule. Shefar ne modifie
              aucune donnee sur les services connectes. L&apos;utilisateur
              peut revoquer une connexion a tout moment, depuis Shefar ou
              depuis son compte Google.
            </p>
          </article>

          <article>
            <h2>4. Utilisation acceptable</h2>
            <p>En utilisant Shefar Dashboard, vous vous engagez a ne pas :</p>
            <ul>
              <li>
                Connecter des comptes sur lesquels vous ne disposez pas des
                droits necessaires
              </li>
              <li>Tenter d&apos;acceder aux donnees d&apos;une autre organisation</li>
              <li>
                Contourner les mecanismes d&apos;authentification ou de
                licence
              </li>
              <li>
                Perturber le fonctionnement du service ou de son
                infrastructure
              </li>
              <li>
                Extraire massivement les donnees a des fins de revente ou de
                reconstitution
              </li>
              <li>Utiliser le service a des fins illicites</li>
            </ul>
            <p>
              Tout manquement peut entrainer la suspension ou la resiliation
              du compte concerne.
            </p>
          </article>

          <article>
            <h2>5. Donnees et confidentialite</h2>
            <p>
              Le traitement des donnees personnelles est decrit dans notre{" "}
              <a href="/privacy">politique de confidentialite</a>, qui fait
              partie integrante des presentes conditions.
            </p>
            <p>
              Les donnees issues de vos services connectes vous appartiennent.
              Shefar les traite uniquement pour fournir les fonctionnalites
              que vous avez activees, et ne les vend a aucun tiers.
            </p>
          </article>

          <article>
            <h2>6. Disponibilite</h2>
            <p>
              Shefar met en oeuvre les moyens raisonnables pour assurer la
              disponibilite du service, sans garantie d&apos;un fonctionnement
              ininterrompu.
            </p>
            <p>
              Des interruptions peuvent survenir pour maintenance, mise a
              jour, ou du fait de prestataires tiers. Les interruptions
              programmees sont annoncees lorsque cela est possible.
            </p>
            <p>
              Shefar depend des interfaces de programmation fournies par des
              tiers, notamment Google. Une modification, une limitation ou
              une interruption de ces interfaces peut affecter certaines
              fonctionnalites, sans que la responsabilite de Shefar puisse
              etre engagee.
            </p>
          </article>

          <article>
            <h2>7. Exactitude des analyses</h2>
            <p>
              Les indicateurs, scores et recommandations proposes par Shefar
              Dashboard sont fournis a titre indicatif. Ils reposent sur les
              donnees transmises par les services connectes et sur des
              methodes d&apos;analyse propres a Shefar.
            </p>
            <p>
              Ils constituent une aide a la decision et n&apos;engagent pas
              Shefar quant aux resultats obtenus suite a leur mise en oeuvre.
            </p>
          </article>

          <article>
            <h2>8. Propriete intellectuelle</h2>
            <p>
              Shefar Dashboard, son interface, ses composants et ses methodes
              d&apos;analyse restent la propriete exclusive de Shefar.
            </p>
            <p>
              L&apos;acces au service ne confere aucun droit de propriete sur
              ces elements. Les donnees importees depuis vos services
              connectes demeurent votre propriete.
            </p>
          </article>

          <article>
            <h2>9. Responsabilite</h2>
            <p>
              Shefar ne saurait etre tenue responsable des dommages indirects
              resultant de l&apos;utilisation du service, notamment la perte
              de chiffre d&apos;affaires, de clientele ou de donnees.
            </p>
            <p>
              L&apos;utilisateur reste seul responsable des decisions prises
              sur la base des analyses fournies.
            </p>
          </article>

          <article>
            <h2>10. Resiliation</h2>
            <p>
              Vous pouvez cesser d&apos;utiliser le service et demander la
              suppression de votre compte a tout moment, en ecrivant a{" "}
              <a href="mailto:contact@shefar.fr">contact@shefar.fr</a>.
            </p>
            <p>
              Shefar peut suspendre ou resilier un compte en cas de
              manquement aux presentes conditions, apres notification lorsque
              les circonstances le permettent.
            </p>
            <p>
              A la resiliation, les connexions aux services tiers sont
              revoquees et les donnees supprimees dans les conditions
              decrites dans la politique de confidentialite.
            </p>
          </article>

          <article>
            <h2>11. Modifications</h2>
            <p>
              Ces conditions peuvent evoluer. Toute modification substantielle
              est portee a la connaissance des utilisateurs avant son entree
              en vigueur.
            </p>
            <p>
              La poursuite de l&apos;utilisation du service apres cette date
              vaut acceptation des nouvelles conditions.
            </p>
          </article>

          <article>
            <h2>12. Droit applicable</h2>
            <p>
              Les presentes conditions sont soumises au droit francais. Tout
              litige releve de la competence des tribunaux francais, apres
              recherche d&apos;une solution amiable.
            </p>
          </article>

          <article>
            <h2>13. Contact</h2>
            <p>
              Pour toute question relative a ces conditions :{" "}
              <a href="mailto:contact@shefar.fr">contact@shefar.fr</a>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
