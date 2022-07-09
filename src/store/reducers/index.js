import { GET_TYPES, POST_POKEMON, TYPE_0, TYPE_1 } from "../actions/actionsVariables";

const initialState = {
    types: [],
    type0: '',
    type1: ''
}

export default function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_TYPES:
            let names = [];
            action.payload?.map(type=>{
                names.push(type.name)
            })
            return {
                ...state,
                types: names
            }
        case POST_POKEMON:
            return console.log('POKEMÓN CREATED',action.payload);
        case TYPE_0:
            return console.log(action.payload);
        case TYPE_1:
            return console.log(action.payload);
        default:
            return state;
    }
}