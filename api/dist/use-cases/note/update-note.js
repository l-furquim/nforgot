"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNoteUseCase = void 0;
const invalid_data_error_1 = require("../errors/invalid-data-error");
class UpdateNoteUseCase {
    repository;
    authorRepository;
    constructor(repository, authorRepository) {
        this.repository = repository;
        this.authorRepository = authorRepository;
    }
    async update(data) {
        const note = await this.repository.findById(data.id);
        if (!note) {
            throw new invalid_data_error_1.InvalidDataError(data.id);
        }
        await this.repository.update(data);
    }
    ;
}
exports.UpdateNoteUseCase = UpdateNoteUseCase;
;
