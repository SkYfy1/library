import { sendEmail } from "@/lib/workflow";
import { serve } from "@upstash/workflow/nextjs";

type InitialData = {
  email: string;
};

const ONE_DAY = 60 * 60 * 24;
const THREE_DAYS = 3 * ONE_DAY;
const SEVEN_DAYS = 7 * ONE_DAY;

const getBookState = async (bookName: string) => {
  return "RETURNED";
};

const { POST } = serve<InitialData>(async (context) => {
  const { email } = context.requestPayload;
  await context.run("book-borrow", async () => {
    await sendEmail({
      email,
      subject: "Welcome to the platform",
      message: `Welcome, ${email}`,
    });
  });

  await context.sleep("wait-for-3-days", THREE_DAYS);

  //  send message, book must be returned in 3 days

  context.run("notification", async () => {
    await sendEmail({
      email,
      subject: "Welcome to the platform",
      message: `Welcome, ${email}`,
    });
  });

  await context.sleep("wait-for-3-days", THREE_DAYS);

  //   check book status

  const state = await context.run("check-user-state", async () => {
    return await getBookState("uchacha");
  });

  if (state === "BORROWED") {
    context.run("book-borrowed", async () => {
      await sendEmail({
        email,
        subject: "Welcome to the platform",
        message: `Welcome, ${email}`,
      });
    });
  } else {
    context.run("book-returned", async () => {
      await sendEmail({
        email,
        subject: "Welcome to the platform",
        message: `Welcome, ${email}`,
      });
    });
  }
});
