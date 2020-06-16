import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let messageElements = props.dialogsPage.messageData.map((message) => <Message message={message.message}/>);

    return (
        <div>
            <div className={css.header}><h1>Сообщения</h1></div>
            <div className={css.dialogs}>
                <div className={css.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={css.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;