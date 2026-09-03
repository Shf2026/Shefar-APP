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
            <h1>Privacy Policy</h1>
            <p className="legal-date">Last updated: September 3, 2026</p>
          </div>

          <p>
            SHEFAR is committed to protecting the privacy and security of
            its users and to being transparent about how data is accessed,
            used, stored, shared, retained, and deleted.
          </p>
          <p>
            SHEFAR Dashboard is a web application designed to help
            businesses centralize and understand their digital performance
            data. The application allows users to securely connect
            supported Google services, including Google Ads and Google
            Business Profile, through Google OAuth 2.0. When a user
            connects a Google account, SHEFAR only accesses the information
            that the user has explicitly authorized through the Google
            authorization screen.
          </p>
          <p>
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
            <h2>Table of contents</h2>
            <ol>
              <li><a href="#about">About SHEFAR Dashboard</a></li>
              <li><a href="#oauth">Google Account Connection and OAuth 2.0</a></li>
              <li><a href="#ads">Google Ads Data Accessed by SHEFAR</a></li>
              <li><a href="#business-profile">Google Business Profile Data Accessed by SHEFAR</a></li>
              <li><a href="#why">Why SHEFAR Accesses Google Data</a></li>
              <li><a href="#how-used">How Google Data Is Used in SHEFAR Dashboard</a></li>
              <li><a href="#security">Storage and Security of Google User Data</a></li>
              <li><a href="#sharing">Sharing of Google User Data and Service Providers</a></li>
              <li><a href="#human-access">Human Access to Google User Data</a></li>
              <li><a href="#advertising-ai">Use of Google Data for Advertising, AI or Other Purposes</a></li>
              <li><a href="#retention">Data Retention</a></li>
              <li><a href="#deletion">How to Request Deletion of Google User Data</a></li>
              <li><a href="#revoking">Revoking SHEFAR&apos;s Access to Your Google Account</a></li>
              <li><a href="#disconnecting">Disconnecting a Google Service From SHEFAR</a></li>
              <li><a href="#limited-use">Google API Services User Data Policy and Limited Use</a></li>
              <li><a href="#user-control">User Control</a></li>
              <li><a href="#other-info">Other Personal Information</a></li>
              <li><a href="#international">International Processing and Service Providers</a></li>
              <li><a href="#changes">Changes to This Privacy Policy</a></li>
              <li><a href="#contact">Contact SHEFAR</a></li>
            </ol>
          </nav>

          <article id="about">
            <h2>1. About SHEFAR Dashboard</h2>
            <p>
              SHEFAR Dashboard is a digital performance management and
              reporting application for businesses. Its purpose is to bring
              information that would otherwise be distributed across
              several services into a single, understandable interface.
            </p>
            <p>
              Depending on the services enabled by the user, SHEFAR
              Dashboard may connect to Google services such as:
            </p>
            <ul>
              <li>Google Ads;</li>
              <li>Google Business Profile;</li>
              <li>Google Analytics;</li>
              <li>Google Search Console;</li>
              <li>Google PageSpeed Insights;</li>
              <li>Chrome UX Report and other supported Google services.</li>
            </ul>
            <p>
              The availability of a service does not mean that SHEFAR
              automatically accesses it. A Google service is accessed only
              when the user chooses to connect it and grants the
              corresponding permissions through Google&apos;s authorization
              process.
            </p>
          </article>

          <article id="oauth">
            <h2>2. Google Account Connection and OAuth 2.0</h2>
            <p>
              SHEFAR uses Google OAuth 2.0 to request permission to access
              Google services. When a user chooses to connect Google
              services to SHEFAR Dashboard, the user is redirected to
              Google&apos;s own authentication and authorization interface.
            </p>
            <p>The user can:</p>
            <ul>
              <li>select the Google Account to connect;</li>
              <li>review the permissions requested by SHEFAR;</li>
              <li>choose which accounts or resources are available, where supported by Google;</li>
              <li>accept or refuse the requested permissions.</li>
            </ul>
            <p>
              <strong>
                SHEFAR does not ask users to provide their Google password
                directly to SHEFAR. SHEFAR does not collect or store Google
                Account passwords.
              </strong>{" "}
              Authentication is handled directly by Google. SHEFAR receives
              authorization credentials from Google allowing the
              application to access only the Google data associated with
              the permissions granted by the user. Users remain in control
              of these permissions and may revoke them at any time.
            </p>
          </article>

          <article id="ads">
            <h2>3. Google Ads Data Accessed by SHEFAR</h2>
            <p>
              When a user connects Google Ads to SHEFAR Dashboard, SHEFAR
              may access Google Ads information made available through the
              Google Ads API and authorized by the user. Depending on the
              connected account, permissions and features enabled, this
              information may include:
            </p>
            <ul>
              <li>accessible Google Ads accounts;</li>
              <li>Google Ads customer identifiers;</li>
              <li>campaigns;</li>
              <li>campaign names and statuses;</li>
              <li>advertising budgets;</li>
              <li>impressions;</li>
              <li>clicks;</li>
              <li>advertising costs;</li>
              <li>conversions;</li>
              <li>conversion rates;</li>
              <li>cost per conversion;</li>
              <li>campaign performance metrics;</li>
              <li>performance by date or reporting period;</li>
              <li>historical performance information available through the API;</li>
              <li>other reporting metrics required to display the user&apos;s Google Ads performance.</li>
            </ul>
            <p>
              SHEFAR accesses this information for reporting, monitoring,
              analysis and dashboard functionality. SHEFAR does not access
              Google Ads information that is unrelated to the features
              provided to the user.
            </p>
          </article>

          <article id="business-profile">
            <h2>4. Google Business Profile Data Accessed by SHEFAR</h2>
            <p>
              When a user connects Google Business Profile, SHEFAR may
              access information associated with the business locations
              that the user is authorized to access. Depending on
              Google&apos;s available APIs, the permissions granted by the
              user and the SHEFAR modules enabled, this information may
              include:
            </p>
            <ul>
              <li>Google Business Profile accounts accessible by the user;</li>
              <li>business locations associated with those accounts;</li>
              <li>business or location identifiers;</li>
              <li>business names;</li>
              <li>public business information;</li>
              <li>location information;</li>
              <li>information displayed on the business profile;</li>
              <li>local visibility information;</li>
              <li>business performance information;</li>
              <li>available engagement or performance metrics;</li>
              <li>information used to monitor changes in local presence and visibility.</li>
            </ul>
            <p>
              The exact information available may vary depending on the
              Google APIs, the user&apos;s permissions and the features
              available in SHEFAR Dashboard. SHEFAR only retrieves
              information required to provide the Google Business Profile
              features requested by the user.
            </p>
          </article>

          <article id="why">
            <h2>5. Why SHEFAR Accesses Google Data</h2>
            <p>
              SHEFAR requests access to Google data exclusively to provide
              the services and features selected by the user. Google data
              may be accessed in order to:
            </p>
            <ul>
              <li>identify the connected Google Account;</li>
              <li>identify Google accounts or business locations available to the user;</li>
              <li>connect Google services to SHEFAR Dashboard;</li>
              <li>retrieve Google Ads reporting data;</li>
              <li>retrieve Google Business Profile information;</li>
              <li>display performance indicators;</li>
              <li>centralize information from several services;</li>
              <li>compare performance over time;</li>
              <li>identify significant changes in performance;</li>
              <li>generate dashboard views;</li>
              <li>display alerts or performance signals;</li>
              <li>identify opportunities or areas requiring attention;</li>
              <li>provide user-facing analysis;</li>
              <li>refresh information displayed in the Dashboard;</li>
              <li>help users understand and monitor their digital performance.</li>
            </ul>
            <p>
              SHEFAR does not request Google permissions solely for future,
              unrelated or undisclosed purposes. Permissions are intended
              to remain limited to those necessary for the features
              provided by SHEFAR Dashboard.
            </p>
          </article>

          <article id="how-used">
            <h2>6. How Google Data Is Used in SHEFAR Dashboard</h2>
            <p>
              Information obtained through Google APIs is primarily used to
              create the user-facing features available in SHEFAR
              Dashboard. For example, Google Ads data may be used to
              display advertising spend, impressions, clicks, conversions,
              conversion rates, cost per conversion, campaign trends,
              performance variations, reporting periods and other relevant
              advertising KPIs.
            </p>
            <p>
              Google Business Profile data may be used to display connected
              business locations, business information, local visibility
              information, available performance metrics, changes in local
              performance and indicators relating to the user&apos;s local
              presence on Google.
            </p>
            <p>
              SHEFAR may process these metrics to organize, compare and
              interpret the information for the benefit of the user. For
              example, the Dashboard may highlight an increase or decrease
              in conversions, a significant change in advertising costs, a
              change in campaign performance, a change in local visibility,
              a change in the performance of a business location, an
              unusual variation requiring review, or an opportunity or
              priority identified from the available data.
            </p>
            <p>
              The purpose of this processing is to make the information
              easier for the user to understand and act upon. Google user
              data is not accessed for unrelated purposes.
            </p>
          </article>

          <article id="security">
            <h2>7. Storage and Security of Google User Data</h2>
            <p>
              SHEFAR takes reasonable technical and organizational measures
              designed to protect Google user data against unauthorized
              access, unauthorized disclosure, accidental loss, alteration,
              misuse, destruction and unlawful processing.
            </p>
            <p>
              Access to systems processing Google user data is restricted
              according to operational requirements. OAuth credentials and
              authorization information are treated as sensitive
              authentication information and are protected accordingly.
              SHEFAR also takes measures to protect information during
              transmission between Google services, SHEFAR&apos;s
              infrastructure and the user&apos;s browser. SHEFAR does not
              store the user&apos;s Google password.
            </p>
            <p>
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
            <h2>8. Sharing of Google User Data and Service Providers</h2>
            <p>
              SHEFAR does not sell Google user data. SHEFAR does not sell
              Google API data to data brokers, advertising platforms or
              information resellers. SHEFAR does not transfer Google user
              data for third-party advertising, personalized advertising,
              retargeting or interest-based advertising.
            </p>
            <p>
              Google user data may be processed by carefully selected
              technical service providers when this is necessary to
              operate SHEFAR Dashboard. These providers may include, for
              example:
            </p>
            <ul>
              <li>hosting and infrastructure providers;</li>
              <li>cloud service providers;</li>
              <li>database or storage providers;</li>
              <li>backup infrastructure providers;</li>
              <li>security providers;</li>
              <li>network, DNS or content-delivery providers;</li>
              <li>monitoring and technical maintenance providers;</li>
              <li>providers required for the secure operation of the application.</li>
            </ul>
            <p>
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
            <h2>9. Human Access to Google User Data</h2>
            <p>
              SHEFAR limits human access to Google user data. Employees,
              contractors or service providers are not permitted to freely
              access Google user information. Human access may occur only
              where appropriate and necessary, including situations such
              as:
            </p>
            <ul>
              <li>when the user has requested support and access is necessary to resolve the request;</li>
              <li>when the user has provided appropriate consent;</li>
              <li>when access is necessary to investigate security incidents, abuse, fraud or technical failures;</li>
              <li>when required to comply with applicable laws or legal obligations;</li>
              <li>when information has been appropriately aggregated or anonymized for legitimate internal operational purposes.</li>
            </ul>
            <p>Access is limited to what is reasonably necessary for the relevant purpose.</p>
          </article>

          <article id="advertising-ai">
            <h2>10. Use of Google Data for Advertising, AI or Other Purposes</h2>
            <p>
              SHEFAR does not sell Google user data or use Google user data
              to create advertising profiles for third parties. Information
              obtained from Google APIs is not transferred or sold for
              personalized advertising, retargeting, interest-based
              advertising, advertising data brokerage, credit scoring,
              lending decisions or unrelated third-party marketing.
            </p>
            <p>
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
            <h2>11. Data Retention</h2>
            <p>
              SHEFAR retains Google user data only for as long as
              reasonably necessary to provide the features requested by the
              user, maintain the service, comply with applicable legal
              obligations or resolve legitimate security issues. The
              retention period may depend on:
            </p>
            <ul>
              <li>whether the user&apos;s SHEFAR account remains active;</li>
              <li>whether the relevant Google service remains connected;</li>
              <li>whether historical data is necessary for user-facing reporting;</li>
              <li>whether the user has requested deletion;</li>
              <li>legal, accounting, security or regulatory requirements.</li>
            </ul>
            <p>
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
            <h2>12. How to Request Deletion of Google User Data</h2>
            <p>
              Users may request deletion of information associated with
              their SHEFAR account or connected Google services. A deletion
              request may be submitted by contacting:{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p>
              The request should identify the SHEFAR account concerned and
              clearly state that the user wishes to delete data associated
              with a connected Google Account.
            </p>
            <p>Following a valid deletion request, SHEFAR will take reasonable steps to:</p>
            <ul>
              <li>identify the relevant SHEFAR account;</li>
              <li>disconnect the relevant Google authorization where appropriate;</li>
              <li>stop retrieving new information through the revoked connection;</li>
              <li>remove stored OAuth credentials associated with that connection where applicable;</li>
              <li>delete Google user data that is no longer necessary;</li>
              <li>remove or anonymize related data where appropriate;</li>
              <li>allow residual backup copies to expire according to the applicable backup lifecycle.</li>
            </ul>
            <p>
              SHEFAR may request reasonable verification before completing
              a deletion request in order to prevent unauthorized deletion
              of another user&apos;s information. SHEFAR aims to process
              legitimate deletion requests without undue delay and in
              accordance with applicable data-protection requirements.
            </p>
          </article>

          <article id="revoking">
            <h2>13. Revoking SHEFAR&apos;s Access to Your Google Account</h2>
            <p>
              Users can revoke SHEFAR&apos;s access directly from their
              Google Account at any time. This can generally be done from
              the{" "}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                Google Account security settings
              </a>{" "}
              by opening the section relating to connected applications,
              third-party applications or services with account access,
              selecting SHEFAR Dashboard, and removing the application&apos;s
              access.
            </p>
            <p>
              Once access has been revoked, SHEFAR will no longer be able
              to retrieve new Google user data through that authorization.
              Revoking Google authorization and deleting information
              already stored by SHEFAR are separate actions. If a user also
              wants previously stored information to be deleted, the user
              may submit a deletion request to:{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
          </article>

          <article id="disconnecting">
            <h2>14. Disconnecting a Google Service From SHEFAR</h2>
            <p>
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
            <h2>15. Google API Services User Data Policy and Limited Use</h2>
            <p>
              SHEFAR is committed to complying with the Google API Services
              User Data Policy, including the applicable Limited Use
              requirements.
            </p>
            <div className="mention">
              <p>
                SHEFAR&apos;s use of information received from Google APIs
                will adhere to the{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </div>
            <p>In particular, SHEFAR limits the use of Google user data to providing or improving user-facing features that are visible and relevant within SHEFAR Dashboard:</p>
            <ul>
              <li>SHEFAR does not use Google user data for unrelated purposes;</li>
              <li>SHEFAR does not sell Google user data;</li>
              <li>SHEFAR does not transfer Google user data to advertising platforms, data brokers or information resellers;</li>
              <li>SHEFAR does not use Google user data for personalized, interest-based or retargeting advertising;</li>
              <li>SHEFAR does not use Google user data for determining creditworthiness or lending decisions.</li>
            </ul>
            <p>Transfers of Google user data are limited to circumstances necessary to:</p>
            <ul>
              <li>provide or improve the SHEFAR features requested by the user;</li>
              <li>operate the infrastructure required to provide those features;</li>
              <li>maintain the security and integrity of SHEFAR;</li>
              <li>investigate security incidents, abuse or technical issues;</li>
              <li>comply with applicable laws or legal obligations;</li>
              <li>complete a corporate transaction where legally permitted and where any required user consent has been obtained.</li>
            </ul>
            <p>
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
            <h2>16. User Control</h2>
            <p>Users remain in control of the Google services connected to SHEFAR Dashboard. At any time, a user may:</p>
            <ul>
              <li>choose not to connect a Google service;</li>
              <li>refuse an OAuth permission request;</li>
              <li>disconnect a Google service;</li>
              <li>revoke SHEFAR&apos;s Google authorization;</li>
              <li>request deletion of stored information;</li>
              <li>contact SHEFAR regarding the use of Google user data.</li>
            </ul>
            <p>
              If a permission required for a particular Dashboard feature
              is refused or revoked, the corresponding feature may no
              longer function, but unrelated SHEFAR functionality may
              remain available.
            </p>
          </article>

          <article id="other-info">
            <h2>17. Other Personal Information</h2>
            <p>
              In addition to information obtained from connected Google
              services, SHEFAR may process limited information necessary to
              create, secure and operate a SHEFAR account. This may
              include:
            </p>
            <ul>
              <li>account identification information;</li>
              <li>contact information provided by the user;</li>
              <li>authentication and account-management information;</li>
              <li>technical information necessary for security;</li>
              <li>application logs;</li>
              <li>information voluntarily submitted when contacting SHEFAR support.</li>
            </ul>
            <p>
              Such information is processed only where necessary to
              operate, secure and support the SHEFAR service or comply with
              applicable legal obligations.
            </p>
          </article>

          <article id="international">
            <h2>18. International Processing and Service Providers</h2>
            <p>
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
            <h2>19. Changes to This Privacy Policy</h2>
            <p>SHEFAR may update this Privacy Policy when necessary to reflect:</p>
            <ul>
              <li>changes to SHEFAR Dashboard;</li>
              <li>new or modified Google integrations;</li>
              <li>changes to data-processing practices;</li>
              <li>legal or regulatory requirements;</li>
              <li>Google API policy requirements;</li>
              <li>security or infrastructure changes.</li>
            </ul>
            <p>
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
            <h2>20. Contact SHEFAR</h2>
            <p>
              For questions about this Privacy Policy, Google API data,
              connected Google services, data deletion or privacy rights,
              please contact:
            </p>
            <p>
              SHEFAR
              <br />
              Email: <a href="mailto:support@shefar.fr">support@shefar.fr</a>
              <br />
              Website: <a href="https://shefar.fr">shefar.fr</a>
            </p>
            <p>
              Users requesting deletion of Google user data should clearly
              indicate &quot;Google User Data Deletion Request&quot; in
              their message so that the request can be identified and
              processed appropriately.
            </p>
          </article>

          <article id="summary">
            <h2>Summary of Google Data Practices</h2>
            <ul>
              <li><strong>Google Ads data accessed:</strong> campaign, budget, impression, click, cost, conversion and other authorized reporting and performance information.</li>
              <li><strong>Google Business Profile data accessed:</strong> authorized business locations, business profile information, local visibility information and available performance metrics.</li>
              <li><strong>Purpose:</strong> to provide reporting, monitoring, analysis and digital-performance features directly within SHEFAR Dashboard.</li>
              <li><strong>Storage:</strong> only where necessary to provide SHEFAR functionality, subject to appropriate technical and organizational safeguards.</li>
              <li><strong>Sharing:</strong> no sale of Google user data; limited processing by technical service providers may occur only where necessary to operate and secure SHEFAR.</li>
              <li><strong>Advertising:</strong> Google user data is not sold or used for third-party targeted advertising, retargeting or interest-based advertising.</li>
              <li><strong>Retention:</strong> only for as long as necessary for the requested SHEFAR service, legitimate security requirements or applicable legal obligations.</li>
              <li><strong>Deletion:</strong> users may request deletion by contacting support@shefar.fr.</li>
              <li><strong>Google authorization:</strong> users may revoke SHEFAR&apos;s access at any time through their Google Account security settings.</li>
              <li><strong>Limited Use:</strong> SHEFAR&apos;s use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.</li>
            </ul>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
