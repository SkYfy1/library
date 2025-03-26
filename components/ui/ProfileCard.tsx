"use client";

import { config } from "@/lib/config";
import { IKImage } from "imagekitio-next";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { Button } from "./button";
import { toast } from "sonner";

interface Props {
  email: string;
  name: string;
  id: string;
  verified: boolean;
  role: "USER" | "ADMIN" | null;
  promise: Promise<string | undefined>;
}

const ProfileCard = ({ email, name, id, verified, role, promise }: Props) => {
  const userImage = use(promise);
  const isAdmin = role === "ADMIN";

  return (
    <article className="user-card">
      <div className="card-bookmark"></div>
      <div className="flex flex-col mt-16 gap-10">
        <section className="flex gap-6 items-center">
          <div className="md:size-36 border-8 border-solid border-gray-600 rounded-full">
            <IKImage
              path={userImage}
              alt="Book cover"
              loading="lazy"
              urlEndpoint={config.env.imagekit.urlEndpoint}
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              {verified && (
                <Image
                  src="/icons/verified.svg"
                  alt="Verified"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              )}
              {!verified && (
                <Image
                  src="/icons/warning.svg"
                  alt="Verified"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              )}
              <p className="text-xs">{!verified && "Not"} Verified Student</p>
            </div>
            <h2 className="font-semibold text-2xl">{name}</h2>
            <div className="flex items-center gap-2">
              <p>{email}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 hover:text-gray-400 duration-200 cursor-pointer"
                onClick={async () => {
                  await navigator.clipboard.writeText(email);
                  toast("Text copied!", { description: email });
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
            {isAdmin && (
              <Link
                href="/admin"
                className="dark:text-primary text-primary-admin flex gap-1 flex-reverse"
              >
                <Image
                  src="/icons/admin/eye.svg"
                  width={15}
                  height={15}
                  alt="eye"
                />
                To admin panel
              </Link>
            )}
          </div>
        </section>
        <section className="flex flex-col gap-1">
          <h3>University</h3>
          <h2 className="font-semibold text-lg">Snus</h2>
        </section>
        <section className="flex flex-col gap-1">
          <h3>Student ID</h3>
          <h2 className="font-semibold text-lg">{id}</h2>
        </section>
        <IKImage
          path={userImage}
          alt="Book cover"
          loading="lazy"
          urlEndpoint={config.env.imagekit.urlEndpoint}
          className="w-full h-80 object-cover rounded-2xl"
          width={300}
          height={300}
        />
      </div>
    </article>
  );
};

export default ProfileCard;
