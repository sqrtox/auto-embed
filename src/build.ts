import { build } from "esbuild";
import { stringify } from "userscript-metadata";
import isValidFilename from "valid-filename";

import pkg from "#src/../package.json" with { type: "json" };
import { metadata } from "#src/metadata.js";

if (!isValidFilename(pkg.name)) {
  throw new Error(`Package name "${pkg.name}" not filesystem friendly`);
}

const metadataSection = stringify(metadata);

await build({
  entryPoints: ["src/index.ts"],
  outfile: `dist/${pkg.name}.user.js`,
  charset: "utf8",
  format: "esm",
  banner: {
    js: `
      ${metadataSection}

      (async () => {
    `,
  },
  footer: {
    js: "})();",
  },
});
