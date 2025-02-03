// import { bool } from "yup";

export type user={
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    address:string,
    phon:string,
    isConnected?:boolean 
}
type Action =
  | { type: "CREATE"; data: user }
  | { type: "UPDATE"; data: user }
  | { type: "UPDATE_CONNECTION"; data: { isConnected: boolean } };

export function userReduse(state:user ,action:Action):user{    
    switch(action.type){
        case 'CREATE':
            state=action.data
            return state
        case 'UPDATE':
            console.log('up');
            return{
                first_name : action.data.first_name || state.first_name,
                last_name: action.data.last_name ||state.last_name,
                email : action.data.email ||state.email,
                password : action.data.password ||state.password,
                address : action.data.address ||state.address,
                phon: action.data.phon ||state.phon,     
            } 
            case 'UPDATE_CONNECTION':
                return { ...state, isConnected: action.data.isConnected };              
        default:
            console.log('de');          
            return state
    }
}
