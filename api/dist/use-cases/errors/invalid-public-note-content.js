"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPublicNoteContent = void 0;
class InvalidPublicNoteContent extends Error {
    constructor() {
        super("Cannot create a public note empty");
    }
}
exports.InvalidPublicNoteContent = InvalidPublicNoteContent;
