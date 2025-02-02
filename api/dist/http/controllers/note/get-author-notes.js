"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorNotes = getAuthorNotes;
const account_not_found_error_1 = require("@/use-cases/errors/account-not-found-error");
const make_get_notes_user_1 = require("@/use-cases/factories/note/make-get-notes-user");
async function getAuthorNotes(request, reply) {
    try {
        const useCase = (0, make_get_notes_user_1.makeGetNotesAuthor)();
        const notes = await useCase.get({
            userId: request.user.sub,
        });
        return reply.status(200).send({
            notes,
        });
    }
    catch (err) {
        if (err instanceof account_not_found_error_1.AccountNotFoundEror) {
            return reply.status(400).send({
                message: err.message
            });
        }
    }
}
