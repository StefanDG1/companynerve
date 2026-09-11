import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://companynerve.com",
  ),
  title: {
    default: "CompanyNerve | A free foundation for your next SaaS",
    template: "%s | CompanyNerve",
  },
  description:
    "An MIT-licensed SaaS template with accounts, organizations, subscriptions, five design directions, and documentation for founders.",
  openGraph: {
    type: "website",
    siteName: "CompanyNerve",
    title: "A foundation for your next SaaS",
    description: "A free template. Your own product.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
