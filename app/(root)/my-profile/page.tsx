import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import { signOutUser } from "@/lib/actions/auth";
import { sendWelcomeEmail } from "@/lib/actions/email";
import React from "react";

const Page = () => {
  return (
    <>
      <form className="mb-10" action={signOutUser}>
        <Button>Log out</Button>
      </form>
      <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  );
};

export default Page;
