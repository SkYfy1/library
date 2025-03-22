import { auth } from "@/auth";
import BookList from "@/components/BookList";
import ProfileCardSkeleton from "@/components/skeletons/ProfileCardSkeleton";
import Theme from "@/components/Theme";
import ProfileCard from "@/components/ui/ProfileCard";
import { getBorrowedBooks } from "@/lib/data/book";
import { getUserImage } from "@/lib/data/user";

import React, { Suspense } from "react";

const Page = async () => {
  const session = await auth();
  const borrowData = await getBorrowedBooks(session?.user?.id!);
  const promise = getUserImage(session?.user?.id);

  const verified = session?.user.verified;

  return (
    <div className="flex justify-between flex-col md:flex-row gap-12">
      {/* Placeholder */}
      <div className="flex flex-col gap-2 w-full items-center">
        <Suspense fallback={<ProfileCardSkeleton />}>
          <ProfileCard
            email={session?.user?.email!}
            name={session?.user?.name!}
            id={session?.user?.id!}
            promise={promise}
            verified={verified!}
          />
        </Suspense>
        <div className="mt-10 items-center flex flex-col gap-2">
          <h1 className="dark:text-white text-gray-700 font-bold text-2xl">
            Change theme
          </h1>
          <Theme />
        </div>
      </div>
      <BookList
        title="Borrowed Books"
        books={borrowData?.data!}
        containerClassName="w-full"
      />
    </div>
  );
};

export default Page;
