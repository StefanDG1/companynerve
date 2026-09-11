import Link from "next/link";
import { Button } from "@companynerve/ui";
import { company } from "@companynerve/company-config";
import { Header } from "@/components/header";
export default function Page() {
  return (
    <div className="container">
      <Header />
      <main id="main" className="hero">
        <div>
          <p className="intro">Your next product starts here</p>
          <h1>A workspace for work that matters.</h1>
          <p>
            {company.product.description} Replace this introduction with the
            problem you solve for your customers.
          </p>
          <div className="actions">
            <Button asChild>
              <Link href="/sign-up">Create an account</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
          <p className="muted" style={{ fontSize: ".8rem", marginTop: 20 }}>
            Example application built from CompanyNerve.
          </p>
        </div>
        <div className="card">
          <h2>Start with one useful thing.</h2>
          <p className="muted">
            Create a workspace, invite your team, and keep your projects
            together.
          </p>
          <ul style={{ paddingLeft: 20 }}>
            <li>Separate organizations</li>
            <li>Clear member permissions</li>
            <li>Your choice of design</li>
          </ul>
          <Button variant="outline" asChild>
            <Link href="/recipes">Explore the design recipes</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
