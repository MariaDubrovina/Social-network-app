import React from 'react';
import { Redirect } from 'react-router';
import ChatItem from './ChatItem/ChatItem';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const Messages = (props) => {


    let chatElements = props.chatData.map((chat) => {
        return (
            <ChatItem name={chat.name} key={chat.id} id={chat.id} />
        );
    }
    );


    let messageElements = props.messageData.map((msg) => {
        return (
            <MessageItem message={msg.message} key={msg.id} />
        );
    }
    );
    
    let addNewMessage = (messageBody) => {
        props.sendMessage(messageBody);
    }



    return (
        <div className={classes.chats}>
            <div className={classes.chatsItems}>
                {chatElements}

            </div>

            <div className={classes.messages}>
                <div>{messageElements}</div>
                <MessagesForm sendMessage={addNewMessage} />
            </div>
        </div>
    );
}

const MessagesForm = (props) => {
    return (
        <Formik
        initialValues={{ messageBody: ''}}
        validationSchema={LoginValidation}
        onSubmit={(values, { setSubmitting }) => {
            props.sendMessage(values.messageBody);
            setSubmitting(false);
         
        }}
      >
        {({ isSubmitting }) => (
          <Form>
              <div>
            <Field type="text" name="messageBody" placeholder="Enter your message" />
            </div>
            <ErrorMessage name="messageBody" component="div" />
            <div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
            </div>

          </Form>
        )}
      </Formik>
    );
}

const LoginValidation = Yup.object().shape({
    messageBody: Yup
      .string()
      .required("Please write a message"),
    
  })


export default Messages;