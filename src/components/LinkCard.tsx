import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
};

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border-2 border-zinc-900 bg-white px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:border-zinc-100 dark:bg-zinc-900 dark:focus-visible:ring-zinc-100 dark:focus-visible:ring-offset-black"
    >
      {link.emoji && (
        <span aria-hidden="true" className="mr-2">
          {link.emoji}
        </span>
      )}
      {link.title}
    </a>
  );
}
