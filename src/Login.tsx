import React from 'react';
import backendSettings from "./module/settings/backend";
import AuthForm from "./form/auth";

const Login = (apiSettings :backendSettings) => {
    const [authorized] = React.useState(false);

    if (!authorized) {
        return (
                <AuthForm {...apiSettings}/>
        )
    }

    return <h1>authorized</h1>
}

export default Login