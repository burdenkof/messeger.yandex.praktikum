import Handlebars from "handlebars";
import { loginTemplate } from "./template.js";
import { buttonTemplate } from "../../components/button/template.js";
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

    const templateBtn = Handlebars.compile(buttonTemplate)

    let btnSignIn = templateBtn({
        name: 'Sign In',
        id: 'btn-sign-in',
        type: 'submit',
        onclick: ''
    })
    let btnSignUp = templateBtn({
        name: 'Sign Up',
        id: 'btn-sign-up',
        type: 'button',
        onclick: `window.location.href='/#signup'`
    })


    return template({ inputs: inputs, btnSignIn: btnSignIn, btnSignUp: btnSignUp })
}
