export const config = {
  env: {
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMGKIT_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMGKIT_ENDPOINT!,
      privateKey: process.env.IMGKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
      qstashUrl: process.env.QSTASH_URL!,
      qstashToken: process.env.QSTASH_TOKEN!,
    },
    emailjs: {
      publicKey: process.env.EMAIL_KEY!,
      serviceId: process.env.EMAIL_SERVICE!,
      templateId: process.env.EMAIL_TEMPLATE!,
      privateKey: process.env.EMAIL_PRIVATE!,
    },
  },
};
