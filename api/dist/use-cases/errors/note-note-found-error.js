"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteNotFoundError = void 0;
class NoteNotFoundError extends Error {
    constructor() {
        super("Note not found");
    }
}
exports.NoteNotFoundError = NoteNotFoundError;
