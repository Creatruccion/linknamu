import Image from "next/image";
import type { ProfileData } from "@/data/profile";

type ProfileProps = {
  profile: ProfileData;
};

export default function Profile({ profile }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={176}
        height={176}
        priority
        unoptimized={profile.imageUrl.endsWith(".svg")}
        className="h-36 w-36 rounded-full border-2 border-zinc-900 object-cover sm:h-44 sm:w-44 dark:border-zinc-100"
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
    </section>
  );
}
