import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";

export const app  = fastify();

appRoutes(app);

app.setErrorHandler((error, request, reply) => {
  if(error instanceof ZodError){
    return reply
      .status(400)
      .send({ message: "Invalid data", issues: error.format})
  };
} )