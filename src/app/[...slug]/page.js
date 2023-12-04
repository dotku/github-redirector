import { redirect } from "next/navigation";

export default async function Page({ params }) {
  console.log("params", params);
  const [username, repo, branchOrFilePath, ...rest] = params.slug;

  if (!repo) {
    return redirect("/");
  }

  redirect(
    await genGitHubURL({
      username,
      repo,
      branchOrFilePath,
      rest,
    })
  );
}

async function genGitHubURL({ username, repo, branchOrFilePath, rest }) {
  const hasDefaultBranch = ["main", "master"].includes(branchOrFilePath)
    ? true
    : false;
  if (hasDefaultBranch)
    return `https://github.com/${username}/${repo}/tree/${branchOrFilePath}/${rest.join(
      "/"
    )}`;

  const URL = `https://github.com/${username}/${repo}/tree/main/${branchOrFilePath}/${rest.join(
    "/"
  )}`;

  try {
    const rsp = await fetch(URL);
    if (rsp.status === 404) {
      throw new Error("404");
    }
    return URL;
  } catch (error) {
    console.error("error", error.message);
    return branchOrFilePath
      ? `https://github.com/${username}/${repo}/tree/master/${branchOrFilePath}/${rest.join(
          "/"
        )}`
      : `https://github.com/${username}/${repo}`;
  }
}
