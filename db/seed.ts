import dummyBooks from "@/dummyBooks.json";
import ImageKit from "imagekit";
import { books } from "./schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle({ client: sql });

const imageKit = new ImageKit({
  urlEndpoint: process.env.NEXT_PUBLIC_IMGKIT_ENDPOINT!,
  publicKey: process.env.NEXT_PUBLIC_IMGKIT_KEY!,
  privateKey: process.env.IMGKIT_PRIVATE_KEY!,
});

const uploadToImageKit = async (
  url: string,
  fileName: string,
  folder: string
) => {
  try {
    const response = await imageKit.upload({ file: url, fileName, folder });
    return response.filePath;
  } catch (error) {
    console.log(error);
  }
};

const seed = async () => {
  console.log("Seeding data...");
  try {
    for (const book of dummyBooks) {
      const coverUrl = (await uploadToImageKit(
        book.coverUrl,
        `${book.title}.jpg`,
        "/books/covers"
      )) as string;
      const videoUrl = (await uploadToImageKit(
        book.videoUrl,
        `${book.title}.mp4`,
        "/books/video"
      )) as string;

      await db.insert(books).values({ ...book, coverUrl, videoUrl });
    }
    console.log("Data seeded successfully!");
  } catch (error) {
    console.log(error);
  }
};

seed();
