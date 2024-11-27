export const model1 = {
    panels: [
        {
            type: 'div',
            name: 'panel1',
            width: '100',
            height: '100',
            cssData: 'panel_style_1'
        },
        {
            type: 'div',
            name: 'panel2',
            width: '100',
            height: '100',
            cssData: 'panel_style_2'
        }
    ],
    components: [
        {
            type: 'div',
            name: 'div_panel_1',
            dropable: 'true',
            father: 'panel1',
            position: '0,0'
        },
        {
            type: 'div',
            name: 'div_panel_2',
            father: 'panel2',
            position: '0,0'
        },
        {
            type: 'div',
            name: 'div_panel_2',
            father: 'panel2',
            position: '0,0'
        }
    ],
    
};