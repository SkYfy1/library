import { Session } from "next-auth";
import React from "react";
import Search from "../Search";
import { Input } from "../ui/input";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="admin-header relative">
      <div>
        <h2 className="text-dark-400 font-semibold text-2xl">
          Welcome, {session?.user?.name}
        </h2>
        <p className="text-slate-500 text-base">
          Monitor all of your users and books here
        </p>
      </div>
      <div className="relative w-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-3 left-1.5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <Input
          className="white w-full py-6 px-8"
          placeholder="Search users, books by title, author or genre"
        />
      </div>
    </header>
  );
};

export default Header;
