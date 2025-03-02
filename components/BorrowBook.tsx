"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { borrowBook } from "@/lib/actions/book";

interface Props {
  bookId: string;
  userId: string;
  borrowingEligibility: { isEligible: boolean; message: string };
}

const BorrowBook = ({
  bookId,
  userId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrow = async () => {
    if (!isEligible) {
      toast("Error", {
        description: message,
      });

      return;
    }

    setBorrowing(true);
    try {
      const result = await borrowBook({ userId, bookId });

      if (result.success) {
        toast("Success", {
          description: "Book borrowed successfully",
        });

        router.push("/my-profile");
      } else {
        toast("Error", {
          description: "An error occured whilte borrowing the book",
        });
      }
    } catch (error) {
      toast("Error", {
        description: "An error occured whilte borrowing the book",
      });
    } finally {
      setBorrowing(false);
    }
  };

  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrow}
      disabled={borrowing}
    >
      <Image src="/icons/book.svg" width={20} height={20} alt="book" />
      <p className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing..." : "Borrow book"}
      </p>
    </Button>
  );
};

export default BorrowBook;
