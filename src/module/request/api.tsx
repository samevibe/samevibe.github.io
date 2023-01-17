import axios from "axios";
import backendSettings from "../settings/backend";

class api {
    private readonly publicKey :string
    private readonly currentDomain :string
    private readonly basePath :string

    constructor(conf :backendSettings) {
        this.publicKey = conf.publicKey
        this.currentDomain = conf.api.domain
        this.basePath = conf.api.basePath
    }

    public get (link: string, data: Object) {
        return axios.get(
            `${this.basePath}${link}`,
            {
                params: data,
                //headers: this.getRequestHeader(),
                withCredentials: true
            }
        ).then((resp) => {
            return {
                error: 0,
                data: resp.data
            }
        }).catch((err) => {
            console.error(err)

            return {
                error: 1,
                data: null
            }
        })
    }

    public post (link: string, data: Object) {
        return axios.post(
            `${this.basePath}${link}`,
            data,
            {
                //headers: this.getRequestHeader(),
                withCredentials: true
            }
        ).then((resp) => {
            return {
                error: 0,
                data: resp.data
            }
        }).catch((err) => {
            console.error(err)

            return {
                error: 1,
                data: null
            }
        })
    }
}

export default api