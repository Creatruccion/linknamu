export type ProfileData = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

// 이 파일의 값을 내 정보로 바꾸면 페이지에 바로 반영됩니다.
// 프로필 사진은 public/ 폴더에 넣고 경로를 imageUrl에 적어 주세요.
export const profile: ProfileData = {
  name: "IngeMo Esfutech",
  bio: "감성 ICT 크리에이터 IngeMo",
  imageUrl: "/profile.png",
};

export const links: LinkItem[] = [
  {
    id: "github",
    emoji: "🐙",
    title: "GitHub",
    url: "https://github.com/Creatruccion",
  },
  {
    id: "naver-blog",
    emoji: "✒️",
    title: "Naver Blog",
    url: "https://m.blog.naver.com/ingemo_technologia",
  },
  {
    id: "instagram",
    emoji: "😎",
    title: "Instagram",
    url: "https://www.instagram.com/ingemo_esfutech",
  },
];
