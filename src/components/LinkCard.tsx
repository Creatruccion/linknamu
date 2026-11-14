import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ link, count, onClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group grid w-full grid-cols-[3rem_1fr_3rem] items-center gap-2 rounded-[1.25rem] border border-glass-border bg-glass px-5 py-[1.125rem] text-[0.975rem] font-semibold text-ink shadow-[0_6px_24px_-10px_rgba(var(--shadow-tint),0.25)] backdrop-blur-xl transition duration-300 ease-out hover:bg-glass-hover hover:shadow-[0_10px_30px_-10px_rgba(var(--shadow-tint),0.32)] motion-safe:hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:translate-y-0"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {link.emoji}
      </span>
      <span className="truncate text-center">{link.title}</span>
      <span
        className="text-right text-xs font-medium tabular-nums text-ink-soft"
        aria-label={`클릭 ${count.toLocaleString("ko-KR")}회`}
      >
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
