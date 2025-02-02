"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareRoutes = shareRoutes;
const verify_jwt_1 = require("@/http/middlewares/verify-jwt");
const create_share_1 = require("./create-share");
const delete_share_1 = require("./delete-share");
async function shareRoutes(instance) {
    instance.addHook("onRequest", verify_jwt_1.verifyJwt);
    instance.post("/create", create_share_1.createShare);
    instance.delete("/delete", delete_share_1.deleteShare);
}
