"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShareUseCase = void 0;
const share_note_found_error_1 = require("../errors/share-note-found-error");
const unauthorized_share_deletion_error_1 = require("../errors/unauthorized-share-deletion-error");
;
class DeleteShareUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    ;
    async delete({ shareId, authorId }) {
        const share = await this.repository.findById(shareId);
        if (!share) {
            throw new share_note_found_error_1.ShareNotFoundError();
        }
        if (share.author_id !== authorId) {
            throw new unauthorized_share_deletion_error_1.UnauthorizedShareDeletionError();
        }
        await this.repository.delete(share);
    }
}
exports.DeleteShareUseCase = DeleteShareUseCase;
