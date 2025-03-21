import UserAvatar from "@/components/Avatar";
import BookCover from "@/components/BookCover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-blue-100 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
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
          {/* <svg
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
          </svg> */}
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
        <td className="p-6 text-sm tracking-wide text-left flex gap-8 items-center">
          <VerifyUser userApprove={userApprove} userReject={userReject} />
          {/* <Button
            className="text-green-800 bg-green-600/20"
            onClick={userApprove}
          >
            Approve Account
          </Button>
          <button onClick={userReject}>
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
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button> */}
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
          <Button className="text-blue-700 bg-blue-200/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Generate
          </Button>
        </td>
      </tr>
    );
  }
};

export default TableList;
