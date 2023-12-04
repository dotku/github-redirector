import { headers } from "next/headers";

export async function GET() {
  const headersList = headers();
  const referer = headersList.get("referer");
  console.log("referer", referer);
  return Response.json({ hello: "world" });
}
