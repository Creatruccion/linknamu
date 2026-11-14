import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col px-6 pt-16 pb-20 sm:pt-24">
      <Profile profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
