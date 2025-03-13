import { Table } from "@/components/admin/table/Table";
import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import React from "react";

const headers = ["title", "Author", "genre", "Date Created", "Action"];

const Page = async () => {
  const booksList = await db.select().from(books);
  return (
    <section className="admin-table-container">
      <h1 className="text-2xl mb-6 font-semibold">Borrow Book Requests</h1>
      <Table headers={headers} data={booksList} type="Books" size="default" />
    </section>
  );
};

export default Page;
