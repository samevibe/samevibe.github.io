import { AUTHORIZE, LOGOUT} from "../actionTypes";
//import authPayload from "../../module/auth/authPayload";
type actionType = {
    type :string
}

let payload = {}
let authorized = false

let initialState = {
    authorized,
    payload
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action: actionType) {
    switch (action.type) {
        case AUTHORIZE: {
            return {
                ...state,
                authorized
            };
        }
        case LOGOUT: {
            return {
                ...state,
                authorized,
            };
        }
        default:
            return state;
    }
}
