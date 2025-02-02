"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailError = void 0;
class MailError extends Error {
    constructor(err) {
        super("Error during mail sending " + err);
    }
}
exports.MailError = MailError;
