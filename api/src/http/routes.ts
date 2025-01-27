import type { FastifyInstance } from "fastify";
import { authorRoutes } from "./controllers/author/routes";
import { notesRoutes } from "./controllers/note/routes";
import { reactionRotes } from "./controllers/reaction/routes";
import { shareRoutes } from "./controllers/share/routes";

export async function appRoutes(instance: FastifyInstance){
  instance.register(authorRoutes, { prefix: "/authors" });
  instance.register(notesRoutes, { prefix: "/notes" });
  instance.register(reactionRotes, { prefix: "/reactions" });
  instance.register(shareRoutes, { prefix: "/shares" });
}