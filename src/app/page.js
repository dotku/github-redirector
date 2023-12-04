"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

// export async function getServerSideProps(context) {
//   console.log("context", context);
// }

export default function Page({ params }) {
  const pathname = usePathname();
  const router = useRouter();
  const [HREF, setHREF] = useState("");
  console.log("router", router, router.origin);
  console.log("pathname", pathname.href);

  useEffect(() => {
    console.log(window.location.href);
    setHREF(window.location.href);
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <h1>Next GHR (GitHub Redirector)</h1>
        <h2>About</h2>
        <p>
          The goal of this project is providing a quicker way to access github
          page by use url
        </p>
        <code>/$username/$repo_name/$branch_or_filepath</code>
        <p>instead of</p>
        <code>/$username/$repo_name/tree/main/$branch_or_filepath</code>
        <h3 className="h3">Example</h3>
        <p>
          When you are trying to access
          `https://github.com/dotku/tech/tree/main/saas/github`, you can visit
          by using `
          <a href={`${HREF}dotku/tech/saas/github`}>
            {HREF}dotku/tech/saas/github
          </a>
          ` now.
        </p>
      </div>
    </main>
  );
}
