"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";
import { z } from "zod";

const Page = () => (
  <AuthForm
    type={"SIGN_UP"}
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      universityCard: "",
      universityId: 0,
      email: "",
      password: "",
    }}
    onSubmit={(data) => new Promise((res, rej) => res({ success: true }))}
  />
);

export default Page;
