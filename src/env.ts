import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const processEnv: { [key: string]: string | undefined } = {
  NODE_ENV: process.env.NODE_ENV,
};

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {},
  runtimeEnv: processEnv,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
  isServer: typeof window === "undefined",
  experimental__runtimeEnv: processEnv
});

export type Env = typeof env;
