import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const addPost = 'ADD-POST',
      updateNewPostText = 'UPDATE-NEW-POST-TEXT',
      updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY',
      sendMessage = 'SEND-MESSAGE'


let store = {
    _state: {
        myPostsDate: {
            MyName: 'Daniel Efimenko',
            MyAvatar: 'https://pbs.twimg.com/media/E247SyoVEAUskkc.jpg',
            postData: [{
                    id: 0,
                    text: 'Я классный парень',
                    date: '12 Nov.',
                    likes: 12323
                },
                {
                    id: 1,
                    text: 'Посмотрел человека паука ВО!',
                    date: '11 Nov.',
                    likes: 2
                },
                {
                    id: 2,
                    text: 'Мой первый пост',
                    date: '10 Nov.',
                    likes: 0
                },
            ],
            newPostText: ""
        },
        dialogsData: {
            messages: [{
                    id: 0,
                    author: 'notMe',
                    name: 'Hi'
                },
                {
                    id: 1,
                    author: 'notMe',
                    name: 'Yo!'
                },
                {
                    id: 2,
                    author: 'notMe',
                    name: 'Привит!'
                },
            ],
            dialogs: [{
                    id: 0,
                    avaSrc: "https://pbs.twimg.com/media/E33s-FAXwAos7K8.jpg",
                    name: 'Max'
                },
                {
                    id: 1,
                    avaSrc: "https://avatars.mds.yandex.net/i?id=61a4011d2b24f773b541f1a57a3e4b20-4034691-images-thumbs&n=13",
                    name: 'Igor'
                },
                {
                    id: 2,
                    avaSrc: "https://pbs.twimg.com/media/E9TNC5VWYAAuP2j.jpg",
                    name: 'Kolya'
                },
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('1')
    }, 

    getState(){
        return this._state;
    },  
    subscribe (observer) {
        this._callSubscriber  = observer;
    },

    dispatch(action){
        this._state.myPostsDate = profileReducer(this._state.myPostsDate, action)
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
        this._callSubscriber(this._state)
    }
}
export const addPostActionCreator = () => ({type: addPost}),
             updateNewPostActionCreator = (text) => ({type: updateNewPostText,newText: text}),
             updateNewMessageBodyActionCreator = (text) => ({type: updateNewMessageBody, body: text}),
             sendMessageActionCreator = () => ({type: sendMessage })
export default store;
window.store = store;