/** @type {import('next').NextConfig} */

// Le site est publié en tant que "project page" GitHub Pages
// (https://ibrahime66.github.io/mariage/), donc tout est servi depuis un
// sous-dossier /mariage. On préfixe uniquement quand on build dans GitHub
// Actions, pour ne pas casser `next dev` en local.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "mariage";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
