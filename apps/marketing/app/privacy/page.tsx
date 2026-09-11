import { Header, Footer } from "@/components/site";
import { company } from "@companynerve/company-config";
export const metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy" },
};
export default function Page() {
  return (
    <div className="container">
      <Header />
      <main id="main" className="doc">
        <h1>Privacy at {company.product.name}</h1>
        <p>Updated September 11, 2026.</p>
        <h2>Website and account data</h2>
        <p>
          The public website does not use advertising trackers or a client
          analytics SDK. Our hosting provider processes request metadata to
          deliver and protect the service.
        </p>
        <p>
          When you create an account, WorkOS processes your email address and
          authentication information. If you choose Google sign-in, we request
          your basic profile and email address, not access to your Gmail, Drive,
          or other Google content.
        </p>
        <p>
          The application stores your profile, workspace memberships, projects,
          invitations, and audit records in Convex. Workspace owners and
          administrators can see membership details and manage the workspace
          according to their roles. Session cookies keep you signed in.
        </p>
        <h2>Payments</h2>
        <p>
          When subscriptions are offered, Stripe processes payment information
          on its hosted pages. The application stores customer and subscription
          references and the billing status needed to control paid access. Card
          details are not stored in the application database.
        </p>
        <h2>Export and deletion</h2>
        <p>
          You can export your account data and request account deletion from
          Account settings. Workspace owners can export or delete their
          workspace. Transfer ownership or delete owned workspaces before
          deleting your account. Account deletion does not erase content owned
          by a shared workspace. Payment providers may retain their own records.
        </p>
        <p>
          Account deletion revokes application access while a background job
          removes the identity. Contact us if a deletion does not complete.
          Technical logs and provider backups are subject to each provider's
          retention processes.
        </p>
        <h2>Providers and separate products</h2>
        <p>
          We use Vercel for hosting, Convex for application data, and WorkOS for
          authentication. Google participates when you choose its sign-in
          option. Stripe participates when you use billing. Exported products
          operate under their own owners, environments, and privacy policies.
        </p>
        <h2>Contact</h2>
        <p>
          For account, privacy, or deletion questions, email{" "}
          <a href={"mailto:" + company.website.supportEmail}>
            {company.website.supportEmail}
          </a>
          . Do not post private information in a public GitHub issue.
        </p>
      </main>
      <Footer />
    </div>
  );
}
