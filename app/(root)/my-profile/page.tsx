import { auth } from "@/auth";
import BookList from "@/components/BookList";
import ProfileCardSkeleton from "@/components/skeletons/ProfileCardSkeleton";
import ProfileCard from "@/components/ui/ProfileCard";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { getBorrowedBooks } from "@/lib/data/book";
import { getUserImage } from "@/lib/data/user";
import { eq } from "drizzle-orm";

import React, { Suspense } from "react";

const Page = async () => {
  const session = await auth();
  const borrowData = await getBorrowedBooks(session?.user?.id!);
  const promise = getUserImage(session?.user?.id);
  const role = await db
    .select({ isAdmin: users.role, status: users.status })
    .from(users)
    .where(eq(users.id, session?.user.id!))
    .limit(1);

  const verified = role[0].status === "APPROVED";

  // const verified = session?.user.verified;

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
            role={role[0].isAdmin}
          />
        </Suspense>
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
