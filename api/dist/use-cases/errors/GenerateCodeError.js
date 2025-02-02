"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateCodeError = void 0;
class GenerateCodeError extends Error {
    constructor(message) {
        super("Error during code generation. " + message);
    }
}
exports.GenerateCodeError = GenerateCodeError;
