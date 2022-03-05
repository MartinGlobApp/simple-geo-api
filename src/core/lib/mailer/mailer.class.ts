import nodemailer from "nodemailer"
import handlebars from "handlebars"

import fs from "fs"
import path from "path"

import * as dotenv from "dotenv"

import { Attachment } from "nodemailer/lib/mailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

export class MailingLib {
  static async sendMail(title: string, subject: string, recipients: Array<string>, viewContent: string, attachments?: Array<Attachment>): Promise<any> {
    try {

      dotenv.config()

    } catch (error) {
      console.log("mailing.error", error)
    }
  }
}