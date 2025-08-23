import { dbClient } from "@repo/db/client";

export default async function Home() {
  const user = await dbClient.user.findFirst();
  return (
    <div>
      emails is {user?.email}
      password is {user?.password}
      hello there this is updated by the CI/CD pipeline
    </div>
  );
}
