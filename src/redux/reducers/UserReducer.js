/**
 * Created by VBA3627 on 15/03/2017.
 */

export default function reducer(state={}, action) {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                project: {...state.project, title: action.payload}
            };
        default:
            return state;
    }
};

