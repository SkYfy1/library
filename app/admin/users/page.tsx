import Table from "@/components/Table";
import { getUsers } from "@/lib/admin/data";
import React from "react";

const Page = async () => {
  return (
    <section className="admin-table-container">
      <h1 className="text-2xl mb-6 font-semibold">All users</h1>
      <div>
        <Table />
      </div>
    </section>
  );
};

export default Page;
