import UserProfile from "@/components/user-profile";
import Tasks from "@/components/tasks";

export default function Loggedin() {
  return (
    <main>
      <UserProfile />
      <Tasks />
    </main>
  );
}
