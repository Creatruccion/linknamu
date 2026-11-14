"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져오기
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal, cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: Record<string, number>) => {
        // 받는 사이에 이미 누른 클릭(+1)은 잃지 않도록 큰 값을 유지
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, n] of Object.entries(prev)) next[id] = Math.max(n, data[id] ?? 0);
          return next;
        });
      })
      .catch((error) => {
        if (error.name !== "AbortError") console.error("클릭 수를 불러오지 못했습니다.", error);
      });
    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 반영
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    // 링크가 새 탭으로 열려도 요청이 끝까지 전송되도록 keepalive 사용
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then(({ count }: { count: number }) => {
        // 서버 값이 더 크면(다른 사람의 클릭 포함) 그 값으로 맞추기
        setCounts((prev) => ({ ...prev, [id]: Math.max(prev[id] ?? 0, count) }));
      })
      .catch((error) => console.error("클릭 수를 저장하지 못했습니다.", error));
  }

  return (
    <ul className="mt-12 flex flex-col gap-4 sm:gap-[1.125rem]">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
