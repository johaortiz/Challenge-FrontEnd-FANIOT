import { GET_TYPES, POST_POKEMON, TYPE_0, TYPE_1 } from './actionsVariables';
import axios from 'axios';


export function getTypes(){
    return(dispatch)=>{
        axios.get(`https://pokeapi.co/api/v2/type`)
        .then(type=>{
            dispatch({
                type:GET_TYPES,
                payload: type.data.results
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};

export function postPokemon(pokemon){
    return(dispatch)=>{
        dispatch({
            type: POST_POKEMON,
            payload: pokemon
        })
    }
}

export function type0(type){
    return(dispatch)=>{
        dispatch({
            type: TYPE_0,
            payload: type
        })
    }
}

export function type1(type){
    return(dispatch)=>{
        dispatch({
            type: TYPE_1,
            payload: type
        })
    }
}
