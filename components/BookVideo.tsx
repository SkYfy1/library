"use client";

import { config } from "@/lib/config";
import { IKVideo, ImageKitProvider } from "imagekitio-next";
import React from "react";

interface Props {
  videoUrl: string;
}

const BookVideo = ({ videoUrl }: Props) => {
  return (
    <ImageKitProvider
      urlEndpoint={config.env.imagekit.urlEndpoint}
      publicKey={config.env.imagekit.publicKey}
    >
      <IKVideo path={videoUrl} controls className="w-full rounded-xl" />
    </ImageKitProvider>
  );
};

export default BookVideo;
