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
            newPostText: "what's new?"
        },
        dialogsData: {
            messages: [{
                    id: 0,
                    name: 'Hi'
                },
                {
                    id: 1,
                    name: 'Yo!'
                },
                {
                    id: 2,
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
            ]
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
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.myPostsDate.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else 
        if (action.type === 'ADD-POST'){
            let nowDate = () => {
                const monthNames = [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ];
                let data = new Date(), 
                    dd = data.getDate(),
                    mm = data.getMonth();
        
                return `${dd} ${monthNames[mm]}.`
            }
        
            let newPost = {
                id: 5,
                text: this._state.myPostsDate.newPostText,
                date: nowDate(),
                likes: 0
            }
            this._state.myPostsDate.postData.unshift(newPost);
            this._callSubscriber(this._state)
        }
    }
}

export default store;
window.store = store;