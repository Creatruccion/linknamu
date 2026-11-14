import "server-only";
import { MongoClient, type Collection } from "mongodb";

// 링크 하나당 문서 하나: { _id: 링크 id, count: 클릭 수 }
export type ClickDoc = { _id: string; count: number };

const DB_NAME = "linknamu";
const COLLECTION = "clicks";

// 개발 서버는 코드가 바뀔 때마다 모듈을 다시 불러오므로,
// 연결을 전역에 보관해 매번 새 연결이 쌓이지 않게 합니다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 없습니다. .env.local을 확인해 주세요.");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((error) => {
      // 연결에 실패하면 다음 요청에서 다시 시도할 수 있게 비워 둡니다.
      globalForMongo._mongoClientPromise = undefined;
      throw error;
    });
  }
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection(): Promise<Collection<ClickDoc>> {
  const client = await getClient();
  return client.db(DB_NAME).collection<ClickDoc>(COLLECTION);
}
