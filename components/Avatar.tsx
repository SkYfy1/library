"use client";

import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import { IKImage } from "imagekitio-next";
import React from "react";

const UserAvatar = ({
  url,
  className,
}: {
  url: string;
  className?: string;
}) => {
  return (
    <div className={cn(`size-12 rounded-full overflow-hidden`, className)}>
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
