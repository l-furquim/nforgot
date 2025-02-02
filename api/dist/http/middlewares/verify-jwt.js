"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = verifyJwt;
async function verifyJwt(request, reply) {
    try {
        await request.jwtVerify();
        /*   const authHeader = request.headers.authorization;
          const token = authHeader ? authHeader.split(' ')[1] : null
            
            reply.status(401).send({
              message: "Token invalid",
            }); */
    }
    catch (err) {
        return reply.status(401).send({
            message: "Unauthorized"
        });
    }
}
