import * as React from "react"
import settings from "./settings/app"
import { Route, Redirect } from 'react-router'

function PrivateRoute({ children, appSettings, ...rest } :{children: JSX.Element; appSettings: settings; [rest: string]: any;}): JSX.Element {
    return (
        <Route {...rest} render={() => {
            return <Redirect to={appSettings?.basePath + '/login'} />
        }} />
    )
}

export default PrivateRoute