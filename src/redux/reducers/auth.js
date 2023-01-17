// import { AUTHORIZE, LOGOUT, CHANGE_AUTH_FORM } from "../actionTypes";
// import ServerRequest from "../../components/ServerRequest";
// const jwt = require('jsonwebtoken');
// const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`
//
// const logout = () => {
//     const req = ServerRequest.post(
//       `/auth/logout`,
//       {}
//       )
//
//     ServerRequest.removeToken()
//
//     return req
// }
//
// let token = ServerRequest.getToken()
// token = (token === undefined) ? null : token;
// let authorized = false
// let payload = {}
//
// if(token !== undefined && token !== null) {
//     try {
//         const {role} = jwt.verify(token, publicKey, { algorithms: ['RS256'] })
//         authorized = true
//         payload = {role}
//     } catch (e) {
//         console.error(`failed to authorize`,e)
//         payload = {}
//         authorized = false
//     }
// }
//

let payload = {}
let authorized = false

let initialState = {
    authorized,
    payload
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case 'AUTHORIZE': {
            return {
                ...state,
                authorized
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                authorized,
            };
        }
        default:
            return state;
    }
}
