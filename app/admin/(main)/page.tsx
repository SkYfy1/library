import { Table } from "@/components/admin/table/Table";
import BookTable from "@/components/BookTable";
import { Button } from "@/components/ui/button";
import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import {
  getAccountRequests,
  getBooks,
  getBorrowedBooks,
} from "@/lib/admin/data";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const [booksList, borrowedBooks, accounts] = await Promise.all([
    getBooks(),
    getBorrowedBooks(),
    getAccountRequests(),
  ]);
  // const booksList = await getBooks();
  // const borrowedBooks = await getBorrowedBooks();
  // const accounts = await getAccountRequests();
  return (
    <main>
      <section className="flex gap-4 w-full">
        <div className="p-4 bg-white w-full rounded-md">
          <h3 className="mb-4 text-gray-600 font-semibold">Borrowed books</h3>
          <h1 className="font-bold text-2xl">{borrowedBooks.length}</h1>
        </div>
        <div className="p-4 bg-white  w-full rounded-md">
          <h3 className="mb-4 text-gray-600 font-semibold">Total users</h3>
          <h1 className="font-bold text-2xl">{accounts.length}</h1>
        </div>
        <div className="p-4 bg-white  w-full rounded-md">
          <h3 className="mb-4 text-gray-600 font-semibold">Total books</h3>
          <h1 className="font-bold text-2xl">{booksList.length}</h1>
        </div>
      </section>
      <section className="grid grid-cols-6 grid-rows-2 gap-2 mt-4 h-[75vh]">
        {/*  */}
        <div className="col-span-3 row-span-1 rounded-md p-4 overflow-hidden bg-white after-gradient">
          <div className="flex justify-between mb-4">
            <h1 className="mb-2 font-semibold text-xl">
              Recently borrowed books
            </h1>
            <Link href="/admin/borrow-records">
              <Button className="bg-gray-50 text-purple-700 font-semibold">
                View All
              </Button>
            </Link>
          </div>
          <Table type="Borrow" size="small" data={borrowedBooks} />
        </div>
        {/*  */}
        <div className="col-span-3 row-span-1 rounded-md p-4 overflow-hidden bg-white after-gradient">
          <div className="flex justify-between mb-4">
            <h1 className="mb-2 text-xl font-semibold">Account Requests</h1>
            <Link href="/admin/account-requests">
              <Button className="bg-gray-50 text-purple-700 font-semibold">
                View All
              </Button>
            </Link>
          </div>
          {accounts.length >= 1 ? (
            <Table type="Account Request" size="small" data={accounts} />
          ) : (
            <div className="text-center flex flex-col gap-2 mt-8">
              <div className="w-full flex justify-center items-center">
                <div className="size-44 bg-light-150 rounded-full relative">
                  <div className="w-[220px] h-[100px] flex  justify-center items-end pb-2 gap-2 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-lg">
                    <div className="rounded-lg bg-light-150 size-16"></div>
                    <div className="flex flex-col gap-2">
                      <div className="h-[10px] w-28 bg-light-150 rounded-md mb-1"></div>
                      <div className="h-2 w-32 bg-light-150 rounded-md"></div>
                      <div className="h-2 w-20 bg-light-150 rounded-md mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="font-semibold text-lg">
                No Pending Account Requests
              </h1>
              <p className="text-gray-400">
                There are currently no account requests awaiting approval.
              </p>
            </div>
          )}
        </div>
        {/*  */}
        <div className="col-start-4 row-start-1 col-span-3 row-span-2 rounded-md overflow-hidden p-4 flex flex-col gap-4 bg-white after-gradient">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Recently added books</h1>
            <Link href="/admin/books">
              <Button className="bg-gray-50 text-purple-700 font-semibold">
                View All
              </Button>
            </Link>
          </div>

          <Link
            href="/admin/books/new"
            className="w-full bg-light-100 justify-start p-4 flex items-center gap-2 rounded-md font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 bg-white rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Book
          </Link>
          {/* <BookTable type="mini" /> */}
          <Table type="Books" size="small" data={booksList} />
        </div>
      </section>
    </main>
  );
};

export default Page;
