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
            <h1>Terms of Service</h1>
            <p className="legal-date">Last updated: September 3, 2026</p>
          </div>

          <p>Welcome to SHEFAR Dashboard.</p>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern access to and
            use of the SHEFAR website, SHEFAR Dashboard, and the services,
            features, dashboards, integrations, analyses and tools made
            available by SHEFAR.
          </p>
          <p>
            By creating an account, accessing SHEFAR Dashboard, connecting a
            third-party service, or otherwise using the Service, you
            acknowledge that you have read, understood and agreed to these
            Terms. If you use SHEFAR Dashboard on behalf of a company,
            organization or other legal entity, you represent that you have
            the authority to accept these Terms on its behalf.
          </p>
          <p>If you do not agree with these Terms, you must not use SHEFAR Dashboard.</p>

          <article>
            <h2>1. About SHEFAR Dashboard</h2>
            <p>
              SHEFAR Dashboard is a professional web application designed to
              help businesses centralize, monitor and understand their
              digital performance. Depending on the features available to
              the user, SHEFAR Dashboard may allow users to connect and use
              data from services including:
            </p>
            <ul>
              <li>Google Ads;</li>
              <li>Google Business Profile;</li>
              <li>Google Analytics;</li>
              <li>Google Search Console;</li>
              <li>Google PageSpeed Insights;</li>
              <li>Chrome UX Report;</li>
              <li>other digital-performance services or data sources supported by SHEFAR.</li>
            </ul>
            <p>
              SHEFAR Dashboard may organize this information into
              dashboards, reports, indicators, alerts, summaries, analyses,
              recommendations and priorities. The purpose of the Service is
              to make digital-performance information easier to understand
              and use. SHEFAR Dashboard is primarily intended for
              professional and business use.
            </p>
          </article>

          <article>
            <h2>2. Acceptance of the Terms</h2>
            <p>By using SHEFAR Dashboard, you agree to comply with:</p>
            <ul>
              <li>these Terms of Service;</li>
              <li>the SHEFAR Privacy Policy;</li>
              <li>any additional terms presented for a particular feature or service;</li>
              <li>applicable laws and regulations;</li>
              <li>applicable third-party platform rules when you connect a third-party service.</li>
            </ul>
            <p>
              If you are acting on behalf of a business, you represent and
              warrant that you are authorized to bind that business to
              these Terms.
            </p>
          </article>

          <article>
            <h2>3. Eligibility</h2>
            <p>You may use SHEFAR Dashboard only if:</p>
            <ul>
              <li>you are legally capable of entering into a binding agreement;</li>
              <li>you are authorized to act on behalf of the relevant business or organization where applicable;</li>
              <li>your use of the Service complies with applicable laws;</li>
              <li>you are authorized to access any account, advertising account, business profile, website or other digital resource that you connect to SHEFAR Dashboard.</li>
            </ul>
            <p>SHEFAR Dashboard is not designed as a service for children.</p>
          </article>

          <article>
            <h2>4. Professional Use</h2>
            <p>
              SHEFAR Dashboard is designed primarily for businesses,
              professionals, organizations and their authorized
              representatives. When using SHEFAR Dashboard in connection
              with an organization, you are responsible for ensuring that:
            </p>
            <ul>
              <li>you have authority to use the relevant data;</li>
              <li>you have authority to connect the relevant third-party accounts;</li>
              <li>your use complies with your organization&apos;s internal policies;</li>
              <li>your use complies with applicable data-protection and confidentiality requirements.</li>
            </ul>
          </article>

          <article>
            <h2>5. SHEFAR Account</h2>
            <p>
              Certain features may require the creation of a SHEFAR
              Dashboard account. You agree to provide accurate information
              when creating and maintaining your account. You are
              responsible for:
            </p>
            <ul>
              <li>maintaining the confidentiality of your account credentials;</li>
              <li>protecting access to your account;</li>
              <li>using sufficiently secure authentication methods;</li>
              <li>ensuring that authorized users comply with these Terms;</li>
              <li>notifying SHEFAR if you suspect unauthorized access to your account.</li>
            </ul>
            <p>
              You must not knowingly share your account with unauthorized
              individuals. SHEFAR may implement authentication, access
              controls or additional security requirements where necessary
              to protect users and the Service.
            </p>
          </article>

          <article>
            <h2>6. Authorized Users</h2>
            <p>
              A customer organization may allow several authorized users to
              access SHEFAR Dashboard where the applicable plan or
              functionality permits this. The organization is responsible
              for:
            </p>
            <ul>
              <li>determining who may access its SHEFAR account;</li>
              <li>assigning appropriate access rights;</li>
              <li>removing access when an individual is no longer authorized;</li>
              <li>ensuring that each user complies with these Terms.</li>
            </ul>
            <p>
              SHEFAR may restrict, suspend or remove an individual
              user&apos;s access where necessary for security or compliance
              purposes.
            </p>
          </article>

          <article>
            <h2>7. Connecting Third-Party Services</h2>
            <p>
              SHEFAR Dashboard may allow users to connect third-party
              platforms and services. These may include Google services and
              other digital-performance providers. When connecting a
              third-party service, you represent that:
            </p>
            <ul>
              <li>you are authorized to access the connected account;</li>
              <li>you are permitted to provide SHEFAR with the requested access;</li>
              <li>your connection does not violate any contractual, legal or regulatory obligation;</li>
              <li>you will not use SHEFAR to access data belonging to a third party without authorization.</li>
            </ul>
            <p>
              SHEFAR is not responsible for unauthorized connections
              initiated by users who do not have appropriate permission to
              access the relevant third-party account.
            </p>
          </article>

          <article>
            <h2>8. Google OAuth 2.0</h2>
            <p>
              SHEFAR Dashboard may use Google OAuth 2.0 to allow users to
              connect supported Google services. When connecting a Google
              Account, the user is redirected to Google&apos;s authorization
              interface and may review the permissions requested by SHEFAR.
              The user decides whether to authorize the connection.
            </p>
            <p>
              SHEFAR does not ask users to provide their Google Account
              password directly to SHEFAR. Google manages the
              authentication and authorization process. The user may revoke
              SHEFAR&apos;s authorization through their Google Account
              settings at any time.
            </p>
          </article>

          <article>
            <h2>9. Google Ads Integration</h2>
            <p>
              Where enabled, SHEFAR Dashboard may allow users to connect
              authorized Google Ads accounts. This functionality may enable
              SHEFAR Dashboard to retrieve and display information such as:
            </p>
            <ul>
              <li>Google Ads accounts;</li>
              <li>Customer IDs;</li>
              <li>campaigns;</li>
              <li>ad groups;</li>
              <li>campaign status;</li>
              <li>budgets;</li>
              <li>advertising spend;</li>
              <li>costs;</li>
              <li>impressions;</li>
              <li>clicks;</li>
              <li>click-through rates;</li>
              <li>conversions;</li>
              <li>conversion values where available;</li>
              <li>conversion rates;</li>
              <li>cost per conversion;</li>
              <li>performance trends;</li>
              <li>reporting periods;</li>
              <li>other advertising-performance indicators.</li>
            </ul>
            <p>The exact information available depends on:</p>
            <ul>
              <li>Google&apos;s APIs;</li>
              <li>the user&apos;s account configuration;</li>
              <li>permissions granted by the user;</li>
              <li>available SHEFAR functionality.</li>
            </ul>
            <p>The purpose of the integration is to help users monitor and analyze their own Google Ads performance.</p>
          </article>

          <article>
            <h2>10. Google Business Profile Integration</h2>
            <p>
              Where enabled, SHEFAR Dashboard may allow users to connect
              authorized Google Business Profile accounts or locations.
              This functionality may allow SHEFAR to retrieve and display
              information relating to:
            </p>
            <ul>
              <li>authorized Business Profile accounts;</li>
              <li>business locations;</li>
              <li>business names;</li>
              <li>location identifiers;</li>
              <li>addresses;</li>
              <li>categories;</li>
              <li>opening hours;</li>
              <li>websites;</li>
              <li>public business information;</li>
              <li>location-performance metrics made available by Google;</li>
              <li>local visibility indicators;</li>
              <li>other information required to display or analyze a business&apos;s local presence.</li>
            </ul>
            <p>Users must only connect Business Profile accounts or locations that they own or are authorized to manage.</p>
          </article>

          <article>
            <h2>11. Other Google Services</h2>
            <p>
              SHEFAR Dashboard may support other Google services where
              necessary to provide clearly identified user-facing
              functionality. These may include services such as:
            </p>
            <ul>
              <li>Google Analytics;</li>
              <li>Google Search Console;</li>
              <li>PageSpeed Insights;</li>
              <li>Chrome UX Report.</li>
            </ul>
            <p>
              Where OAuth permissions are required, SHEFAR intends to
              request only permissions reasonably necessary for the
              requested functionality. Availability of an integration does
              not mean that every SHEFAR user automatically grants access
              to that service.
            </p>
          </article>

          <article>
            <h2>12. Google API Compliance</h2>
            <p>
              SHEFAR intends to operate its Google integrations in
              accordance with applicable Google policies and requirements.
              SHEFAR&apos;s use and transfer of information received from
              Google APIs will adhere to the Google API Services User Data
              Policy, including the Limited Use requirements, where
              applicable. Users must also comply with the applicable terms
              and policies of Google when using Google services through
              SHEFAR Dashboard.
            </p>
            <p>SHEFAR may modify, restrict, suspend or discontinue a Google integration where necessary to:</p>
            <ul>
              <li>comply with Google requirements;</li>
              <li>comply with applicable laws;</li>
              <li>respond to API changes;</li>
              <li>protect users or the Service;</li>
              <li>address security requirements;</li>
              <li>maintain technical compatibility.</li>
            </ul>
          </article>

          <article>
            <h2>13. Minimum Necessary Access</h2>
            <p>
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
            <h2>14. User Control Over Google Connections</h2>
            <p>
              Users remain responsible for controlling the Google services
              connected to SHEFAR Dashboard. Where available, users may:
            </p>
            <ul>
              <li>choose whether to connect a Google service;</li>
              <li>accept or refuse requested permissions;</li>
              <li>disconnect a service from SHEFAR Dashboard;</li>
              <li>revoke SHEFAR&apos;s authorization through Google;</li>
              <li>request deletion of associated data.</li>
            </ul>
            <p>Revoking a Google authorization may prevent some SHEFAR features from functioning.</p>
          </article>

          <article>
            <h2>15. Your Data</h2>
            <p>
              You retain your rights in the business data, account
              information and other content that you lawfully provide to
              or connect with SHEFAR Dashboard. Using SHEFAR does not
              transfer ownership of your underlying business data to
              SHEFAR. You grant SHEFAR the limited rights necessary to:
            </p>
            <ul>
              <li>access authorized data;</li>
              <li>process that data;</li>
              <li>store data where necessary;</li>
              <li>organize data;</li>
              <li>calculate performance indicators;</li>
              <li>present data in dashboards;</li>
              <li>generate analyses, alerts and summaries;</li>
              <li>maintain and secure the Service;</li>
              <li>provide the functionality requested by you.</li>
            </ul>
            <p>
              These rights exist only to the extent necessary to operate
              and provide SHEFAR Dashboard or as otherwise permitted under
              the Privacy Policy.
            </p>
          </article>

          <article>
            <h2>16. Personal Data</h2>
            <p>
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
            <p>Users should review the Privacy Policy before connecting a Google Account or other third-party service.</p>
          </article>

          <article>
            <h2>17. User Responsibility for Connected Data</h2>
            <p>
              You are responsible for ensuring that you are legally
              entitled to process and use all data that you make available
              to SHEFAR Dashboard. You must not use SHEFAR to:
            </p>
            <ul>
              <li>access someone else&apos;s account without permission;</li>
              <li>access confidential business information without authorization;</li>
              <li>circumvent access controls;</li>
              <li>unlawfully collect personal information;</li>
              <li>process information in violation of applicable law;</li>
              <li>infringe intellectual-property rights;</li>
              <li>violate contractual confidentiality obligations.</li>
            </ul>
          </article>

          <article>
            <h2>18. Accuracy of Third-Party Data</h2>
            <p>
              Much of the information displayed by SHEFAR Dashboard may
              originate from third-party platforms. SHEFAR does not create
              or control the underlying data provided by those platforms.
              Data displayed in SHEFAR Dashboard may therefore depend on:
            </p>
            <ul>
              <li>third-party API availability;</li>
              <li>reporting delays;</li>
              <li>attribution rules;</li>
              <li>account configuration;</li>
              <li>changes made by third-party providers;</li>
              <li>API limitations;</li>
              <li>data refresh frequency;</li>
              <li>temporary technical issues.</li>
            </ul>
            <p>
              SHEFAR does not guarantee that third-party data will always
              be complete, instantaneous, error-free or identical to
              information displayed directly in the third-party platform at
              a particular moment.
            </p>
          </article>

          <article>
            <h2>19. Dashboards, Analytics and Calculations</h2>
            <p>SHEFAR Dashboard may process source data to provide:</p>
            <ul>
              <li>KPIs;</li>
              <li>trends;</li>
              <li>comparisons;</li>
              <li>ratios;</li>
              <li>alerts;</li>
              <li>summaries;</li>
              <li>visualizations;</li>
              <li>performance scores;</li>
              <li>identified opportunities;</li>
              <li>identified priorities;</li>
              <li>other analyses.</li>
            </ul>
            <p>
              Calculated values may depend on the availability and quality
              of the source data. Users should verify critical information
              before making significant financial, commercial, operational
              or legal decisions.
            </p>
          </article>

          <article>
            <h2>20. Recommendations and Insights</h2>
            <p>
              SHEFAR Dashboard may generate recommendations, priorities,
              warnings, observations or analytical insights. These features
              are intended to assist users in understanding digital
              performance. They do not constitute a guarantee of future
              results. A recommendation provided by SHEFAR does not
              guarantee:
            </p>
            <ul>
              <li>increased revenue;</li>
              <li>additional leads;</li>
              <li>increased advertising performance;</li>
              <li>improved rankings;</li>
              <li>improved local visibility;</li>
              <li>specific conversion results;</li>
              <li>specific return on advertising spend;</li>
              <li>any particular commercial outcome.</li>
            </ul>
            <p>Business and advertising decisions remain the responsibility of the user.</p>
          </article>

          <article>
            <h2>21. Automated Analysis and Artificial Intelligence</h2>
            <p>
              Some SHEFAR features may use automated processing, algorithms
              or artificial-intelligence technologies to organize,
              summarize or interpret information. Such functionality may
              be used to provide user-facing features such as: summaries;
              alerts; detected variations; performance observations;
              opportunities; suggested priorities.
            </p>
            <p>
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
            <h2>22. No Professional Legal, Financial or Tax Advice</h2>
            <p>
              Unless expressly agreed otherwise in writing, SHEFAR
              Dashboard is a digital-performance and reporting service.
              Information provided through SHEFAR Dashboard does not
              constitute legal advice, accounting advice, tax advice,
              investment advice, or regulated financial advice. Users
              should obtain appropriate professional advice where required.
            </p>
          </article>

          <article>
            <h2>23. Advertising Performance</h2>
            <p>Advertising performance is influenced by many factors outside SHEFAR&apos;s control, including:</p>
            <ul>
              <li>competition;</li>
              <li>advertising budgets;</li>
              <li>bidding strategies;</li>
              <li>market demand;</li>
              <li>search behavior;</li>
              <li>website quality;</li>
              <li>pricing;</li>
              <li>geographic targeting;</li>
              <li>seasonality;</li>
              <li>Google systems and algorithms;</li>
              <li>advertiser account history;</li>
              <li>conversion tracking;</li>
              <li>product or service attractiveness.</li>
            </ul>
            <p>SHEFAR cannot guarantee a particular advertising result.</p>
          </article>

          <article>
            <h2>24. Search and Local Visibility</h2>
            <p>Similarly, SHEFAR cannot guarantee:</p>
            <ul>
              <li>a particular organic ranking;</li>
              <li>a specific Google Business Profile position;</li>
              <li>a particular volume of traffic;</li>
              <li>a particular number of calls or leads;</li>
              <li>inclusion or recommendation in a particular search or AI-generated result.</li>
            </ul>
            <p>Search engines and third-party platforms control their own ranking systems and algorithms.</p>
          </article>

          <article>
            <h2>25. Availability of the Service</h2>
            <p>
              SHEFAR aims to keep SHEFAR Dashboard available and
              operational. However, uninterrupted access cannot be
              guaranteed. The Service may occasionally be unavailable
              because of:
            </p>
            <ul>
              <li>maintenance;</li>
              <li>updates;</li>
              <li>infrastructure incidents;</li>
              <li>security measures;</li>
              <li>third-party outages;</li>
              <li>API failures;</li>
              <li>Internet failures;</li>
              <li>force majeure events;</li>
              <li>changes imposed by third-party providers.</li>
            </ul>
            <p>Where reasonably possible, SHEFAR may take steps to minimize disruption.</p>
          </article>

          <article>
            <h2>26. Changes to the Service</h2>
            <p>SHEFAR may modify SHEFAR Dashboard over time. This may include:</p>
            <ul>
              <li>adding features;</li>
              <li>improving existing functionality;</li>
              <li>changing dashboards;</li>
              <li>updating calculations;</li>
              <li>modifying integrations;</li>
              <li>removing obsolete features;</li>
              <li>adjusting technical limitations;</li>
              <li>changing interface elements;</li>
              <li>introducing new modules.</li>
            </ul>
            <p>SHEFAR may also modify features in response to changes made by Google or other third-party platforms.</p>
          </article>

          <article>
            <h2>27. Third-Party Services</h2>
            <p>
              SHEFAR Dashboard depends in part on services operated by
              third parties. SHEFAR does not control those third parties
              and is not responsible for their:
            </p>
            <ul>
              <li>availability;</li>
              <li>pricing;</li>
              <li>functionality;</li>
              <li>policies;</li>
              <li>security practices;</li>
              <li>service interruptions;</li>
              <li>API changes;</li>
              <li>account suspensions;</li>
              <li>data-processing decisions.</li>
            </ul>
            <p>Your use of third-party services remains subject to the applicable terms and policies of those providers.</p>
          </article>

          <article>
            <h2>28. Changes to Third-Party APIs</h2>
            <p>
              Third-party providers may change, restrict or discontinue
              APIs or features. Such changes may affect SHEFAR
              functionality without prior notice to SHEFAR. Where this
              occurs, SHEFAR may:
            </p>
            <ul>
              <li>modify the affected integration;</li>
              <li>temporarily disable a feature;</li>
              <li>replace a data source;</li>
              <li>adjust the functionality;</li>
              <li>discontinue the affected integration.</li>
            </ul>
            <p>
              SHEFAR is not liable for functionality becoming unavailable
              because a third-party provider has changed or withdrawn an
              API or service outside SHEFAR&apos;s control.
            </p>
          </article>

          <article>
            <h2>29. Acceptable Use</h2>
            <p>You agree to use SHEFAR Dashboard only for lawful and authorized purposes. You must not:</p>
            <ul>
              <li>violate applicable laws;</li>
              <li>access accounts without authorization;</li>
              <li>impersonate another person or organization;</li>
              <li>attempt to bypass authentication;</li>
              <li>attempt to gain unauthorized server or database access;</li>
              <li>interfere with the operation of SHEFAR;</li>
              <li>introduce malicious software;</li>
              <li>upload malware or malicious code;</li>
              <li>conduct denial-of-service attacks;</li>
              <li>probe the Service for vulnerabilities without authorization;</li>
              <li>reverse engineer the Service except where expressly permitted by law;</li>
              <li>scrape the Service in an abusive or unauthorized manner;</li>
              <li>use automated systems in a manner that materially disrupts SHEFAR;</li>
              <li>attempt to obtain another user&apos;s confidential information;</li>
              <li>misuse Google API data;</li>
              <li>resell unauthorized access to the Service;</li>
              <li>use SHEFAR for unlawful surveillance;</li>
              <li>use SHEFAR to infringe third-party rights.</li>
            </ul>
          </article>

          <article>
            <h2>30. Security</h2>
            <p>
              Users must not attempt to weaken or circumvent SHEFAR
              security measures. If you discover a suspected vulnerability,
              you should report it responsibly to:{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p>
              You must not exploit a vulnerability for unauthorized access,
              data extraction, service disruption or any other harmful
              purpose.
            </p>
          </article>

          <article>
            <h2>31. Intellectual Property</h2>
            <p>SHEFAR and its licensors retain all rights relating to SHEFAR Dashboard, including, where applicable:</p>
            <ul>
              <li>software;</li>
              <li>source code;</li>
              <li>application architecture;</li>
              <li>databases;</li>
              <li>interfaces;</li>
              <li>visual designs;</li>
              <li>logos;</li>
              <li>trademarks;</li>
              <li>documentation;</li>
              <li>text;</li>
              <li>reports;</li>
              <li>proprietary methods;</li>
              <li>scoring systems;</li>
              <li>analytical structures;</li>
              <li>graphics;</li>
              <li>original content.</li>
            </ul>
            <p>
              Except where expressly authorized, these elements may not be
              copied, reproduced, distributed, sold, licensed, reverse
              engineered or commercially exploited.
            </p>
          </article>

          <article>
            <h2>32. Limited Right to Use the Service</h2>
            <p>
              Subject to compliance with these Terms and payment of any
              applicable fees, SHEFAR grants the user a limited,
              non-exclusive, non-transferable and revocable right to access
              and use SHEFAR Dashboard for authorized professional
              purposes. This right does not transfer ownership of
              SHEFAR&apos;s intellectual property.
            </p>
          </article>

          <article>
            <h2>33. Feedback</h2>
            <p>
              If you voluntarily provide feedback, suggestions or ideas
              about SHEFAR Dashboard, SHEFAR may use that feedback to
              improve the Service. Providing feedback does not transfer
              ownership of your confidential business data. SHEFAR is not
              required to implement suggestions.
            </p>
          </article>

          <article>
            <h2>34. Plans and Paid Services</h2>
            <p>
              Certain SHEFAR functionality may require a paid plan,
              subscription, service agreement or other commercial
              arrangement. Where applicable, the applicable price, billing
              frequency, included functionality, usage limits, subscription
              period and specific commercial terms will be communicated to
              the customer before purchase or agreed separately.
            </p>
            <p>
              Commercial terms expressly agreed in an order form, contract,
              quotation or specific service agreement may supplement these
              Terms. If there is a conflict between these general Terms and
              a specifically negotiated written commercial agreement, the
              specific written agreement will prevail for the relevant
              subject matter.
            </p>
          </article>

          <article>
            <h2>35. Taxes</h2>
            <p>
              Prices displayed by SHEFAR may be stated exclusive of
              applicable taxes unless otherwise indicated. Customers are
              responsible for applicable taxes, including VAT where legally
              required, according to the invoicing information provided by
              SHEFAR.
            </p>
          </article>

          <article>
            <h2>36. Billing</h2>
            <p>
              Where a paid subscription applies, the customer agrees to pay
              the fees associated with the selected service according to
              the applicable billing terms. Payment frequency and payment
              method may depend on the relevant offer or agreement. Failure
              to pay an undisputed amount when due may result in:
            </p>
            <ul>
              <li>reminders;</li>
              <li>temporary restriction of paid functionality;</li>
              <li>suspension of access;</li>
              <li>termination in accordance with the applicable agreement and law.</li>
            </ul>
          </article>

          <article>
            <h2>37. Free Trials and Promotional Access</h2>
            <p>SHEFAR may offer trial periods, demonstrations, beta access or promotional functionality. Unless otherwise stated:</p>
            <ul>
              <li>trial features may be limited;</li>
              <li>trial access may expire;</li>
              <li>functionality may differ from paid versions;</li>
              <li>SHEFAR may modify or discontinue trial programs.</li>
            </ul>
            <p>Promotional access does not create an obligation for SHEFAR to maintain the relevant functionality permanently.</p>
          </article>

          <article>
            <h2>38. Beta Features</h2>
            <p>SHEFAR may make certain features available in beta, preview, experimental or early-access form. Such features may:</p>
            <ul>
              <li>contain errors;</li>
              <li>change without notice;</li>
              <li>operate with reduced availability;</li>
              <li>be discontinued;</li>
              <li>produce incomplete results.</li>
            </ul>
            <p>Beta functionality should not be treated as guaranteed production functionality unless SHEFAR expressly states otherwise.</p>
          </article>

          <article>
            <h2>39. Suspension</h2>
            <p>SHEFAR may temporarily suspend or restrict access where reasonably necessary, including where:</p>
            <ul>
              <li>there is a security risk;</li>
              <li>an account appears compromised;</li>
              <li>there is suspected fraud;</li>
              <li>the Service is being misused;</li>
              <li>these Terms have been materially violated;</li>
              <li>payment obligations remain unpaid;</li>
              <li>continued access may damage SHEFAR or another user;</li>
              <li>suspension is required by law;</li>
              <li>a third-party platform requires action.</li>
            </ul>
            <p>Where appropriate, SHEFAR may seek to notify the affected user.</p>
          </article>

          <article>
            <h2>40. Termination by the User</h2>
            <p>
              Users may stop using SHEFAR Dashboard at any time. Termination
              of a paid subscription remains subject to the cancellation,
              notice and payment conditions applicable to the selected plan
              or commercial agreement. Disconnecting Google from SHEFAR does
              not necessarily terminate a paid SHEFAR subscription.
            </p>
          </article>

          <article>
            <h2>41. Termination by SHEFAR</h2>
            <p>SHEFAR may terminate access where:</p>
            <ul>
              <li>the user materially violates these Terms;</li>
              <li>the Service is used unlawfully;</li>
              <li>continued access creates a security risk;</li>
              <li>fraudulent activity is detected;</li>
              <li>required payments remain outstanding;</li>
              <li>SHEFAR is legally required to terminate access;</li>
              <li>continuing to provide the relevant service becomes technically or legally impossible.</li>
            </ul>
            <p>Termination may result in loss of access to SHEFAR Dashboard functionality.</p>
          </article>

          <article>
            <h2>42. Effect of Termination</h2>
            <p>After termination:</p>
            <ul>
              <li>the user&apos;s right to access the Service ends;</li>
              <li>connected services may be disconnected;</li>
              <li>SHEFAR may cease retrieving new data;</li>
              <li>data will be retained, deleted or anonymized according to the SHEFAR Privacy Policy and applicable legal obligations.</li>
            </ul>
            <p>
              Certain provisions of these Terms that by their nature should
              survive termination will remain applicable, including
              provisions regarding intellectual property, liability,
              confidentiality and governing law.
            </p>
          </article>

          <article>
            <h2>43. Data Deletion</h2>
            <p>
              Users may request deletion of data associated with their
              SHEFAR Dashboard account in accordance with the SHEFAR
              Privacy Policy. Requests concerning personal data or
              Google-connected data may be sent to:{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
            <p>SHEFAR may need to verify the identity or authority of the requester before processing a deletion request.</p>
          </article>

          <article>
            <h2>44. Confidentiality</h2>
            <p>
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
            <h2>45. Security of Credentials</h2>
            <p>Users are responsible for maintaining the security of:</p>
            <ul>
              <li>their SHEFAR credentials;</li>
              <li>devices used to access SHEFAR;</li>
              <li>Google Account credentials;</li>
              <li>administrator access;</li>
              <li>connected-service credentials.</li>
            </ul>
            <p>
              SHEFAR cannot be responsible for access resulting from
              credentials voluntarily shared by the user with an
              unauthorized third party.
            </p>
          </article>

          <article>
            <h2>46. Disclaimer of Warranties</h2>
            <p>
              To the extent permitted by applicable law, SHEFAR Dashboard
              is provided on an &quot;as available&quot; basis. SHEFAR works
              to provide a reliable professional service but does not
              warrant that:
            </p>
            <ul>
              <li>the Service will always be uninterrupted;</li>
              <li>every feature will always remain available;</li>
              <li>every third-party integration will remain operational;</li>
              <li>all data will always be completely error-free;</li>
              <li>every analysis will be accurate;</li>
              <li>every recommendation will produce a positive result;</li>
              <li>the Service will meet every user&apos;s specific business objectives.</li>
            </ul>
            <p>Nothing in these Terms excludes warranties that cannot legally be excluded.</p>
          </article>

          <article>
            <h2>47. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, SHEFAR will not be
              liable for indirect or consequential losses arising from use
              of the Service, including losses resulting from:
            </p>
            <ul>
              <li>business decisions based solely on dashboard information;</li>
              <li>advertising performance;</li>
              <li>loss of expected revenue;</li>
              <li>loss of opportunity;</li>
              <li>changes to third-party platforms;</li>
              <li>third-party API failures;</li>
              <li>unauthorized user actions;</li>
              <li>Internet or infrastructure failures outside SHEFAR&apos;s reasonable control.</li>
            </ul>
            <p>
              Nothing in these Terms excludes or limits liability where
              such exclusion or limitation is prohibited by applicable law.
              Where a separate commercial agreement contains specific
              liability provisions, those provisions may apply in addition
              to or instead of this section.
            </p>
          </article>

          <article>
            <h2>48. User Indemnification</h2>
            <p>
              To the extent permitted by applicable law, users may be
              responsible for claims or losses resulting from their own
              unlawful use of SHEFAR, including:
            </p>
            <ul>
              <li>unauthorized access to third-party accounts;</li>
              <li>infringement of third-party rights;</li>
              <li>unlawful processing of personal information;</li>
              <li>fraudulent use;</li>
              <li>deliberate security attacks;</li>
              <li>material violations of these Terms.</li>
            </ul>
          </article>

          <article>
            <h2>49. Force Majeure</h2>
            <p>SHEFAR will not be responsible for failure or delay caused by events reasonably beyond its control, including:</p>
            <ul>
              <li>major Internet outages;</li>
              <li>telecommunications failures;</li>
              <li>widespread cloud-service outages;</li>
              <li>third-party API outages;</li>
              <li>cyberattacks despite reasonable safeguards;</li>
              <li>natural disasters;</li>
              <li>war;</li>
              <li>civil unrest;</li>
              <li>government actions;</li>
              <li>changes in law;</li>
              <li>other events qualifying as force majeure under applicable law.</li>
            </ul>
          </article>

          <article>
            <h2>50. Changes to These Terms</h2>
            <p>SHEFAR may update these Terms to reflect:</p>
            <ul>
              <li>changes to the Service;</li>
              <li>new features;</li>
              <li>new integrations;</li>
              <li>legal or regulatory changes;</li>
              <li>security requirements;</li>
              <li>Google API requirements;</li>
              <li>commercial changes;</li>
              <li>operational improvements.</li>
            </ul>
            <p>
              The latest version will be made available on the SHEFAR
              website. Where required, users may be informed of material
              changes before the updated Terms take effect. Continued use
              of the Service following the effective date of updated Terms
              may constitute acceptance where permitted by applicable law.
            </p>
          </article>

          <article>
            <h2>51. Relationship Between the Parties</h2>
            <p>These Terms do not create an employment relationship, a partnership, a joint venture, a fiduciary relationship, or an agency relationship, unless expressly agreed otherwise in writing. SHEFAR provides the Service as an independent service provider.</p>
          </article>

          <article>
            <h2>52. Assignment</h2>
            <p>
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
            <h2>53. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions will remain in effect
              to the extent permitted by law. The invalid provision will,
              where possible, be interpreted or adjusted so that it most
              closely reflects its original lawful purpose.
            </p>
          </article>

          <article>
            <h2>54. No Waiver</h2>
            <p>
              Failure by SHEFAR to enforce a provision of these Terms does
              not constitute a permanent waiver of that provision. Any
              waiver must be interpreted narrowly and applies only to the
              particular situation concerned unless otherwise expressly
              stated.
            </p>
          </article>

          <article>
            <h2>55. Entire Agreement</h2>
            <p>
              These Terms, together with the SHEFAR Privacy Policy,
              applicable order forms, specific commercial agreements, and
              any additional written terms accepted by the customer,
              constitute the applicable agreement between SHEFAR and the
              user concerning the Service. Specific written agreements may
              supplement or modify these general Terms.
            </p>
          </article>

          <article>
            <h2>56. Governing Law</h2>
            <p>
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
            <h2>57. Privacy Policy</h2>
            <p>
              The SHEFAR{" "}
              <a href="/privacy">Privacy Policy</a> forms an important part
              of the conditions governing use of SHEFAR Dashboard. It
              provides detailed information about personal information,
              Google Account information, Google Ads data, Google Business
              Profile data, OAuth authorization, data use, storage,
              security, retention, deletion, service providers, user
              rights, the Google API Services User Data Policy and Limited
              Use requirements. Users should review the Privacy Policy
              before using Google-connected functionality.
            </p>
          </article>

          <article>
            <h2>58. Contact</h2>
            <p>
              For questions concerning these Terms, SHEFAR Dashboard,
              account access, Google integrations or legal matters relating
              to the Service, please contact:
            </p>
            <p>
              SHEFAR
              <br />
              Email: <a href="mailto:support@shefar.fr">support@shefar.fr</a>
              <br />
              Website: <a href="https://shefar.fr">shefar.fr</a>
            </p>
            <p>
              For privacy, personal-data or Google user-data requests,
              users may also contact:{" "}
              <a href="mailto:support@shefar.fr">support@shefar.fr</a>
            </p>
          </article>

          <article>
            <h2>59. Google Authorization and Third-Party Terms</h2>
            <p>
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
            <h2>60. Final Provision</h2>
            <p>By accessing or using SHEFAR Dashboard, you confirm that:</p>
            <ul>
              <li>you have read these Terms;</li>
              <li>you understand these Terms;</li>
              <li>you have authority to accept them;</li>
              <li>you agree to comply with them;</li>
              <li>you understand that connected third-party services remain subject to their own terms and availability;</li>
              <li>you understand that SHEFAR provides tools and analyses intended to support professional decision-making but does not guarantee particular commercial results.</li>
            </ul>
            <p>
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
