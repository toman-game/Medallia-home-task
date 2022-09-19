import React, {FC} from 'react';
import { Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {FcHomePage} from "../HomePage/HomePage";
import {FcMessagesListPage} from "../MessagesListPage/MessagesListPage";
import {FcDetailedMessagePage} from "../DetailedMessagePage/DetailedMessagePage";
import {FcPage} from "../Page/Page";

const FcApp: FC = () => {
    return (
        <Router>
            <Switch>
                <FcPage path='/home'>
                   <FcHomePage />
                </FcPage>

               <FcPage path='/all-messages'>
                   <FcMessagesListPage />
               </FcPage>

                <FcPage path='/message/:messageId'>
                    <FcDetailedMessagePage />
                </FcPage>

                <FcPage path="/*">
                    <Redirect to='/home' />
                </FcPage>
            </Switch>
        </Router>
    );
}

export {FcApp};