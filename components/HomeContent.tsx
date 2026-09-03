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
            <p className="introduction">
              SHEFAR Dashboard is a web application designed to help
              businesses manage and understand their digital performance. It
              allows users to securely connect several Google services,
              including Google Ads and Google Business Profile, in order to
              retrieve only the data authorized by the user through Google
              APIs and centralize it within a single interface.
            </p>
            <p className="introduction">
              The application allows businesses to monitor their main
              performance indicators, including advertising campaigns,
              budgets, impressions, clicks, costs, conversions, conversion
              rates, local visibility data and information associated with
              Google Business Profile locations. These data are organized
              into clear and accessible dashboards to make performance
              monitoring easier and help users understand how their results
              evolve over time.
            </p>
            <p className="introduction">
              The purpose of SHEFAR Dashboard is to transform data that is
              distributed across several Google platforms into a clear and
              actionable view. Users can therefore identify important
              changes, areas requiring attention, opportunities and priority
              actions more quickly in order to manage their digital
              performance more effectively.
            </p>
            <div className="ouverture-actions">
              <a className="bouton bouton-plein" href="#">
                Access the Dashboard
              </a>
              <a className="bouton bouton-contour" href="#produits">
                View features
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="produits">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre">Integrations</p>
              <h2>Connect Your Google Services to SHEFAR Dashboard</h2>
              <p>
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
                <p>
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
                <p>
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
                <p>
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
                <p>
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
                <p>
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
              <h2>Step 1 — Connect Your Google Accounts and Services</h2>
              <h3>Connect Your Business to SHEFAR Dashboard</h3>
              <p>
                SHEFAR Dashboard allows users to connect the Google accounts
                and services required for the different modules of the
                application. The connection is made through Google OAuth
                2.0, Google&apos;s secure authorization protocol.
              </p>
              <p>When you choose to connect a Google service, you are redirected to Google where you can:</p>
              <ul>
                <li>select your Google Account;</li>
                <li>identify the accounts or business locations you want to make accessible;</li>
                <li>review the permissions requested by SHEFAR Dashboard;</li>
                <li>accept or refuse the requested permissions.</li>
              </ul>
              <p>
                <strong>
                  SHEFAR Dashboard never asks for, collects or stores your
                  Google Account password.
                </strong>{" "}
                Authentication is handled directly by Google. Access to
                Google data is performed using the OAuth permissions
                explicitly granted by the user.
              </p>

              <h3>Google Ads</h3>
              <p>
                Connecting Google Ads allows SHEFAR Dashboard to retrieve
                the information necessary to monitor your advertising
                campaigns. Depending on the information available in your
                Google Ads account and the features enabled, SHEFAR
                Dashboard may centralize:
              </p>
              <ul>
                <li>connected Google Ads accounts;</li>
                <li>campaigns;</li>
                <li>advertising budgets;</li>
                <li>impressions;</li>
                <li>clicks;</li>
                <li>advertising costs;</li>
                <li>conversions;</li>
                <li>conversion rates;</li>
                <li>cost per conversion;</li>
                <li>campaign performance;</li>
                <li>changes in key performance indicators over time.</li>
              </ul>
              <p>
                This information allows users to access their main Google
                Ads KPIs directly from SHEFAR Dashboard and monitor the
                evolution of their advertising investment more easily.
              </p>

              <h3>Google Business Profile</h3>
              <p>
                Connecting Google Business Profile allows SHEFAR Dashboard
                to centralize information relating to business locations
                and their local presence on Google. Depending on the
                information available and the modules enabled, SHEFAR
                Dashboard may use information required to display:
              </p>
              <ul>
                <li>locations associated with the connected account;</li>
                <li>business profile information;</li>
                <li>local visibility indicators;</li>
                <li>available location performance information;</li>
                <li>key signals used to monitor changes in local presence.</li>
              </ul>
              <p>
                SHEFAR Dashboard therefore allows businesses with one or
                several locations to access their local information in the
                same environment as their other digital-performance
                indicators.
              </p>

              <h3>Website Technical Data</h3>
              <p>
                SHEFAR Dashboard may also integrate technical information
                used to evaluate website performance, notably through
                Google PageSpeed Insights, in order to measure:
              </p>
              <ul>
                <li>page performance;</li>
                <li>loading speed;</li>
                <li>user experience;</li>
                <li>Core Web Vitals and other technical metrics;</li>
                <li>technical elements that may require optimization.</li>
              </ul>
              <p>
                These indicators complement marketing information and
                provide a more complete view of digital performance.
              </p>

              <h3>Why SHEFAR Dashboard Requests Access to Google</h3>
              <p>
                The Google permissions requested by SHEFAR Dashboard are
                used exclusively to provide the features activated by the
                user. These permissions may be required to:
              </p>
              <ul>
                <li>identify the connected Google Account;</li>
                <li>retrieve accounts accessible to the user;</li>
                <li>display Google Ads data;</li>
                <li>display Google Business Profile data;</li>
                <li>centralize performance indicators in the Dashboard;</li>
                <li>update information when the user accesses their account.</li>
              </ul>
              <p>
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
              <h2>Step 2 — Centralize, Analyze and Manage Your Performance</h2>
              <h3>One Dashboard for Your Digital Data</h3>
              <p>
                Once the selected services are connected, SHEFAR Dashboard
                centralizes data from different sources in order to make it
                easier to consult, understand and compare. The Dashboard
                may bring together:
              </p>
              <ul>
                <li>Google Ads data;</li>
                <li>Google Business Profile data;</li>
                <li>website performance information;</li>
                <li>visibility indicators;</li>
                <li>performance trends;</li>
                <li>alerts;</li>
                <li>opportunities;</li>
                <li>identified priorities.</li>
              </ul>

              <h3>Monitor Your Google Ads KPIs</h3>
              <p>
                SHEFAR Dashboard allows users to monitor the main indicators
                of their Google Ads campaigns without having to analyze
                each campaign separately across multiple screens:
                advertising spend, clicks, impressions, conversions, cost
                per conversion, conversion rates and other indicators
                available in the connected accounts.
              </p>

              <h3>Monitor Your Local Visibility</h3>
              <p>
                For businesses with physical locations, SHEFAR Dashboard
                can centralize information obtained from Google Business
                Profile and compare local visibility information with the
                company&apos;s other digital-performance indicators.
              </p>

              <h3>Analyze Your Website Performance</h3>
              <p>
                Technical website information can be combined with
                marketing data to help users understand whether certain
                digital-performance issues may be related to the experience
                provided by their website.
              </p>

              <h3>Identify Important Changes</h3>
              <p>
                SHEFAR Dashboard does more than simply display numbers. The
                application organizes information in order to make
                significant changes easier to identify:
              </p>
              <ul>
                <li>an increase or decrease in conversions;</li>
                <li>a change in advertising costs;</li>
                <li>a change in local visibility;</li>
                <li>a change in the performance of a business location;</li>
                <li>a deterioration in a technical indicator;</li>
                <li>an unusual variation requiring review.</li>
              </ul>

              <h3>Identify Your Priorities</h3>
              <p>SHEFAR Dashboard brings together the information necessary to help businesses distinguish:</p>
              <ul>
                <li>what is performing well;</li>
                <li>what is changing;</li>
                <li>what requires further analysis;</li>
                <li>what can be optimized;</li>
                <li>what should be prioritized.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="fonctionnement">
          <div className="conteneur">
            <div className="section-entete">
              <p className="surtitre">How It Works</p>
              <h2>A Dashboard Designed to Centralize Your Company&apos;s Google Data</h2>
              <p>
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
                  <b>1. Connect your Google services</b>
                  <span>You decide which Google services to connect to SHEFAR Dashboard.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>2. Retrieve authorized data</b>
                  <span>SHEFAR Dashboard retrieves the data you have authorized through the relevant APIs.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>3. Centralize in your Dashboard</b>
                  <span>Your key indicators are centralized within your SHEFAR Dashboard account.</span>
                </div>
              </div>
              <div className="argument">
                <span className="argument-puce" aria-hidden="true"></span>
                <div>
                  <b>4. Track and prioritize</b>
                  <span>You monitor your performance, identify important changes and determine your priorities.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="securite">
          <div className="conteneur">
            <div className="encadre">
              <h3>You stay in control of your Google accounts.</h3>
              <p>
                SHEFAR Dashboard uses OAuth 2.0 to let users connect their
                own Google services. Access is limited to the data required
                for the features activated by the user.
              </p>
              <p>
                SHEFAR Dashboard never asks for your Google password.
                Permissions can be revoked at any time from your Google
                Account. You can revoke the Google permissions granted to
                SHEFAR Dashboard and request deletion of your data in
                accordance with our Privacy Policy.
              </p>
              <div className="ouverture-actions">
                <a className="bouton bouton-contour" href="/privacy">
                  View our Privacy Policy
                </a>
                <a className="bouton bouton-contour" href="/terms">
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
              <p className="surtitre">Integrations</p>
              <h2>Supported services</h2>
              <p>Each connection is initiated by the user and can be removed at any time.</p>
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
