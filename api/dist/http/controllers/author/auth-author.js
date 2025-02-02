"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAuthor = authAuthor;
const invalid_credentials_error_1 = require("@/use-cases/errors/invalid-credentials-error");
const make_auth_author_use_case_1 = require("@/use-cases/factories/author/make-auth-author-use-case");
const zod_1 = __importDefault(require("zod"));
async function authAuthor(request, reply) {
    const authAuthorSchema = zod_1.default.object({
        email: zod_1.default.string().email(),
        password: zod_1.default.string().min(1),
    });
    const { email, password } = authAuthorSchema.parse(request.body);
    try {
        const useCase = (0, make_auth_author_use_case_1.makeAuthAuthorUseCase)();
        const author = await useCase.create({
            email,
            password
        });
        const token = await reply.jwtSign({
            sub: author.id,
        });
        return reply.status(200).send({
            token, author,
        });
    }
    catch (err) {
        if (err instanceof invalid_credentials_error_1.InvalidCredentialsError) {
            return reply.status(400).send({
                message: err.message,
            });
        }
    }
}
