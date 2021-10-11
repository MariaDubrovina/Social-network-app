const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

    
}

const messagesReducer = (state = initialState, action) => {

    let stateCopy = {
      ...state,
      messageData: [...state.messageData]
    };

    switch(action.type) {
       case SEND_MESSAGE:
            let newMessage = {
                id:4,
                message: action.messageBody
                
              };
              stateCopy.messageData.push(newMessage);
              return stateCopy;

        default:
            return state;
    }
}

export const sendMessageCreator = (messageBody) => {
    return {
      type: SEND_MESSAGE,
      messageBody
    };
  }
    


export default messagesReducer;