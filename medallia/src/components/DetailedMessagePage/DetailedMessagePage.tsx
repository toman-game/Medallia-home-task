import React, {FC} from 'react';
import {Redirect, useHistory, useParams} from 'react-router-dom';
import css from './DetailedMessagePage.module.scss';
import {observer} from "mobx-react-lite";
import {store} from "../../store/store";
import clsx from "clsx";

let FcDetailedMessagePage: FC = () => {
    const {getMessage, deleteMessage} = store;
    const { messageId } = useParams<{messageId: string}>();
    const history = useHistory();
    const msg = getMessage(messageId);

    if (!msg) {
        return <Redirect to="/" />
    }

    const goBack = () => history.push('/all-messages');
    const onDelete = () => {
        goBack();
        deleteMessage(msg.id);
    };

    return (
        <>
            <h1 className={css.title}>{msg.title}</h1>
            <p className={css.content}>{msg.content}</p>
            <div className={css.buttons}>
                <button onClick={goBack} className={css.btn}>
                    {"<"} All Messages
                </button>
                <button onClick={onDelete} className={clsx(css.btn, css.redBtn)}>
                    X Delete
                </button>
            </div>
        </>
    );
}

FcDetailedMessagePage = observer(FcDetailedMessagePage);
export {FcDetailedMessagePage};