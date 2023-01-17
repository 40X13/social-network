const ADD_POST = 'ADD_POST';

export const profieReduser=(action, state)=>{
    switch (action.type) {
        case ADD_POST:
            const newPost={
                id:10,
                text:action.text
            }
            return {...state,post:[...state.posts,newPost]};
        default:
            return state;
    }
}

export const addPostAC = (text) => {
    return {
        type: ADD_POST,
        text,
    }
};
