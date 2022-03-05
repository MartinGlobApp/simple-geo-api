import * as fs from "fs"
import * as path from "path"
import * as handlebars from "handlebars"

export class ViewRenderHtmlPage {
  static render(view: string, data: { [key: string]: any }) {
    try {
      const urlTemplate = path.resolve(process.cwd(), "src/templates")

      const viewTemplate = path.resolve(urlTemplate, `./${view}.hbs`)

      if (!fs.existsSync(viewTemplate))
        throw new Error("Path Does not exists!")

      const source = fs.readFileSync(viewTemplate, 'utf8').toString()
      const template = handlebars.compile(source)
      const output = template(data)

      return output
    } catch (error) {
      console.log("ViewRenderHtmlPage.catch", error)
      throw error
    }
  }
}
