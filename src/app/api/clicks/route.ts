import { connection } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// GET /api/clicks → { "github": 42, "naver-blog": 7, ... }
// 모든 링크의 클릭 수를 한 번에 돌려줍니다. 기록이 없는 링크는 0입니다.
export async function GET() {
  await connection(); // 빌드 시 미리 만들지 않고, 요청마다 DB에서 읽기

  try {
    const collection = await getClicksCollection();
    const ids = links.map((link) => link.id);
    const docs = await collection.find({ _id: { $in: ids } }).toArray();

    const counts: Record<string, number> = Object.fromEntries(ids.map((id) => [id, 0]));
    for (const doc of docs) counts[doc._id] = doc.count;

    return Response.json(counts, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("[GET /api/clicks]", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
