import { auth } from "@/auth";
import BookList from "@/components/BookList";
import Theme from "@/components/Theme";
import ProfileCard from "@/components/ui/ProfileCard";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { getBorrowedBooks } from "@/lib/data/book";
import { eq } from "drizzle-orm";

import React from "react";

const Page = async () => {
  const session = await auth();
  const borrowData = await getBorrowedBooks(session?.user?.id!);
  const userImage = await db
    .select()
    .from(users)
    .where(eq(users.id, session?.user?.id!));

  // console.log(session?.user);
  console.log(userImage[0]);
  console.log("userImage:", userImage);

  return (
    <div className="flex justify-between gap-12">
      {/* Placeholder */}
      <div className="flex flex-col gap-2 w-full items-center">
        {/* <ProfileCard
          email={session?.user?.email!}
          name={session?.user?.name!}
          id={session?.user?.id!}
          imageUrl={userImage[0].universityCard}
        /> */}
        <div className="mt-10 items-center flex flex-col gap-2">
          <h1 className="dark:text-white text-gray-700 font-bold text-2xl">
            Change theme
          </h1>
          <Theme />
        </div>
      </div>
      {/* <article className="user-card">
        <div className="card-bookmark"></div>
        <div className="flex flex-col mt-16 gap-10">
          <section className="flex gap-6 items-center">
            <div className="size-36 border-8 border-solid border-gray-600 rounded-full"></div>
            <div className="flex flex-col gap-1">
              <p>Verified Student</p>
              <h2 className="font-semibold text-lg">{session?.user?.name}</h2>
              <p>{session?.user?.email}</p>
            </div>
          </section>
          <section className="flex flex-col gap-1">
            <h3>University</h3>
            <h2 className="font-semibold text-lg">Snus</h2>
          </section>
          <section className="flex flex-col gap-1">
            <h3>Student ID</h3>
            <h2 className="font-semibold text-lg">{session?.user?.id}</h2>
          </section>
          <IKImage
            path={userImage[0].university_card}
            alt="Book cover"
            loading="lazy"
            urlEndpoint={config.env.imagekit.urlEndpoint}
            width={200}
            height={100}
          />
        </div>
      </article> */}
      <BookList
        title="Borrowed Books"
        books={borrowData?.data!}
        containerClassName="w-full"
      />
    </div>
  );
};

export default Page;
