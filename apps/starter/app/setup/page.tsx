import Link from "next/link";
import { configured } from "@/lib/backend";
export default function Page() {
  return (
    <main className="narrow" id="main">
      <h1>
        {configured()
          ? "Your setup is connected."
          : "Connect your application."}
      </h1>
      <p>
        This page explains a missing integration. It does not simulate a
        signed-in account.
      </p>
      <ol>
        <li>Run the Convex development setup from the repository root.</li>
        <li>Configure WorkOS and its localhost callback.</li>
        <li>
          Run <code>node scripts/setup-local.mjs</code> to prepare the starter
          environment.
        </li>
        <li>Restart the starter development server.</li>
      </ol>
      <p>
        See docs/local-development.md for the exact steps and environment
        variables.
      </p>
      <Link href="/sign-in">Continue to sign in</Link>
    </main>
  );
}
