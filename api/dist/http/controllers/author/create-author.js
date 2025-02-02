"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthor = createAuthor;
const author_alredy_exists_error_1 = require("@/use-cases/errors/author-alredy-exists-error");
const make_create_author_use_case_1 = require("@/use-cases/factories/author/make-create-author-use-case");
const zod_1 = __importDefault(require("zod"));
async function createAuthor(request, reply) {
    {
        console.log(request.body);
        const createAuthorSchema = zod_1.default.object({
            alias: zod_1.default.string().min(1),
            email: zod_1.default.string().email(),
            accountType: zod_1.default.enum(["GITHUB", "DEFAULT", "GOOGLE"]).default("DEFAULT"),
            imageUrl: zod_1.default.string().min(1),
            password: zod_1.default.string().min(1),
        });
        const { alias, email, imageUrl, password, accountType } = createAuthorSchema.parse(request.body);
        const useCase = (0, make_create_author_use_case_1.makeCreateAuthorUseCase)();
        try {
            const author = await useCase.create({
                alias,
                email,
                password,
                accountType,
                imageUrl,
            });
            const token = await reply.jwtSign({
                sub: author.id,
            });
            return reply.status(201).send({
                author, token,
            });
        }
        catch (err) {
            if (err instanceof author_alredy_exists_error_1.AuthorAlredyExistError) {
                reply.status(400).send({
                    message: err.message,
                });
            }
            ;
            reply.status(500).send({
                err,
            });
        }
    }
}
