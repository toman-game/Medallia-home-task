import React, {FC} from 'react';
import css from './HomePage.module.scss';
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {store} from "../../store/store";

let FcHomePage: FC = () => {
    const {messages} = store;
    const history = useHistory();
    const onClick = () => history.push('/all-messages');
    const unreadMessages = messages.filter((msg) => !msg.opened);

    return (
        <>
            <h1 className={css.title}>Hello there!</h1>
            <p className={css.subtitle}>
                You have {unreadMessages.length} unread messages out of {messages.length} total
            </p>
            <button className={css.btn} onClick={onClick}>View Messages</button>
        </>
    );
}

FcHomePage = observer(FcHomePage);
export {FcHomePage};