export const  signupTemplate =
`
<div class="logo-big" > 
    
</div>

<div class="pages-login  pages-edit-settings">
    <h1 class="form-main-title">Sign up</h1>
        {{#each inputs}}
            {{{html}}}
        {{/each}}
    <div class="form-buttons inline">
        {{{btnSignUp}}}
    </div>
</div>

`