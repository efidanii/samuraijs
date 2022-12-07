const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY',
sendMessage = 'SEND-MESSAGE'


const dialogsReducer = (state, action) => {
    switch (action.type){
        case sendMessage:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({
                id: (state.messages.length + 1),
                name: body
            })
            return state;
        case updateNewMessageBody:
            state.newMessageBody = action.body;
            return state;
    }
    return state;
}

export default dialogsReducer