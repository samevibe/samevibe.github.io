type backendSettings = {
    tokenKey :string,
    cookieKey :string,
    publicKey :string,
    api: {
        basePath :string,
        domain :string
    },
    ya: {
        clientID :string,
        clientSecret :string,
        callbackURL :string
    }
}

export default backendSettings