"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
  <AuthForm
    type={"SIGN_IN"}
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={(data) => new Promise((res, rej) => res({ success: true }))}
  />
);

export default Page;
