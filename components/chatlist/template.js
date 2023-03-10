export const  chatListTemplate =
`
<div class ="chat-list">
    <aside >
        <ul class="chat-list-ul">
            {{#each items}}
                <li>{{{html}}}</li>
            {{/each}}
        </ul>
    </aside>
    <main>
         <div class="chat-list_message-list">
            {{#each messages}}
                {{{html}}}
            {{/each}}
        </div>
        <div class = "chat-list_send-input"></div>
    </main>
</div>

`
