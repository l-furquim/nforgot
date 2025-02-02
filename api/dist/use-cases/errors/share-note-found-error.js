"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareNotFoundError = void 0;
class ShareNotFoundError extends Error {
    constructor() {
        super("Share not found");
    }
}
exports.ShareNotFoundError = ShareNotFoundError;
