"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./http/routes");
const zod_1 = require("zod");
const env_1 = require("./env");
const jwt_1 = __importDefault(require("@fastify/jwt"));
exports.app = (0, fastify_1.default)();
exports.app.register(jwt_1.default, {
    secret: env_1.env.JWT_SECRET,
    sign: {
        expiresIn: '120min',
    },
});
(0, routes_1.appRoutes)(exports.app);
exports.app.setErrorHandler((error, request, reply) => {
    if (error instanceof zod_1.ZodError) {
        return reply
            .status(400)
            .send({ message: "Invalid data ", issues: error.flatten().fieldErrors });
    }
    ;
    if (env_1.env.NODE_ENV !== 'production') {
        console.error(error);
    }
    else {
        // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
    }
    return reply.status(500).send({ message: 'Internal server error.' });
});
