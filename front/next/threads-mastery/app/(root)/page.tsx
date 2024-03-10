import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Hello threads</h1>
      <UserButton />
    </main>
  );
}
