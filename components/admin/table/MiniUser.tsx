import UserAvatar from "@/components/Avatar";
import { cn } from "@/lib/utils";
import React from "react";

const MiniUser = ({ user }: { user: AdminUsers }) => {
  return (
    <div
      key={user.id}
      className="bg-gray-150 p-4 rounded-lg shadow flex flex-col gap-1"
    >
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-2 items-center max-xs:flex-col">
          <UserAvatar url={user.universityCard} />
          <div>
            <p>{user.fullName}</p>
            <div
              className="text-xs text-gray-500 max-w-12 truncate"
              title={user.email}
            >
              <p>{user.email}</p>
            </div>
            <span className=" text-blue-500 text-xs">
              ID {user.universityId.toString().slice(0, 11)}
            </span>
          </div>
        </div>
        <div className="text-gray-500">
          {user.createdAt?.toDateString().slice(4)}
        </div>
        <div>
          <div
            className={cn(
              "px-2 py-1 rounded-3xl text-xs",
              user.role === "ADMIN"
                ? "bg-green-200 text-green-800"
                : "bg-pink-200 text-pink-700"
            )}
          >
            {" "}
            {user.role}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center text-sm justify-center">
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
      </div>
      <div className="flex justify-between">
        <div className="tracking-wide text-sm">
          Books borrowed: <span className="">10</span>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-red cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MiniUser;
