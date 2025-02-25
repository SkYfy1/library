"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";
import { redirect } from "next/navigation";
import { workflowClient } from "../workflow";
import { config } from "../config";

export const signOutUser = async () => {
  await signOut({ redirectTo: "/" });
};

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Signin exists" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, universityId, universityCard, password } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  //   Check if user already exists

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    console.log(1);
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    console.log(2);
    await db.insert(users).values({
      fullName,
      email,
      universityCard,
      universityId,
      password: hashedPassword,
    });

    await workflowClient.trigger({
      url: `https://${config.env.prodApiEndpoint}/api/workflows/onboarding`,
      body: {
        email,
      },
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Signup exists" };
  }
};
