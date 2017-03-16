/**
 * Created by VBA3627 on 15/03/2017.
 */
//Reducer to create / edit a project
export default function reducer(state={
    project: {
        title: ""
    }
}, action) {
    switch(action.type){
        case 'SET_PROJECT_TITLE':
            return {
                ...state,
                title: action.payload
            };
        default:
            return state;
    }
};

