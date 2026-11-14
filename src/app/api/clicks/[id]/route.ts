import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// POST /api/clicks/:id → 해당 링크의 클릭 수를 1 올리고 { count } 를 돌려줍니다.
export async function POST(_request: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  // 등록된 링크만 집계 (아무 id나 DB에 쌓이지 않도록)
  if (!links.some((link) => link.id === id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 404 });
  }

  try {
    const collection = await getClicksCollection();
    const doc = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ count: doc?.count ?? 1 });
  } catch (error) {
    console.error("[POST /api/clicks/:id]", error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
