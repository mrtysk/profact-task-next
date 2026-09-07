import { redirect } from "next/navigation";

export default function ProfilePage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div>
      <h1>プロフィールページ</h1>
    </div>
  );
}
