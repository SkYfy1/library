import Table from "@/components/Table";
import React from "react";

const Page = async () => {
  return (
    <section className="admin-table-container">
      <h1 className="text-2xl mb-6 font-semibold">All users</h1>
      <div>
        {/* <ul className="table-header">
          <li>Name</li>
          <li>Date Joined</li>
          <li>Role</li>
          <li>Books Borrowed</li>
          <li>University Id No</li>
          <li>University Id Card</li>
          <li>Action</li>
        </ul>
        <div className="table-element">
          {users.map((user) => (
            <>
              <li>{user.fullName}</li>
              <li>{user.createdAt?.toDateString()}</li>
              <li>{user.role}</li>
              <li>{user.role}</li>
              <li>{user.universityId}</li>
              <li>{user.universityCard}</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </li>
            </>
          ))}
        </div> */}
        <Table />
      </div>
    </section>
  );
};

export default Page;
