"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountNotFoundEror = void 0;
class AccountNotFoundEror extends Error {
    constructor(credentials) {
        super("There is no account related with this credentials " + credentials.toString());
    }
}
exports.AccountNotFoundEror = AccountNotFoundEror;
