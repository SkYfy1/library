"use client";

import { config } from "@/lib/config";
import { IKImage } from "imagekitio-next";
import React, { use } from "react";

interface Props {
  email: string;
  name: string;
  id: string;
  promise: Promise<string | undefined>;
}

const ProfileCard = ({ email, name, id, promise }: Props) => {
  const userImage = use(promise);

  // console.log(userImage);
  // console.log("userImage:", userImage);
  return (
    <article className="user-card">
      <div className="card-bookmark"></div>
      <div className="flex flex-col mt-16 gap-10">
        <section className="flex gap-6 items-center">
          <div className="size-36 border-8 border-solid border-gray-600 rounded-full">
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
            <p>Verified Student</p>
            <h2 className="font-semibold text-lg">{name}</h2>
            <p>{email}</p>
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
