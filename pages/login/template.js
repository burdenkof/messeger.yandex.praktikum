export const  loginTemplate =
`
<div class="logo-big" > 
    <img src="/static/img/logo.png" />
</div>
<div class="pages-login">
    <h1 class="form-main-title">Login</h1>
        {{#each inputs}}
            {{{html}}}
        {{/each}}
</div>

`