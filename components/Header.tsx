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
import Theme from "./Theme";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5 ">
      <Link href="/" className="flex gap-4 items-center">
        <Image src="/icons/logo.svg" width={40} height={40} alt="logo-image" />

        <p className="dark:text-white hidden md:block text-gray-700 font-ibm-plex-sans font-semibold">
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
          <Theme />
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
            <Button className="bg-transparent text-red-800 hover:bg-transparent shadow-none">
              <Image
                src="/icons/logout.svg"
                alt="Logout"
                width={24}
                height={24}
              />
            </Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
