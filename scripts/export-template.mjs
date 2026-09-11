import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { resolve, relative, sep, join } from "node:path";
const root = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2).filter((a) => a !== "--");
const get = (flag) => args[args.indexOf(flag) + 1];
const name = get("--name"),
  out = get("--out");
if (
  !args.includes("--name") ||
  !args.includes("--out") ||
  !name ||
  !out ||
  !/^[a-z][a-z0-9-]{1,49}$/.test(name)
) {
  console.error(
    "Usage: pnpm template:export -- --name my-product --out ../my-product",
  );
  process.exit(1);
}
const dest = resolve(out),
  rel = relative(root, dest);
if (!rel.startsWith(".." + sep) || existsSync(dest)) {
  console.error(
    "Choose a new directory outside this repository. Existing paths are never overwritten.",
  );
  process.exit(1);
}
mkdirSync(dest, { recursive: true });
const omitted = new Set([
  "node_modules",
  ".next",
  ".vercel",
  ".git",
  "work",
  "outputs",
  "research",
]);
function filter(path) {
  const name = path.split(/[\\/]/).at(-1);
  return (
    !omitted.has(name) &&
    (!name.startsWith(".env") || name.endsWith(".example")) &&
    !name.endsWith(".tsbuildinfo")
  );
}
for (const path of [
  "apps/starter",
  "convex",
  "packages",
  "docs",
  ".agents",
  "scripts",
  ".github",
  ".gitignore",
  ".gitattributes",
  ".editorconfig",
  ".nvmrc",
  ".prettierignore",
  "tsconfig.json",
  "vitest.config.ts",
  "tests",
  "skills-manifest.json",
  "LICENSE",
  "LICENSE.md",
  "THIRD_PARTY_NOTICES.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
])
  if (existsSync(join(root, path)))
    cpSync(join(root, path), join(dest, path), { recursive: true, filter });
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
pkg.name = name;
pkg.scripts.build = "pnpm --filter @companynerve/starter build";
delete pkg.scripts["dev:marketing"];
writeFileSync(join(dest, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
cpSync(join(root, "pnpm-workspace.yaml"), join(dest, "pnpm-workspace.yaml"));
const lock = readFileSync(join(root, "pnpm-lock.yaml"), "utf8").replace(
  /\n  apps\/marketing:\n[\s\S]*?(?=\n  [^ \n][^\n]*:\n|\npackages:)/,
  "",
);
writeFileSync(join(dest, "pnpm-lock.yaml"), lock);
writeFileSync(join(dest, "convex.json"), "{}\n");
const config = join(dest, "packages/company-config/index.ts");
let content = readFileSync(config, "utf8");
content = content
  .replace("slug: 'your-product'", `slug: '${name}'`)
  .replace("slug:'your-product'", `slug:'${name}'`)
  .replaceAll("Your product", name);
writeFileSync(config, content);
writeFileSync(
  join(dest, "README.md"),
  `# ${name}\n\nCreated from CompanyNerve ${pkg.version}.\n\nUse Node 24 and the pinned pnpm version. Run \`pnpm install --frozen-lockfile\`, follow [local setup](docs/local-development.md), then run \`pnpm dev\`.\n\nEdit \`packages/company-config/index.ts\` and pick your design recipe. No provider credentials or CompanyNerve marketing site are included.\n\nRun \`pnpm typecheck\`, \`pnpm test\`, and \`pnpm build\` before deployment.\n`,
);
writeFileSync(
  join(dest, "AGENTS.md"),
  "# Product instructions\n\nThis is a CompanyNerve-generated product. Read README.md and docs/local-development.md. Keep backend organization authorization, billing checks, and negative tests when adding your product logic. Read relevant skills under .agents/skills. Never commit secrets. Record your own product requirements here.\n",
);
writeFileSync(
  join(dest, "template-version.json"),
  JSON.stringify(
    {
      template: "companynerve",
      version: pkg.version,
      createdAt: new Date().toISOString(),
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `Exported ${name} to ${dest}. Run pnpm install --frozen-lockfile in that directory.`,
);
