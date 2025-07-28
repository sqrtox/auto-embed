import Mime from "mime";

import pkg from "#src/../package.json" with { type: "json" };
import { translations } from "#src/i18n/locale.js";

import type { Metadata } from "userscript-metadata";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The repository is located at a different URL than before, but the @namespace has been retained for consistency.
const NAMESPACE = "https://github.com/sqrtox/userscript-embed-url";

const iconPath = join(import.meta.dirname, "./icon.svg");
const icon = await readFile(iconPath, "base64url");
const iconType = Mime.getType(iconPath);

export const metadata: Metadata = {
  name: translations["en-US"]["userscript.metadata.name"],
  "name:ja": translations.ja["userscript.metadata.name"],
  description: translations["en-US"]["userscript.metadata.description"],
  "description:ja": translations.ja["userscript.metadata.description"],
  version: pkg.version,
  license: pkg.license,
  author: pkg.author,
  namespace: NAMESPACE,
  match: "*://*/*",
  icon: `data:${iconType};base64,${icon}`,
};
