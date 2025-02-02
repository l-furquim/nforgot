import { app } from "@/app";

app.listen({ port: 3333, host: "0.0.0.0" }).then((err) => {
  if(err){
    console.log(err);
    process.exit(1);
  }

  console.log("Server running in 3333");
});