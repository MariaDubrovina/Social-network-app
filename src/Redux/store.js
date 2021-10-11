import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";


let store = {
  _state: {
    profilePage : {
        postData : [
            {post:'HI guys, have a great day!', id:1, likes:15},
            {post:'Morning vibes', id:2, likes:10},
           
          ],

        newPostText : ''
    },
      

    messagesPage: {
        chatData : [
            {name:'Andrey', id:1},
            {name:'Martin', id:2},
            {name:'Dasha', id:3},
            {name:'Martin', id:4},
            {name:'Natasha', id:5}
          ],
          
          messageData : [
            {message:'Hi', id:1},
            {message:'How is your day?', id:2},
            {message:"What's up?", id:3}
          ],

          newMessageText: ''
    }
     
      
},

getState() {
  return this._state;
},

_rerenderEntireTree() {
  console.log('Changed');
},



subscribe(observer) {
  this._rerenderEntireTree = observer;
},

dispatch(action) {

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

  this._rerenderEntireTree(this._state);
  
} 

}







export default store;