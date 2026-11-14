export type ProfileData = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 이 파일의 값을 내 정보로 바꾸면 페이지에 바로 반영됩니다.
// 프로필 사진은 public/ 폴더에 넣고 경로를 imageUrl에 적어 주세요.
export const profile: ProfileData = {
  name: "홍길동",
  bio: "웹 개발자 · 프리랜서 (더미 소개 문구)",
  imageUrl: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "naver-blog", title: "Naver Blog", url: "https://blog.naver.com" },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com" },
];
