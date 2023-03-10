import Handlebars from "handlebars";
import { loginTemplate } from "./template.js";
 

export function getErrorPage(code = 404, title = 'Page not found', message = 'We are sorry, but there is no such page') {

    const template = Handlebars.compile(loginTemplate)
}