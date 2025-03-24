import UserAvatar from "@/components/Avatar";
import { changeUserRole, deleteUser } from "@/lib/admin/actions/users";
import { cn } from "@/lib/utils";
import React from "react";
import Delete from "./Delete";
import Image from "next/image";
import { borrowRecords } from "@/db/schema";
import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { DropdownMenuComponent } from "../Dropdown";

const MiniUser = async ({ user }: { user: AdminUsers }) => {
  const updateUserWithId = changeUserRole.bind(null, user.id);
  const deleteUserWithId = deleteUser.bind(null, user.id);

  const borrowedBooks = await db
    .select()
    .from(borrowRecords)
    .where(eq(borrowRecords.userId, user.id));

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
              className="text-xs text-gray-500 max-w-24 truncate"
              title={user.email}
            >
              <p>{user.email}</p>
            </div>
            <span className=" text-blue-500 text-xs">
              ID {user.universityId.toString().slice(0, 11)}
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-2">
          <div className="text-gray-500">
            {user.createdAt?.toDateString().slice(4)}
          </div>
          <DropdownMenuComponent
            value={user.role as string}
            values={["ADMIN", "USER"]}
            update={updateUserWithId}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center text-sm justify-center">
        <a className="text-blue-500 flex gap-1 items-center">
          <p>View ID Card</p>
          <Image
            src="/icons/admin/link.svg"
            width={16}
            height={16}
            loading="lazy"
            alt="link icon"
          />
        </a>
      </div>
      <div className="flex justify-between">
        <div className="tracking-wide text-sm">
          Books borrowed: <span className="">{borrowedBooks.length}</span>
        </div>
        <Delete
          text={{
            title: "Delete account",
            p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
          }}
          handler={deleteUserWithId}
        />
      </div>
    </div>
  );
};

export default MiniUser;
