"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAuthorUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const invalid_credentials_error_1 = require("../errors/invalid-credentials-error");
class AuthAuthorUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create({ email, password }) {
        const author = await this.repository.findByEmail(email);
        if (!author) {
            throw new invalid_credentials_error_1.InvalidCredentialsError();
        }
        const validAuth = (0, bcryptjs_1.compare)(password, author.password);
        if (!validAuth) {
            throw new invalid_credentials_error_1.InvalidCredentialsError();
        }
        return author;
    }
}
exports.AuthAuthorUseCase = AuthAuthorUseCase;
