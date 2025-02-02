"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorAlredyExistError = void 0;
class AuthorAlredyExistError extends Error {
    constructor() {
        super("A user alredy exists with this email");
    }
}
exports.AuthorAlredyExistError = AuthorAlredyExistError;
