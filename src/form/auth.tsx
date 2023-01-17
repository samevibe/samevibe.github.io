import React from 'react';
import '../css/login.scss';
import backendSettings from "../module/settings/backend";

const url = require('url');

function AuthForm (p :backendSettings) {

    const signInYa = () => {
        const requestUrl = url.parse(url.format({
            protocol: 'https',
            hostname: 'oauth.yandex.ru',
            pathname: '/authorize',
            query: {
                response_type: 'code',
                client_id: p.ya.clientID,
                redirect_uri: p.ya.callbackURL
            },
        }));

        window.open(requestUrl.href, "_self");
    }

    return (
        <form className="login">
            <img src="/img/ya-auth.svg" onClick={signInYa} alt="авторизация через яндекс аккаунт"/>
        </form>
    )
}

export default AuthForm