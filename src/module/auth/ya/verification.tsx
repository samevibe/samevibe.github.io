import backendSettings from "../../settings/backend";
import axios from 'axios';

import {useEffect, useState} from "react";

type Yatoken = {
    "access_token": string,
    "expires_in": number,
    "refresh_token": string,
    "token_type": string
}

function AuthVerification (p :backendSettings) {
    const [appState, setAppState] = useState();
    const [info, setInfo] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const code = queryParams.get("code") + ''

        let form_data = new FormData();
        form_data.append( 'grant_type', 'authorization_code' );
        form_data.append( 'code', code );
        form_data.append( 'client_id', p.ya.clientID );
        form_data.append( 'client_secret', p.ya.clientSecret );

        axios.post('https://oauth.yandex.ru/token', form_data)
        .then(function (response) {
            if (response.data?.error !== undefined) {
                throw (response.data?.error_description)
            }
            console.log(response.data?.access_token)
            setAppState(response.data)
            setInfo(response.data.access_token)
        }).catch(function (error) {
            setInfo(error.toString())
        });

    }, [setAppState]);

    return (<h1>{info}</h1>);
}

export default AuthVerification