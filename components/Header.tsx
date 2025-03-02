import { getInitials } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signOutUser } from "@/lib/actions/auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="flex gap-4 items-center">
        <Image src="/icons/logo.svg" width={40} height={40} alt="logo-image" />
        <p className="text-white font-ibm-plex-sans font-semibold">BookWise</p>
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className=" bg-amber-100">
                {getInitials(session?.user?.name || "")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <li>
          <form action={signOutUser}>
            <Button>Log out</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
