"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRoutes = authorRoutes;
const create_author_1 = require("./create-author");
const auth_author_1 = require("./auth-author");
const send_author_code_1 = require("./send-author-code");
const validate_code_1 = require("./validate-code");
async function authorRoutes(instance) {
    instance.post("/create", create_author_1.createAuthor);
    instance.post("/auth", auth_author_1.authAuthor);
    instance.post("/code", send_author_code_1.sendAuthorCode);
    instance.post("/code/validate", validate_code_1.validateCode);
}
