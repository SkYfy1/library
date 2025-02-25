"use server";

import emailjs from "@emailjs/browser";
import { config } from "../config";

export const sendWelcomeEmail = async (email: string, message: string) => {
  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: config.env.emailjs.serviceId,
          template_id: config.env.emailjs.templateId,
          user_id: config.env.emailjs.publicKey,
          accessToken: config.env.emailjs.privateKey,
          template_params: {
            to_name: email,
            from_name: "library",
            message: message,
          },
        }),
      }
    );

    if (response.ok) {
      console.log("Письмо успешно отправлено:", response.status, response.text);
      return { message: "success" };
    }

    return { messsage: "error" };
  } catch (error) {
    console.error("Ошибка при отправке письма:", error);
  }
};
