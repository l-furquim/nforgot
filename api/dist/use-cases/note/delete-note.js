"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNoteUseCase = void 0;
const note_note_found_error_1 = require("../errors/note-note-found-error");
const unauthorized_note_deletion_error_1 = require("../errors/unauthorized-note-deletion-error");
;
class DeleteNoteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async delete({ id, authorId }) {
        const note = await this.repository.findById(id);
        if (!note) {
            throw new note_note_found_error_1.NoteNotFoundError();
        }
        if (note.author_id !== authorId) {
            throw new unauthorized_note_deletion_error_1.UnauthorizedNoteDeletionError();
        }
        await this.repository.delete(id);
    }
}
exports.DeleteNoteUseCase = DeleteNoteUseCase;
