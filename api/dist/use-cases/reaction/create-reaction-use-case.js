"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactionUseCase = void 0;
const note_note_found_error_1 = require("../errors/note-note-found-error");
const unauthorized_note_error_1 = require("../errors/unauthorized-note-error");
const unauthorized_reaction_error_1 = require("../errors/unauthorized-reaction-error");
;
class CreateReactionUseCase {
    repository;
    noteRepository;
    constructor(repository, noteRepository) {
        this.repository = repository;
        this.noteRepository = noteRepository;
    }
    async create({ type, authorId, noteId, }) {
        const note = await this.noteRepository.findById(noteId);
        if (!note) {
            throw new note_note_found_error_1.NoteNotFoundError();
        }
        if (note.type === "PRIVATE") {
            throw new unauthorized_note_error_1.UnauthorizedNoteError();
        }
        const reactionAlredyExists = await this.repository.findByNoteAndAuthor(noteId, authorId);
        if (reactionAlredyExists) {
            throw new unauthorized_reaction_error_1.UnauthorizedReactionError();
        }
        const reaction = await this.repository.create({
            type, author_id: authorId, note_id: noteId
        });
        return reaction;
    }
}
exports.CreateReactionUseCase = CreateReactionUseCase;
