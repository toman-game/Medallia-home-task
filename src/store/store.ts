import {makeAutoObservable} from "mobx";
import {Message, messagesMock} from "./messagesMock";

class Store {
    private _messages: Message[] = messagesMock;

    constructor() {
        makeAutoObservable(this);
    }

    get messages() {
        return this._messages;
    }

    getMessage = (id: string): Message | undefined => {
        return this._messages.find((msg) => msg.id === id);
    }

    onMessageOpen = (msgId: string) => {
        this._messages = this._messages.map((msg) => {
            if (msg.id === msgId) {
                return {
                    ...msg,
                    opened: true
                }
            }
            return msg; // for all the other messages, return the old value without change
        })
    }

    deleteMessage = (msgId: string) => {
        this._messages = this._messages.filter((msg) => {
            return msg.id !== msgId;
        });
    }
}

const store = new Store();
export {store};