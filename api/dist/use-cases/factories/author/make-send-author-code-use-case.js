"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendAuthorCodeUseCase = makeSendAuthorCodeUseCase;
const nodemailer_mail_repository_1 = require("@/repositories/nodemailer-mail-repository");
const prisma_author_repository_1 = require("@/repositories/prisma-author-repository");
const send_author_use_case_1 = require("@/use-cases/author/send-author-use-case");
function makeSendAuthorCodeUseCase() {
    const authRepo = new prisma_author_repository_1.PrismaAuthorRepository();
    const mailRepo = new nodemailer_mail_repository_1.NodeMailerMailRepository();
    return new send_author_use_case_1.SendAuthorUseCase(authRepo, mailRepo);
}
