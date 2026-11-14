import Image from "next/image";
import type { ProfileData } from "@/data/profile";

type ProfileProps = {
  profile: ProfileData;
};

export default function Profile({ profile }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/60 p-1.5 shadow-[0_18px_40px_-12px_rgba(var(--shadow-tint),0.45),0_4px_12px_-4px_rgba(var(--shadow-tint),0.2)] ring-1 ring-glass-border backdrop-blur-sm dark:bg-white/10">
        <Image
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          width={240}
          height={240}
          priority
          unoptimized={profile.imageUrl.endsWith(".svg")}
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-[1.375rem] font-bold tracking-[-0.02em] text-ink sm:text-2xl">
        {profile.name}
      </h1>
      <p className="mt-2 whitespace-pre-line text-[0.9375rem] leading-relaxed text-ink-soft">
        {profile.bio}
      </p>
    </section>
  );
}
