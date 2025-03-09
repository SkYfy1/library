"use client";

import { config } from "@/lib/config";
import { IKImage } from "imagekitio-next";
import React from "react";

const UserAvatar = ({ url }: { url: string }) => {
  return (
    <div className="size-12 rounded-full overflow-hidden">
      <IKImage
        urlEndpoint={config.env.imagekit.urlEndpoint}
        path={url}
        alt="avatar"
        width={50}
        height={50}
      />
    </div>
  );
};

export default UserAvatar;
