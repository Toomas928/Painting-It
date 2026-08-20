import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = join(root, "public");
const netlifyDir = join(root, "netlify");

await mkdir(publicDir, { recursive: true });

await rm(join(publicDir, "uv"), { recursive: true, force: true });
await rm(join(publicDir, "epoxy"), { recursive: true, force: true });
await rm(join(publicDir, "baremux"), { recursive: true, force: true });

await cp(uvPath, join(publicDir, "uv"), { recursive: true });
await cp(epoxyPath, join(publicDir, "epoxy"), { recursive: true });
await cp(baremuxPath, join(publicDir, "baremux"), { recursive: true });

// Restore the app's custom UV config after copying the package's stock config.
await cp(
	join(netlifyDir, "uv.config.js"),
	join(publicDir, "uv", "uv.config.js")
);

console.log("Ultraviolet, Epoxy, and BareMux assets copied into public/.");
console.log("Custom Netlify UV config installed.");
