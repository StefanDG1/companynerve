import { Header, Footer } from "@/components/site";
export const metadata = { title: "Privacy" };
export default function Page() {
  return (
    <div className="container">
      <Header />
      <main id="main" className="doc">
        <h1>Privacy on this website</h1>
        <p>Updated September 11, 2026.</p>
        <p>
          The CompanyNerve marketing site has no account registration, contact
          form, analytics SDK, advertising tracker, or payment collection. We do
          not ask you to submit personal data on this site.
        </p>
        <h2>Hosting and external links</h2>
        <p>
          The hosting provider processes requests and may retain technical logs
          such as IP addresses and request metadata to deliver and protect the
          site. Links to GitHub and other providers take you to services with
          their own privacy terms.
        </p>
        <h2>The template application</h2>
        <p>
          A product built from the template has its own users, data, providers,
          and privacy responsibilities. This page is not a privacy policy for
          those separate products.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about this repository and website, use the contact
          routes published on{" "}
          <a href="https://github.com/StefanDG1">
            the maintainer's GitHub profile
          </a>
          . Do not include private information in a public issue.
        </p>
      </main>
      <Footer />
    </div>
  );
}
