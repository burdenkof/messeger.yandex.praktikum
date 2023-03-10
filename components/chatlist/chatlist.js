import { chatListTemplate } from "./template"
import { getChatRow } from "../chatrow/chatrow"

export const getChatList = (items) => {

    const Handlebars = require("handlebars")
    const template = Handlebars.compile(chatListTemplate)
    
    

    items.map((item, i) =>{
        item.html = getChatRow({item})
    })
 
    return template({items})
}