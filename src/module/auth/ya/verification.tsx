import backendSettings from "../../settings/backend";

import tokenBearer from "../tokenBearer";

import {useEffect, useState} from "react";

function AuthVerification (p :backendSettings) {
    const [appState, setAppState] = useState<tokenBearer>();
    const [info, setInfo] = useState('');

    const authorize = (token :tokenBearer) => {
        setAppState(token)
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const code = queryParams.get("code") + ''
        const token = new tokenBearer(p)
        token.getTokenByCode(code)
        .then()
        .catch()

        }, [setAppState,p]);

    console.log(appState)

    return (<h1>{info}</h1>);
}

export default AuthVerification