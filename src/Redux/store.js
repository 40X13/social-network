import {profieReduser} from "../redusers/profile-reduser";

const ADD_POST='ADD_POST';

const store ={
    _state: {
        users: [
            {
                id: 1,
                name: 'Pablo'
            }, {
                id: 2,
                name: 'Olga'
            }, {
                id: 3,
                name: 'Ira'
            }, {
                id: 4,
                name: 'Sergey'
            }
        ],
        profile:{
            posts:[
                {id: 1, text: 'Hello'},
                {id: 2, text: 'HI'},
                {id: 3, text: 'Were are the people?'},
                {id: 4, text: 'aaaa'},
                {id: 5, text: 'OMG'},
            ],
        }

    },

    _rerenderEntireThree(){
        return    {}
    },

    subscribe(observer){
        this._rerenderEntireThree=observer;

    },

   get state(){
        return this._state;
    },


    dispatch(acton){
        this._state.profile=profieReduser(acton, this.state.profile );

        this._rerenderEntireThree(this);

    }
}



export default store;