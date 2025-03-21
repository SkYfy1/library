import { getUsers } from "@/lib/admin/data";
import React from "react";
import { Table } from "@/components/admin/table/Table";
import { auth } from "@/auth";

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
  const session = await auth();
  const users = (await getUsers()).filter(
    (user) => user.id != session?.user?.id
  );
  return (
    <section className="admin-table-container">
      <h1 className="text-2xl mb-6 font-semibold">All users</h1>
      <div>
        <Table headers={headers} type="Users" size="default" data={users} />
      </div>
    </section>
  );
};

export default Page;
