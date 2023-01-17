// @ts-ignore
import jwt from 'jsonwebtoken';
import backendSettings from "../settings/backend";

class session {
    private readonly tokenKey: string
    private readonly cookieKey: string
    private readonly tokenString: string | undefined
    private readonly authorized: boolean = false

    constructor(apiSettings :backendSettings) {
        this.tokenKey = apiSettings.tokenKey
        this.cookieKey = apiSettings.cookieKey
        this.tokenString = this.getTokenString()
        if (this.tokenString && (this.isTokenValid(apiSettings.publicKey))) {
             this.authorized = true
        } else {
            this.removeToken()
        }
    }

    private getTokenString(): string | undefined {
        if(!this.tokenKey || !this.cookieKey) return undefined

        if (this.tokenString) return this.tokenString

        let localToken: string | null | undefined = localStorage.getItem(this.tokenKey)
        if (localToken) return localToken

        let matches = document.cookie.match(new RegExp(
            // eslint-disable-next-line
            "(?:^|; )" + this.cookieKey.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        localToken = matches ? decodeURIComponent(matches[1]) : undefined;

        if (localToken) return localToken

        return undefined
    }

    private isTokenValid(publicKey :string): boolean {
        if (!this.tokenString) return false

        try {
            jwt.verify(this.tokenString, publicKey, {algorithms: ['RS256']})
            return true
        } catch (e) {
            return false
        }
    }

    private removeToken(): void {
        localStorage.removeItem(this.tokenKey);
    }

    public isAuthorized() :boolean {
        return this.authorized
    }
}

// private getRequestHeader () {
//     let token = this.getToken()
//     token = (token === undefined) ? null : token;
//     if (token === null) {
//         return {}
//     }
//
//     return {
//         'Authorization': `Bearer ${token}`
//     }
// }

export default session