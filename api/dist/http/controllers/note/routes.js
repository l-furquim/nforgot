"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRoutes = notesRoutes;
const create_notes_1 = require("./create-notes");
const get_author_notes_1 = require("./get-author-notes");
const verify_jwt_1 = require("@/http/middlewares/verify-jwt");
const update_note_1 = require("./update-note");
const delete_note_1 = require("./delete-note");
const get_note_1 = require("./get-note");
async function notesRoutes(instance) {
    instance.addHook("onRequest", verify_jwt_1.verifyJwt);
    instance.post("/create", create_notes_1.createNote);
    instance.get("/get", get_author_notes_1.getAuthorNotes);
    instance.put("/update", update_note_1.updateNote);
    instance.delete("/delete", delete_note_1.deleteNote);
    instance.get("/note", get_note_1.getNote);
}
