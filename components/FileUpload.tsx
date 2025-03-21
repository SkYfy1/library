"use client";

import React, { useRef, useState } from "react";
import { config } from "@/lib/config";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import Image from "next/image";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
  value?: string;
}

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

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
  value,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(
    value
      ? {
          filePath: value,
        }
      : null
  );
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

  // Change image

  const declineImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileChange(" ");
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
    }
    return true;
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={auth}
    >
      <IKUpload
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        validateFile={onValidate}
        onUploadStart={() => setProgress(0)}
        onUploadProgress={({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);
          setProgress(percent);
        }}
        folder={folder}
        accept={accept}
        className="hidden"
      />
      <button
        className={cn("upload-btn flex-col gap-0", styles.button)}
        onClick={uploadImage}
        type="button"
      >
        <div className="flex gap-2">
          {!file ? (
            <>
              <Image
                src="/icons/upload.svg"
                alt="upload icon"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className={cn("text-base", styles.placeholder)}>
                {placeholder}
              </p>
            </>
          ) : (
            <div className="bg-blue-300/20 flex gap-1 items-center rounded-md p-1 text-primary-admin font-semibold">
              {file.filePath
                .split(".")
                .map((el, ind) => (ind == 0 ? el.slice(0, 25) + "... " : el))
                .join(".")}
              <div onClick={declineImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={cn("size-4 hover:text-red")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        {/* {file && (
          <p className={cn("upload-file text-xs", styles.text)}>
            {file.filePath
              .split(".")
              .map((el, ind) => (ind == 0 ? el.slice(0, 25) + "... " : el))
              .join(".")}
          </p>
        )} */}
      </button>
      {progress > 0 && progress != 100 && (
        <div className="w-full rounded-full bg-green-200">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}
      {/* {file &&
        (type === "image" ? (
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={500}
            height={300}
          />
        ) : type === "video" ? (
          <IKVideo
            path={file.filePath}
            controls={true}
            width={500}
            height={300}
            className="w-full h-96 rounded-xl"
          />
        ) : null)} */}
    </ImageKitProvider>
  );
};

export default FileUpload;
