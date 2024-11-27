export const MessageMapper = (message, incr) => {
    const div = document.createElement("div");
    for (const key in message) {
        switch (key) {
            case 'name':
                div.setAttribute("id", message[key]+incr);
                break;
        }
    }
return div;
};