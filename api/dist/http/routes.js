"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = appRoutes;
const routes_1 = require("./controllers/author/routes");
const routes_2 = require("./controllers/note/routes");
const routes_3 = require("./controllers/reaction/routes");
const routes_4 = require("./controllers/share/routes");
async function appRoutes(instance) {
    instance.register(routes_1.authorRoutes, { prefix: "/authors" });
    instance.register(routes_2.notesRoutes, { prefix: "/notes" });
    instance.register(routes_3.reactionRotes, { prefix: "/reactions" });
    instance.register(routes_4.shareRoutes, { prefix: "/shares" });
}
