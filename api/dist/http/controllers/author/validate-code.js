"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCode = validateCode;
const JwtDecondingError_1 = require("@/use-cases/errors/JwtDecondingError");
const make_verify_code_use_case_1 = require("@/use-cases/factories/author/make-verify-code-use-case");
const zod_1 = __importDefault(require("zod"));
async function validateCode(request, reply) {
    const validateCodeSchema = zod_1.default.object({
        token: zod_1.default.string().jwt(),
        code: zod_1.default.string(),
    });
    const { token, code } = validateCodeSchema.parse(request.body);
    try {
        const useCase = (0, make_verify_code_use_case_1.makeVerifyCodeUseCase)();
        const valid = await useCase.verify({
            token,
            code,
        });
        if (valid) {
            reply.status(200).send({
                message: "Código validado com sucesso"
            });
        }
        ;
        reply.status(401).send({
            message: "Invalid code",
        });
    }
    catch (err) {
        if (err instanceof JwtDecondingError_1.JwtDecondingError) {
            reply.status(500).send({
                message: err.message,
            });
        }
        reply.status(500).send({
            err,
        });
    }
}
