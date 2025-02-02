"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthorUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const author_alredy_exists_error_1 = require("../errors/author-alredy-exists-error");
class CreateAuthorUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create({ alias, email, password, accountType, imageUrl }) {
        const userAlredyExists = await this.repository.findByEmail(email);
        if (userAlredyExists) {
            const isPaswordCorrect = await (0, bcryptjs_1.compare)(password, userAlredyExists.password);
            if (isPaswordCorrect) {
                return userAlredyExists;
            }
            else {
                throw new author_alredy_exists_error_1.AuthorAlredyExistError();
            }
        }
        ;
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 6);
        const author = await this.repository.create({
            email,
            password: hashedPassword,
            alias,
            accountType,
            imageUrl,
            status: "pending"
        });
        return author;
    }
}
exports.CreateAuthorUseCase = CreateAuthorUseCase;
