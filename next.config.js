/** @type {import('next').NextConfig} */

const handleShortPath = (path) => {
  console.log("handleShortPath", path);
  const [username, repo, ...rest] = path.split("/");
  if (!repo) return username;
  return `${username}/${repo}/tree/main/${rest.join("/")}`;
};

const nextConfig = {};

module.exports = nextConfig;
