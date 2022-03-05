import * as pdf from "html-pdf"
import { ViewRenderHtmlPage } from "../html-render/html-render.class"

export class PDFRenderLib {

  static async createPDF(templateHbs: string, attributes?: { [key: string]: any }, opts?: pdf.CreateOptions): Promise<Buffer> {
    try {

      const htmlRenderContent = ViewRenderHtmlPage.render(`${templateHbs}`, attributes)

      return await new Promise<Buffer>((resolve, reject) => {

        pdf.create(htmlRenderContent, {
          localUrlAccess: true,
          ...opts
        }).toBuffer((err, buffer) => {

          if (err) {
            reject(err)
          } else {
            resolve(buffer)
          }
        });
      })
    } catch (error) {
      console.log("PdfRenderLib.catch.error", error)
    }
  }
}
