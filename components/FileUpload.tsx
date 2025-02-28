"use client";

import React, { useRef, useState } from "react";
import { config } from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import Image from "next/image";
import { toast } from "sonner";

interface Props {
  type: "image" | "image";
  accept: string;
  placeholder: "string";
  folder: "string";
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
}

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

// ${config.env.apiEndpoint}

const auth = async () => {
  try {
    const response = await fetch(`/api/imagekit`);
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

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const [progress, setProgress] = useState(0);

  const styles = {
    button:
      variant === "dark"
        ? "bg-dark-300"
        : "bg-light-600 border-gray-100 border",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-500",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  };

  const onError = (error: any) => {
    console.log(error);
    toast(`${type} upload failed`, {
      action: {
        label: "X",
        onClick: () => console.log("X"),
      },
    });
  };
  const onSuccess = (response: any) => {
    setFile(response);
    onFileChange(response.filePath);
    toast(`${type} uploaded`, {
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

  const onValidate = (file: File) => {
    if (type === "image") {
      if (file.size > 20 * 1024 * 1024) {
        toast(`File size too large`, {
          description: "Please upload a file that is less than 20MB in size",
          action: {
            label: "X",
            onClick: () => console.log("X"),
          },
        });
        return false;
      }
    } else if (type === "video") {
      if (file.size > 50 * 1024 * 1024) {
        toast(`File size too large`, {
          description: "Please upload a file that is less than 50MB in size",
          action: {
            label: "X",
            onClick: () => console.log("X"),
          },
        });
        return false;
      }

      return true;
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

export default FileUpload;
