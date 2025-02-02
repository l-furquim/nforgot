"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactionRotes = reactionRotes;
const verify_jwt_1 = require("@/http/middlewares/verify-jwt");
const create_reaction_1 = require("./create-reaction");
const update_reaction_1 = require("./update-reaction");
async function reactionRotes(instance) {
    instance.addHook("onRequest", verify_jwt_1.verifyJwt);
    instance.post("/create", create_reaction_1.createReaction);
    instance.put("/update", update_reaction_1.updateReaction);
}
