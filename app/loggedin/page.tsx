import UserProfile from "@/components/user-profile";
import Tasks from "@/components/tasks";
import { signOutAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";

export default function Loggedin() {
  return (
    <main>
      <UserProfile />
      <Tasks />
      <form action={signOutAction}>
        <Button>Sign Out</Button>
      </form>
    </main>
  );
}
