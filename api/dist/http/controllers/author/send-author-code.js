"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAuthorCode = sendAuthorCode;
const author_alredy_exists_error_1 = require("@/use-cases/errors/author-alredy-exists-error");
const GenerateCodeError_1 = require("@/use-cases/errors/GenerateCodeError");
const MailSendError_1 = require("@/use-cases/errors/MailSendError");
const make_send_author_code_use_case_1 = require("@/use-cases/factories/author/make-send-author-code-use-case");
const zod_1 = __importDefault(require("zod"));
async function sendAuthorCode(request, reply) {
    const sendAuthorCodeSchema = zod_1.default.object({
        email: zod_1.default.string().email(),
    });
    const { email } = sendAuthorCodeSchema.parse(request.body);
    try {
        const useCase = (0, make_send_author_code_use_case_1.makeSendAuthorCodeUseCase)();
        const code = await useCase.send({
            email,
        });
        const token = await reply.jwtSign({ code: code }, { expiresIn: "15min" });
        return reply.status(201).send({
            token: token,
        });
    }
    catch (err) {
        if (err instanceof MailSendError_1.MailError) {
            return reply.status(500).send({
                message: err.message,
            });
        }
        if (err instanceof author_alredy_exists_error_1.AuthorAlredyExistError) {
            return reply.status(400).send({
                message: err.message,
            });
        }
        if (err instanceof GenerateCodeError_1.GenerateCodeError) {
            return reply.status(500).send({
                message: err.message,
            });
        }
        return reply.status(500).send({
            err,
        });
    }
}
