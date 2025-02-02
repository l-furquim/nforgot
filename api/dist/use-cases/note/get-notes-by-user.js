"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNotesByAuthor = void 0;
const account_not_found_error_1 = require("../errors/account-not-found-error");
class GetNotesByAuthor {
    repository;
    authorRepository;
    constructor(repository, authorRepository) {
        this.repository = repository;
        this.authorRepository = authorRepository;
    }
    async get({ userId }) {
        const author = await this.authorRepository.findById(userId);
        if (!author) {
            throw new account_not_found_error_1.AccountNotFoundEror([userId]);
        }
        ;
        const notes = await this.repository.findByUserId(userId);
        return notes || [];
    }
}
exports.GetNotesByAuthor = GetNotesByAuthor;
