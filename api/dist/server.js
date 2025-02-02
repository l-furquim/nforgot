"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@/app");
const env_1 = require("@/env");
app_1.app.listen({ port: env_1.env.PORT }).then(() => {
    console.log("Server running in 3333");
});
