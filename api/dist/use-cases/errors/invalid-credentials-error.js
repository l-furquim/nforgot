"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsError = void 0;
class InvalidCredentialsError extends Error {
    constructor() {
        super("Email or password wrong");
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
