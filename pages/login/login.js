import Handlebars from "handlebars";
import { loginTemplate } from "./template.js";
import { getinput } from "../../components/input/input.js";
export function getLogin() {

    const template = Handlebars.compile(loginTemplate)

    let inputs = [];
    //Авторизация (с формой, имена полей: login, password).  
    let itemLogin = {
        name: 'login',
        placeholder: 'phone or email',
        status: 'succcess',
        label: 'Username',
        error: '',
        type: 'text'
    }
    itemLogin.html = getinput(itemLogin)

    let itemPassword = {
        name: 'password',
        status: 'error',
        label: 'Password',
        placeholder: '',
        error: 'Wrong user name or password',
        type: 'password'
    }
    itemPassword.html = getinput(itemPassword)
    inputs.push(itemLogin)
    inputs.push(itemPassword)



    return template({inputs: inputs})
}
