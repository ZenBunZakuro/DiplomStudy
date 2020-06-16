import React from "react";
import css from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path}>
                <div className={css.profileAvatar}>
                    <img
                        width={64}
                        height={64}
                        className={`"align-self-start mr-3" ${css.dialogImg}`}
                        src={props.avatar}
                        alt="Generic placeholder"
                    />
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;