export const message_model = {
    mensaje: {
        name: 'message',
        type: 'div',
        widht: '100px',
        height: '100px',
    },
    components:[
        {
            name: 'quitButton',
            type: 'button',
            father: 'message'
        },
        {
            name: 'note',
            type: 'text',
            content: "",
            father: 'message'
        },
        {
            name: 'date',
            type: 'text',
            content: "",
            father: 'message'
        }
    ],
    
}