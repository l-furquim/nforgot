"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionNotFoundError = void 0;
class ReactionNotFoundError extends Error {
    constructor() {
        super("Reaction not found");
    }
}
exports.ReactionNotFoundError = ReactionNotFoundError;
