"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAuthorUseCase = void 0;
const author_alredy_exists_error_1 = require("../errors/author-alredy-exists-error");
const node_crypto_1 = require("node:crypto");
const MailSendError_1 = require("../errors/MailSendError");
;
class SendAuthorUseCase {
    repository;
    mailRepository;
    constructor(repository, mailRepository) {
        this.repository = repository;
        this.mailRepository = mailRepository;
    }
    ;
    async send({ email, }) {
        const authorAlredyExists = await this.repository.findByEmail(email);
        console.log(authorAlredyExists);
        if (authorAlredyExists) {
            throw new author_alredy_exists_error_1.AuthorAlredyExistError();
        }
        const code = (0, node_crypto_1.randomBytes)(4).toString("hex");
        console.log(code);
        try {
            await this.mailRepository.sendMail({
                from: "furquimmsw@gmail.com",
                to: email,
                subject: "Código de verificação de email",
                code,
            });
            return code;
        }
        catch (err) {
            throw new MailSendError_1.MailError(err);
        }
    }
}
exports.SendAuthorUseCase = SendAuthorUseCase;
