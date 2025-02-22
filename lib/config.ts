export const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMGKIT_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMGKIT_ENDPOINT!,
      privateKey: process.env.IMGKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.DATABASE_URL!,
  },
};
