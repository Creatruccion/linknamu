import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col px-6 pt-16 pb-20 sm:pt-24">
      <Profile profile={profile} />
      <ul className="mt-12 flex flex-col gap-4 sm:gap-[1.125rem]">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
