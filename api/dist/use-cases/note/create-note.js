"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteUseCase = void 0;
const account_not_found_error_1 = require("../errors/account-not-found-error");
;
class CreateNoteUseCase {
    repository;
    authorRepository;
    constructor(repository, authorRepository) {
        this.repository = repository;
        this.authorRepository = authorRepository;
    }
    async create({ title, content, type, authorId, icon, id }) {
        const author = await this.authorRepository.findById(authorId);
        if (!author) {
            throw new account_not_found_error_1.AccountNotFoundEror([authorId]);
        }
        console.log("Achou o ator");
        const note = await this.repository.create({
            title,
            content,
            type,
            icon,
            author_id: authorId,
            id,
        });
        return note;
    }
}
exports.CreateNoteUseCase = CreateNoteUseCase;
