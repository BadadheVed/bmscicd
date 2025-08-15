import { dbClient } from "@repo/db/client";

export default async function Home() {
  const user = await dbClient.user.findFirst();
  return (
    <div>
      {user?.email}
      {user?.password}
    </div>
  );
}
