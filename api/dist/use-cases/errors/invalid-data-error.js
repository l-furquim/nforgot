"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDataError = void 0;
class InvalidDataError extends Error {
    constructor(data) {
        super("Invalid data " + data);
    }
}
exports.InvalidDataError = InvalidDataError;
