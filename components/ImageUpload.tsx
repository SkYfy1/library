"use client";

import React, { useRef, useState } from "react";
import { config } from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import Image from "next/image";
import { toast } from "sonner";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

// ${config.env.apiEndpoint}

const auth = async () => {
  try {
    const response = await fetch(`/api/auth/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status: ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Auth request failed: ${error.message}`);
  }
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log(error);
    toast("Uploading image error", {
      action: {
        label: "X",
        onClick: () => console.log("X"),
      },
    });
  };
  const onSuccess = (response: any) => {
    setFile(response);
    onFileChange(response.filePath);
    toast("Image uploaded", {
      action: {
        label: "X",
        onClick: () => console.log("X"),
      },
    });
  };
  const uploadImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (ikUploadRef.current) {
      // @ts-ignore
      ikUploadRef.current?.click();
    }
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={auth}
    >
      <IKUpload
        onError={onError}
        onSuccess={onSuccess}
        ref={ikUploadRef}
        className="hidden"
        fileName="test-upload.png"
      />
      <button className="upload-btn" onClick={uploadImage}>
        <Image
          src="/icons/upload.svg"
          alt="upload icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>
        {file && <p className="upload-file">{file.filePath}</p>}
      </button>
      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={300}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
