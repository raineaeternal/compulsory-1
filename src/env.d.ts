declare module "~/env" {
  import { z } from "zod";
  
  type Env = {
    NODE_ENV: "development" | "test" | "production";
  };
  
  export const env: Env;
}
