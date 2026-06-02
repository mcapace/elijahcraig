#!/usr/bin/env node
/**
 * Syncs client source assets from the project root into public/assets/.
 * Run after adding or updating files in the project folder.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public", "assets");

const sources = {
  hero: {
    src: "EC_BarrelProof_Rye_CaseTucker_2026.png",
    outputs: [
      { file: "hero/barrel-proof-rye-hero.png", action: "copy" },
      { file: "hero/barrel-proof-rye-hero-desktop.jpg", max: 2800, quality: 88 },
      { file: "hero/barrel-proof-rye-hero-mobile.jpg", max: 1600, quality: 85 },
    ],
  },
};

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function syncHero() {
  const { src, outputs } = sources.hero;
  const sourcePath = path.join(root, src);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`⚠ Source not found: ${src}`);
    return;
  }

  console.log(`→ Syncing hero from ${src}`);

  for (const output of outputs) {
    const dest = path.join(publicDir, output.file);
    ensureDir(dest);

    if (output.action === "copy") {
      fs.copyFileSync(sourcePath, dest);
      console.log(`  ✓ ${output.file}`);
      continue;
    }

    execSync(
      `sips -Z ${output.max} "${sourcePath}" --out "${dest}" -s format jpeg -s formatOptions ${output.quality}`,
      { stdio: "inherit" },
    );
    console.log(`  ✓ ${output.file}`);
  }
}

console.log("Elijah Craig — asset sync\n");
syncHero();
console.log("\nDone.");
