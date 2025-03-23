import UserAvatar from "@/components/Avatar";
import BookCover from "@/components/BookCover";
import { Button } from "@/components/ui/button";
import React from "react";
import { DropdownMenuComponent } from "../Dropdown";
import {
  changeUserRole,
  deleteUser,
  verifyUser,
} from "@/lib/admin/actions/users";
import { deleteBook, updateBookStatus } from "@/lib/admin/actions/book";
import VerifyUser from "./VerifyUser";
import Link from "next/link";
import Delete from "./Delete";
import Image from "next/image";

interface Props {
  type: "Books" | "Borrow" | "Users" | "Account Request";
  data: any;
}

const TableList = ({ type, data }: Props) => {
  const deleteWithId = deleteBook.bind(null, data.id);
  if (type === "Books") {
    return (
      <tr>
        <td className="p-6 text-sm tracking-wide font-semibold text-left">
          <div className="flex gap-2 items-center">
            <Link href={`/admin/books/${data.id}`}>
              <BookCover
                className="h-14 w-10"
                coverColor={data.coverColor}
                coverUrl={data.coverUrl}
              />
            </Link>
            <p>{data.title}</p>
          </div>
        </td>
        <td className="p-6 text-sm w-1/12 tracking-wide font-semibold text-left">
          {data.author}
        </td>
        <td className="p-6 text-sm w-1/12  tracking-wide font-semibold text-left">
          {data.genre}
        </td>
        <td className="p-6 text-sm w-1/12 tracking-wide font-semibold text-left">
          {data.createdAt?.toDateString()}
        </td>
        <td className="p-6 text-sm w-full tracking-wide flex gap-3">
          <Link href={`/admin/books/edit/${data.id}`}>
            <Image
              src="/icons/admin/edit.svg"
              width={32}
              height={32}
              loading="lazy"
              alt="edit"
            />
          </Link>
          <Delete
            text={{
              title: "Delete Book",
              p: "Book will be fully deleted from database without any change of recovery!",
            }}
            handler={deleteWithId}
          />
        </td>
      </tr>
    );
  }

  if (type === "Users") {
    const updateUserWithId = changeUserRole.bind(null, data.id);
    const deleteUserWithId = deleteUser.bind(null, data.id);
    return (
      <tr key={data.id}>
        <td className="p-6 text-sm tracking-wide font-semibold text-left">
          <div className="flex gap-2 items-center">
            <UserAvatar url={data.universityCard} />
            <div>
              <p>{data.fullName}</p>
              <p className="text-xs text-gray-500">{data.email}</p>
            </div>
          </div>
        </td>
        <td className="p-6 text-sm   tracking-wide font-semibold text-left">
          {data.createdAt?.toDateString().slice(4)}
        </td>
        <td className="p-6 text-sm   tracking-wide font-semibold text-left">
          <DropdownMenuComponent
            value={data.role}
            values={["ADMIN", "USER"]}
            update={updateUserWithId}
          />
        </td>
        <td className="p-6 text-sm  tracking-wide font-semibold text-left">
          10
        </td>
        <td className="p-6 text-sm  tracking-wide font-semibold text-left">
          {data.universityId.toString().slice(0, 11)}
        </td>
        <td className="p-6 text-sm tracking-wide font-semibold text-left">
          <a className="text-blue-500 flex gap-1 items-center">
            <p>View ID Card</p>
            <Image
              src="/icons/admin/link.svg"
              width={15}
              height={15}
              loading="lazy"
              alt="trash"
            />
          </a>
        </td>
        <td className="p-6 text-sm   tracking-wide text-left">
          <Delete
            text={{
              title: "Delete account",
              p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            }}
            handler={deleteUserWithId}
          />
        </td>
      </tr>
    );
  }

  if (type === "Account Request") {
    const userApprove = verifyUser.bind(null, data.id, "APPROVED");
    const userReject = verifyUser.bind(null, data.id, "REJECTED");
    return (
      <tr key={data.id}>
        <td className="p-6 text-sm tracking-wide font-semibold text-left">
          <div className="flex gap-2 items-center">
            <UserAvatar url={data.universityCard} />
            <div>
              <p>{data.fullName}</p>
              <p className="text-xs text-gray-500">{data.email}</p>
            </div>
          </div>
        </td>
        <td className="p-6 text-sm   tracking-wide font-semibold text-left">
          {data.createdAt?.toDateString().slice(4)}
        </td>
        <td className="p-6 text-sm  tracking-wide font-semibold text-left">
          {data.universityId.toString().slice(0, 11)}
        </td>
        <td className="p-6 text-sm tracking-wide font-semibold text-left">
          <a className="text-blue-500 flex gap-1 items-center cursor-pointer">
            <Image
              src="/icons/admin/eye.svg"
              width={16}
              height={16}
              alt="eye"
            />
            <p>View ID Card</p>
          </a>
        </td>
        <td className="p-6 text-sm tracking-wide text-left flex gap-8 items-center">
          <VerifyUser userApprove={userApprove} userReject={userReject} />
        </td>
      </tr>
    );
  }

  if (type === "Borrow") {
    const borrowUpdateWithId = updateBookStatus.bind(null, data.id);
    return (
      <tr>
        <td className="p-6 text-sm tracking-wide font-semibold text-left">
          <div className="flex gap-2 items-center">
            <BookCover
              className="h-14 w-10"
              coverColor={data.bookData.coverColor}
              coverUrl={data.bookData.coverUrl}
            />
            <p>{data.bookData.title}</p>
          </div>
        </td>
        <td className="p-6 text-sm tracking-wide font-semibold text-left">
          <div className="flex gap-2 items-center">
            <UserAvatar url={data.userData.universityCard} />
            <div>
              <p>{data.userData.fullName}</p>
              <p className="text-xs text-gray-500">{data.userData.email}</p>
            </div>
          </div>
        </td>
        <td className="p-6 text-sm   tracking-wide font-semibold text-left">
          <DropdownMenuComponent
            value={data.status}
            values={["BORROWED", "RETURNED"]}
            update={borrowUpdateWithId}
          />
        </td>
        <td className="p-6 text-sm w-1/12 tracking-wide font-semibold text-left">
          {data.borrowDate?.toDateString()}
        </td>
        <td className="p-6 text-sm w-1/12 tracking-wide font-semibold text-left">
          {data.dueDate}
        </td>
        <td className="p-6 text-sm w-1/12 tracking-wide font-semibold text-left">
          {data.returnDate ?? "Not returned"}
        </td>
        <td className="p-6 text-sm w-full tracking-wide flex gap-3">
          <Button className="text-[#25388C] bg-purple-100/30 shadow-none">
            <Image
              src="/icons/admin/receipt.svg"
              width={16}
              height={16}
              loading="lazy"
              alt="edit"
            />
            Generate
          </Button>
        </td>
      </tr>
    );
  }
};

export default TableList;
