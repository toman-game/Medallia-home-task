import React, {FC, ReactNode} from 'react';
import css from './Page.module.scss';
import {Route, useHistory} from "react-router-dom";

interface Props {
   children: ReactNode;
   path: string;
}

const FcPage: FC<Props> = (props) => {
    const { children, path } = props;
    const history = useHistory();
    const onClick = () => history.push('/');

    return (
        <Route path={path}>
            <div className={css.page}>
                <div className={css.header}>
                    <p>Dror Birenbaum - home task for Medallia</p>
                    <button onClick={onClick}>🏠 HOME</button>
                </div>
                {children}
            </div>
        </Route>
    )
}

export {FcPage};