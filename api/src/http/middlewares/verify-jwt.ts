import type { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJwt(request: FastifyRequest, reply: FastifyReply){
  try{
    await request.jwtVerify();
  /*   const authHeader = request.headers.authorization;
    const token = authHeader ? authHeader.split(' ')[1] : null    
      
      reply.status(401).send({
        message: "Token invalid",
      }); */
  }catch(err){
    return reply.status(401).send({
      message: "Unauthorized"
    })
  }
}