import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CryptoService } from 'src/core/crypto.service';
import { User } from 'src/graphql/sys/user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private cryptoService: CryptoService,
    private configService: ConfigService,
  ) {}

  async sendValidateRegistration(user: User) {
    const link = this.getValidateLinkUrl(user.id);
    const htmlMail = `
    <body style="background: #e4e7e8 !important">
  <table
    style="
      width: 100%;
      max-width: 600px;
      color: #707070 !important;
      font-family: Arial, Helvetica;
      margin: 0 auto;
      margin-top: 20px;
      background: #ffffff;
    "
  >
    <tr style="width: 100%">
      <td style="background: #fd4769; padding: 12px 0">
        <img
          src="https://woovix-web.staging.silentiumapps.com/assets/images/brand-logo-white.png"
          style="max-width: 150px; margin: 8px 15px 5px 15px"
          alt="image"
        />
      </td>
    </tr>
    <tr>
      <td>
        <table style="background-color: #fff; width: 100%">
          <tr>
            <td
              style="
                padding: 20px 15px 0px 15px;
                color: #707070 !important;
                font-family: Arial, Helvetica;
              "
            >
              <div>
                <div>
                  <p>
                    Bienvenido, ${user.firstName} ${user.lastName}
                    <b>(${user.username})</b>
                  </p>
                  <p>
                    Gracias por registrate en Woovix, para confirmar tu cuenta
                    porfavor ingresá al siguiente link
                  </p>                  

                  <div style="text-align: center">
                    <a
                      href="${link.toString()}"
                      id="link"
                      style="
                        padding: 10px 10px;
                        background-color: #fd4769;
                        color: #ffffff;
                        border-radius: 4px;
                        min-width: 200px;
                        display: inline-block;
                        text-align: center;
                        text-decoration: none;
                      "
                      >Validar mi Cuenta</a
                    >
                  </div>
                </div>
                <br />
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td
        style="
          background-color: #fd4769;
          text-align: right;
          color: #ffffff;
          padding: 20px 15px;
        "
      >
        <a
          href="mailto:info@woovix.com"
          style="color: #ffffff; text-decoration: none"
          >info@woovix.com</a
        >
      </td>
    </tr>
  </table>
</body>
`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Confirmar tu cuenta de Woovix',
      html: htmlMail,
      // template: //'./confirmation',
      // context: {
      //   date: date,
      //   timeslot: timeslot
      // }
    });
  }

  getValidateLinkUrl(userId: any): string {
    const baseUrl = this.configService.get('WEB_URL');
    const token = this.cryptoService.encrypt(JSON.stringify({ id: userId }));
    const tokenEncoded = encodeURIComponent(token);
    return `${baseUrl}validate?q=${tokenEncoded}`;
  }

  async sendCodeChangePassword(email: string, code: string) {
    const htmlMail = `
    <body style="background: #e4e7e8 !important">
  <table
    style="
      width: 100%;
      max-width: 600px;
      color: #707070 !important;
      font-family: Arial, Helvetica;
      margin: 0 auto;
      margin-top: 20px;
      background: #ffffff;
    "
  >
    <tr style="width: 100%">
      <td style="background: #fd4769; padding: 12px 0">
        <img
          src="https://woovix-web.staging.silentiumapps.com/assets/images/brand-logo-white.png"
          style="max-width: 150px; margin: 8px 15px 5px 15px"
          alt="image"
        />
      </td>
    </tr>
    <tr>
      <td>
        <table style="background-color: #fff; width: 100%">
          <tr>
            <td
              style="
                padding: 20px 15px 0px 15px;
                color: #707070 !important;
                font-family: Arial, Helvetica;
              "
            >
              <div>
                <div>
                  <p>Solicitud de cambio de contraseña </b></p>
    <p>Su código de verificación tiene una vigencia de 1hs:</p>
    <p><h1><b>${code}</b></h1></p>
                </div>
                <br />
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td
        style="
          background-color: #fd4769;
          text-align: right;
          color: #ffffff;
          padding: 20px 15px;
        "
      >
        <a
          href="mailto:info@woovix.com"
          style="color: #ffffff; text-decoration: none"
          >info@woovix.com</a
        >
      </td>
    </tr>
  </table>
</body>
`;

    await this.mailerService.sendMail({
      to: email,
      subject: 'Woovix, cambio de contraseña solicitado',
      html: htmlMail,
      // template: './confirmation',
      // context: {
      //   date: date,
      //   timeslot: timeslot
      // }
    });
  }

  async sendEmail(address: string, htmlContent: string, subject: string, template?: string, attachments?: [any]) {
    await this.mailerService.sendMail({
      to: address,
      subject: subject,
      template: template,
      html: htmlContent,
      //attachments: attachments,
    });
  }
}
