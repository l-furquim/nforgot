import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if(_env.success === false){
  console.log("Error invalid enviroment variables ", _env.error.format());

  throw new Error("Invalid enviroment variables");
}

export const env = _env.data;