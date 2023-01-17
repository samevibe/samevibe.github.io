import React from 'react';
import session from './module/auth/session';
import backendSettings from "./module/settings/backend";
import AuthForm from "./form/auth";

const Login = (apiSettings :backendSettings) => {

    console.log(apiSettings.ya)
    
    const s :session = new session(apiSettings)
    const [authorized] = React.useState(s.isAuthorized());

    if (!authorized) {
        return (
                <AuthForm {...apiSettings}/>
        )
    }

    return <h1>authorized</h1>
}

export default Login