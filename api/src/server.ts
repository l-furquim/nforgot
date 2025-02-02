import { app } from "@/app";

try{
  app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
    console.log("Server running in 3333");
  });
}catch(err){
  console.log(err);
  process.exit(1);
}