import BookCover from "@/components/BookCover";
import BookVideo from "@/components/BookVideo";
import { Button } from "@/components/ui/button";
import { getBook } from "@/lib/admin/data";
import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log(id);
  const bookData = await getBook(id);
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          Go back
        </Link>
      </Button>
      <div className="flex gap-10 dark:text-black">
        <div
          className="px-20 py-6 rounded-lg"
          style={{ backgroundColor: `${bookData.coverColor}70` }}
        >
          <BookCover
            className="h-52 w-36"
            coverColor={bookData.coverColor}
            coverUrl={bookData.coverUrl}
          />
        </div>
        <div className="flex flex-col justify-between w-1/4 ">
          <p className="mb-2 text-gray-500">
            Created at:{" "}
            {bookData.createdAt?.toDateString().slice(4).split(" ").join("/")}
          </p>
          <h1 className="text-2xl font-semibold">{bookData.title}</h1>
          <h3 className="text-lg font-semibold">By {bookData.author}</h3>
          <p className="text-gray-500">{bookData.genre}</p>
          <Button
            asChild
            className="bg-primary-admin hover:bg-primary-admin/90 py-3 h-auto text-white"
          >
            <Link href={`/admin/books/edit/${bookData.id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Edit Book
            </Link>
          </Button>
        </div>
      </div>
      <section className="flex gap-12 mt-10">
        <div className="flex-[1.5] flex-col flex gap-4">
          <h1 className="text-xl font-semibold text-gray-900">Summary</h1>
          <div className="text-gray-600 space-y-5">
            {bookData.summary.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
        <div className="flex-[1] flex-col flex gap-4">
          <h1 className="text-xl font-semibold text-gray-900">Video</h1>
          <BookVideo videoUrl={bookData.videoUrl} />
        </div>
      </section>
    </>
  );
};

export default Page;
