"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShareUseCase = void 0;
const note_note_found_error_1 = require("../errors/note-note-found-error");
const alredy_shared_error_1 = require("../errors/alredy-shared-error");
const unauthorized_note_error_1 = require("../errors/unauthorized-note-error");
;
class CreateShareUseCase {
    repository;
    noteRepository;
    constructor(repository, noteRepository) {
        this.repository = repository;
        this.noteRepository = noteRepository;
    }
    ;
    async create({ authorId, noteId }) {
        const note = await this.noteRepository.findById(noteId);
        if (!note) {
            throw new note_note_found_error_1.NoteNotFoundError();
        }
        if (note.type === "PRIVATE") {
            throw new unauthorized_note_error_1.UnauthorizedNoteError();
        }
        const alredyShared = await this.repository.findByNoteAndAuthor(noteId, authorId);
        if (alredyShared) {
            throw new alredy_shared_error_1.AlredySharedError();
        }
        const share = await this.repository.create({
            author_id: authorId,
            note_id: noteId,
        });
        return share;
    }
}
exports.CreateShareUseCase = CreateShareUseCase;
