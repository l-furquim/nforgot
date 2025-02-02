"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedReactionError = void 0;
class UnauthorizedReactionError extends Error {
    constructor() {
        super("Cant react two times at the same note, only updates.");
    }
}
exports.UnauthorizedReactionError = UnauthorizedReactionError;
