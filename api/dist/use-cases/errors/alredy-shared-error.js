"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlredySharedError = void 0;
class AlredySharedError extends Error {
    constructor() {
        super("Cant share the same note twice");
    }
}
exports.AlredySharedError = AlredySharedError;
