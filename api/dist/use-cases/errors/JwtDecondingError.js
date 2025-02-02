"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtDecondingError = void 0;
class JwtDecondingError extends Error {
    constructor() {
        super("Verification code expired or invalid");
    }
}
exports.JwtDecondingError = JwtDecondingError;
