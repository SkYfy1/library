"use client";

import { config } from "@/lib/config";
import { IKImage } from "imagekitio-next";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { Button } from "./button";

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
            <p>{email}</p>
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
