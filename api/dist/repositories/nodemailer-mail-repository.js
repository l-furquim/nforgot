"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailerMailRepository = void 0;
const nodemailer_1 = require("@/lib/nodemailer");
class NodeMailerMailRepository {
    async sendMail({ from, to, subject, code }) {
        try {
            await nodemailer_1.transporter.sendMail({ from, to, subject, html: (0, nodemailer_1.getHtmlTemplate)(code) });
        }
        catch (err) {
            throw err;
        }
    }
}
exports.NodeMailerMailRepository = NodeMailerMailRepository;
