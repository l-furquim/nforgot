"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedNoteError = void 0;
class UnauthorizedNoteError extends Error {
    constructor() {
        super("This note is private and cannot be iteracted");
    }
}
exports.UnauthorizedNoteError = UnauthorizedNoteError;
