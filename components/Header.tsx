"use client";

import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signOutUser } from "@/lib/actions/auth";
import { usePathname } from "next/navigation";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5 ">
      <Link href="/" className="flex gap-4 items-center">
        <Image src="/icons/logo.svg" width={40} height={40} alt="logo-image" />

        <p className="dark:text-white  text-gray-700 font-ibm-plex-sans font-semibold">
          BookWise
        </p>
      </Link>
      <ul className="flex items-center gap-3 ">
        <li
          className={cn(
            "mr-2",
            pathname === "/"
              ? "dark:text-light-200 text-blue-950"
              : "dark:text-light-100 text-gray-700"
          )}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={cn(
            "text-white mr-2",
            pathname === "/search"
              ? "dark:text-light-200 text-blue-950"
              : "dark:text-light-100 text-gray-700"
          )}
        >
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className=" bg-amber-100 dark:text-black text-black">
                {getInitials(session?.user?.name || "")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <li>
          <form action={signOutUser}>
            <Button className="bg-transparent text-red-800 hover:bg-transparent">
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
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
