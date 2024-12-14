import { auth } from "@/auth";
import Tasks from "@/components/tasks";
import UserProfile from "@/components/user-profile";

interface UserProfileProps {
  params: {
    username: string;
  };
}

export default async function UserPage({ params }: UserProfileProps) {
  const { username } = params;

  const session = await auth();

  if (!session) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>Please sign in to view this page.</p>
      </div>
    );
  }

  const user = await fetchUserByUsername(username);

  if (!user) {
    return (
      <div>
        <h1>User Not Found</h1>
      </div>
    );
  }

  return (
    <main>
      <UserProfile />
      <Tasks />
    </main>
  );
}

async function fetchUserByUsername(username: string) {
  const session = await auth();
  if (username === session?.user?.username) {
    return { username, email: session?.user?.email };
  }
  return null;
}
