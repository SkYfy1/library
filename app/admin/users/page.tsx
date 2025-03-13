// import Table from "@/components/Table";
import { getUsers } from "@/lib/admin/data";
import React from "react";
import { Table } from "@/components/admin/table/Table";

const headers = [
  "Name",
  "Date Joined",
  "Role",
  "Books Borrowed",
  "University Id No",
  "University Id Card",
  "Action",
];

const Page = async () => {
  const users = await getUsers();
  return (
    <section className="admin-table-container">
      <h1 className="text-2xl mb-6 font-semibold">All users</h1>
      <div>
        {/* <Table /> */}
        <Table headers={headers} type="Users" size="default" data={users} />
      </div>
    </section>
  );
};

export default Page;
