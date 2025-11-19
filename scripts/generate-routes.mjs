#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");

// Routes that need static HTML files
const routes = [
  "school",
  "mindfulness",
  "cabinet-rent",
  "contacts",
  "privacy",
  "terms",
  "consent",
  "cancellation",
  "test-ei-part1",
  "test-ei-part2",
];

// Read the main index.html
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

// Create directories and HTML files for each route
routes.forEach((route) => {
  const routeDir = path.join(distDir, route);

  // Create directory if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Write index.html in the route directory
  fs.writeFileSync(path.join(routeDir, "index.html"), indexHtml);

  console.log(`✓ Created /${route}/index.html`);
});

console.log("✅ All route files created successfully!");
