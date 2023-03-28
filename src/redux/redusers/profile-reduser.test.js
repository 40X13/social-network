import profileReduser, {addPostAC} from "./profile-reduser";
test ('add posts ', () => {

    const action=addPostAC('new post')

    const initialState = {
        posts: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'HI'},
            {id: 3, text: 'Were are the people?'},
            {id: 4, text: 'aaaa'},
            {id: 5, text: 'OMG'},
        ],

    }

    const state=profileReduser(initialState,action )

    expect(state.posts.length).toBe(6);
});