import { Session } from "next-auth";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

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
        <Image
          src="/icons/admin/search.svg"
          width={16}
          height={16}
          className="absolute top-4 left-3"
          loading="lazy"
          alt="search"
        />
        <Input
          className="white w-full py-6 px-8"
          placeholder="Search users, books by title, author or genre"
        />
      </div>
    </header>
  );
};

export default Header;
