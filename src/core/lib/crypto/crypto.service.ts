import * as crypto from "crypto-js"
import { Injectable } from "@nestjs/common"

@Injectable()
export class CryptoService {

  static encrypt(value): string {
    const result = crypto.AES.encrypt(value, "Key")
    return result.toString()
  }

  static decrypt(value): string {
    const result = crypto.AES.decrypt(value, "Key")
    return result.toString(crypto.enc.Utf8)
  }
}
