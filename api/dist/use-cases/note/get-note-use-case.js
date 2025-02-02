"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNoteUseCase = void 0;
const note_note_found_error_1 = require("../errors/note-note-found-error");
const unauthorized_note_error_1 = require("../errors/unauthorized-note-error");
class GetNoteUseCase {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    ;
    async get({ noteId, authorId }) {
        const note = await this.repo.findById(noteId);
        if (!note) {
            throw new note_note_found_error_1.NoteNotFoundError();
        }
        if (note.author_id !== authorId) {
            throw new unauthorized_note_error_1.UnauthorizedNoteError();
        }
        return note;
    }
}
exports.GetNoteUseCase = GetNoteUseCase;
