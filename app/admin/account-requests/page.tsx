import { Table } from "@/components/admin/table/Table";
import { getAccountRequests } from "@/lib/admin/data";
import React from "react";

const headers = [
  "Name",
  "Date Joined",
  "University Id No",
  "University ID Card",
  "Actions",
];

const Page = async () => {
  const accounts = await getAccountRequests();
  return (
    <section className="admin-table-container">
      <h1 className="text-2xl mb-6 font-semibold">Borrow Book Requests</h1>
      <Table
        headers={headers}
        data={accounts}
        type="Account Request"
        size="default"
      />
    </section>
  );
};

export default Page;
