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
      <h1 className="text-2xl mb-6 font-semibold">
        Account Registration Requests
      </h1>
      {accounts.length >= 1 ? (
        <Table
          headers={headers}
          data={accounts}
          type="Account Request"
          size="default"
        />
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
          <h1 className="font-semibold text-lg">No Pending Account Requests</h1>
          <p className="text-gray-400">
            There are currently no account requests awaiting approval.
          </p>
        </div>
      )}
    </section>
  );
};

export default Page;
