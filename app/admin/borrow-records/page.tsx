import { Table } from "@/components/admin/table/Table";
import { getBorrowedBooks } from "@/lib/admin/data";
import React from "react";

const headers = [
  "Book",
  "User",
  "Borrow Status",
  "Borrow date",
  "App. Return date",
  "Due date",
  "Receipt",
];

const Page = async () => {
  const borrowedBooks = await getBorrowedBooks();
  return (
    <section className="admin-table-container">
      <h1 className="text-2xl mb-6 font-semibold">Borrow Book Requests</h1>
      <Table
        headers={headers}
        data={borrowedBooks}
        type="Borrow"
        size="default"
      />
    </section>
  );
};

export default Page;
