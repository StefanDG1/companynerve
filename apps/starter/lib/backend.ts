import "server-only";
import { cache } from "react";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";
export { api };
export const configured = () =>
  !!(
    process.env.NEXT_PUBLIC_CONVEX_URL &&
    process.env.WORKOS_CLIENT_ID &&
    process.env.WORKOS_API_KEY &&
    process.env.WORKOS_COOKIE_PASSWORD
  );
export const backend = cache(async () => {
  const auth = await withAuth({ ensureSignedIn: true });
  if (!process.env.NEXT_PUBLIC_CONVEX_URL)
    throw new Error("Convex is not configured.");
  const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  client.setAuth(auth.accessToken);
  await client.action(api.identity.bootstrap, {});
  return client;
});
