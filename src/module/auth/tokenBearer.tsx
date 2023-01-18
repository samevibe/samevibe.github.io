import backendSettings from "../settings/backend";
import axios from 'axios';

class tokenBearer {
    public isAuthorised: boolean

    private access_token !: string
    private refresh_token !: string
    private token_type !: string
    private expires_in !: number

    private y_curi: string
    private y_cid: string
    private y_cs: string

    constructor(p :backendSettings) {
        this.y_curi = p.ya.callbackURL
        this.y_cid = p.ya.clientID
        this.y_cs = p.ya.clientSecret

        this.isAuthorised = false
    }

    public getTokenByCode = async (code :string) => {
        let form_data = new FormData();
        form_data.append( 'grant_type', 'authorization_code' );
        form_data.append( 'code', code );
        form_data.append( 'client_id', this.y_cid );
        form_data.append( 'client_secret', this.y_cs );

        [
            this.access_token,
            this.refresh_token,
            this.token_type,
            this.expires_in
        ] = await axios.post('https://oauth.yandex.ru/token', form_data)
        .then(function (response) :[string, string, string, number] {
            if (response.data?.error !== undefined) {
                throw (response.data?.error_description)
            }

            return [
                response.data.access_token,
                response.data.refresh_token,
                response.data.token_type,
                response.data.expires_in,
            ]
        })
    }

}

export default tokenBearer