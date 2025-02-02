"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeVerificationToken = decodeVerificationToken;
function decodeVerificationToken(token, fastify) {
    try {
        const payload = fastify.jwt.verify(token);
        return payload;
    }
    catch (err) {
        return null;
    }
}
