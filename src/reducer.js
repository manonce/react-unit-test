export default function(state = 0, {type}){
    switch(type){
        case 'INCREMENT_INDEX':
        return state+1;
        
        default:
        return state
    }
}