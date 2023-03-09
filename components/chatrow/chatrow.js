import {chatRowTemplate} from './template'
const { template } = require("handlebars");

const chatRow = (item) =>{

    const Handlebars = require("handlebars")
    const template = Handlebars.compile(chatRowTemplate)
    return template(item)

    
}
export default chatRow