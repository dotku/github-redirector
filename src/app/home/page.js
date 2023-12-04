"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

// export async function getServerSideProps(context) {
//   console.log("context", context);
// }

export default function Page({ params }) {
  const router = useRouter();
  console.log("router", router);

  return (
    <main className={styles.main}>
      <div>
        <p>
          The goal of this project is providing a quicker way to access github
          page by use url
        </p>
        <code>/$username/$repo_name/$folder_file_path</code>
        <p>instead of</p>
        <code>/$username/$repo_name/tree/main/$folder_file_path</code>
        <p>
          example try to access
          `https://github.com/dotku/tech/tree/main/saas/github` by using `
          <a href="/dotku/tech/saas/github">/dotku/tech/saas/github</a> now.`
        </p>
      </div>
    </main>
  );
}
