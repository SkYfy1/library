import { getUsers } from "@/lib/admin/data";
import React from "react";
import UserAvatar from "./Avatar";
import { cn } from "@/lib/utils";

const Table = async () => {
  const users = await getUsers();
  return (
    <table className="w-full">
      <thead className="bg-light-700">
        <tr>
          <th className="p-6 w-1/4 text-sm font-semibold  tracking-wide text-left rounded-l-md">
            Name
          </th>
          <th className="p-6 text-sm font-semibold  tracking-wide text-left">
            Date Joined
          </th>
          <th className="p-6 text-sm font-semibold  tracking-wide text-left">
            Role
          </th>
          <th className="p-6 text-sm font-semibold  tracking-wide text-left">
            Books Borrowed
          </th>
          <th className="p-6 text-sm font-semibold  tracking-wide text-left">
            University Id No
          </th>
          <th className="p-6 text-sm font-semibold  tracking-wide text-left">
            University Id Card
          </th>
          <th className="p-6 text-sm font-semibold  tracking-wide text-left rounded-r-md">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="p-6 text-sm tracking-wide font-semibold text-left">
              <div className="flex gap-2 items-center">
                <UserAvatar url={user.universityCard} />
                <div>
                  <p>{user.fullName}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </td>
            <td className="p-6 text-sm   tracking-wide font-semibold text-left">
              {user.createdAt?.toDateString().slice(4)}
            </td>
            <td className="p-6 text-sm   tracking-wide font-semibold text-left">
              <span
                className={cn(
                  "px-3 py-1.5 rounded-3xl",
                  user.role === "ADMIN"
                    ? "bg-green-200 text-green-800"
                    : "bg-pink-200 text-pink-700"
                )}
              >
                {" "}
                {user.role}
              </span>
            </td>
            <td className="p-6 text-sm  tracking-wide font-semibold text-left">
              10
            </td>
            <td className="p-6 text-sm  tracking-wide font-semibold text-left">
              {user.universityId.toString().slice(0, 11)}
            </td>
            <td className="p-6 text-sm tracking-wide font-semibold text-left">
              <a className="text-blue-500 flex gap-1 items-center">
                <p>View ID Card</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </td>
            <td className="p-6 text-sm   tracking-wide text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-red cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
