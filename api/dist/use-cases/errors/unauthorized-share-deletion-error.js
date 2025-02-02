"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedShareDeletionError = void 0;
class UnauthorizedShareDeletionError extends Error {
    constructor() {
        super("You cant delete a share that isnt yours");
    }
}
exports.UnauthorizedShareDeletionError = UnauthorizedShareDeletionError;
