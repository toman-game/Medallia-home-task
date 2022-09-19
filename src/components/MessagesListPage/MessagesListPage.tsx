import React, {FC, MouseEventHandler, useMemo, useState} from 'react';
import css from './MessagesListPage.module.scss';
import {observer} from "mobx-react-lite";
import {store} from "../../store/store";
import {useHistory} from "react-router-dom";
import clsx from 'clsx';
import {Message} from "../../store/messagesMock";

let FcMessagesListPage: FC = () => {
    const {messages, onMessageOpen, deleteMessage} = store;
    const [input, setInput] = useState('');
    const history = useHistory();

    const filteredMessages = useMemo<Message[]>(() => {
        const filter = input.toLowerCase();
        return messages.filter((msg) => {
            return msg.title.toLowerCase().includes(filter);
        })
    }, [input, messages])

    return (
        <div className={css.root}>
            <h1>Messages</h1>
            <input
                placeholder="search a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {filteredMessages.map((msg) => {
                const onOpen = () => {
                    onMessageOpen(msg.id);
                    history.push(`/message/${msg.id}`);
                }
                const onDelete: MouseEventHandler = (e) => {
                    e.stopPropagation();
                    deleteMessage(msg.id)
                };
                return (
                    <div
                        key={msg.id}
                        onClick={onOpen}
                        className={clsx(css.msg, msg.opened && css.openedMsg)}
                    >
                        <h3>{msg.title}</h3>
                        <p>{msg.content}</p>
                        <button onClick={onDelete}>X</button>
                    </div>
                );
            })}
            {filteredMessages.length === 0 && (
                <h3>No messages found</h3>
            )}
        </div>
    );
}


FcMessagesListPage = observer(FcMessagesListPage);
export {FcMessagesListPage};