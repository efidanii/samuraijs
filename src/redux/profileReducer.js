const addPost = 'ADD-POST',
updateNewPostText = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

    switch(action.type) {
        case addPost:
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
                text: state.newPostText,
                date: nowDate(),
                likes: 0
            }
            state.postData.unshift(newPost);
            return state;
        case updateNewPostText:
            state.newPostText = action.newText;
            return state;
        
    }
    return state;

}

export default profileReducer