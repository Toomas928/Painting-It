import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = join(root, "public");

await mkdir(publicDir, { recursive: true });

await rm(join(publicDir, "uv"), { recursive: true, force: true });
await rm(join(publicDir, "epoxy"), { recursive: true, force: true });
await rm(join(publicDir, "baremux"), { recursive: true, force: true });

await cp(uvPath, join(publicDir, "uv"), { recursive: true });
await cp(epoxyPath, join(publicDir, "epoxy"), { recursive: true });
await cp(baremuxPath, join(publicDir, "baremux"), { recursive: true });

console.log("Ultraviolet, Epoxy, and BareMux assets copied into public/.");
console.log("Netlify static build is ready.");
