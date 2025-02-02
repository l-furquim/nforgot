"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedNoteDeletionError = void 0;
class UnauthorizedNoteDeletionError extends Error {
    constructor() {
        super("You cant delete a note that isnt yours");
    }
}
exports.UnauthorizedNoteDeletionError = UnauthorizedNoteDeletionError;
