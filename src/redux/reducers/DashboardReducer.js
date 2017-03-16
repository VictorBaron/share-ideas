/**
 * Created by VBA3627 on 15/03/2017.
 */

export default function reducer(state={
    dashboard: {
        projects: {
            data: {
            }
        },
        fetching: false,
        fetched: false,
        error: null,
    }
}, action) {
    switch(action.type){
        case "FETCH_PROJECTS_PENDING":
            return {...state, dashboard: {...state.dashboard, fetching: true}};
        case "FETCH_PROJECTS_REJECTED":
            return {...state, dashboard: {...state.dashboard, fetching: false, error: action.payload}};
        case "FETCH_PROJECTS_FULFILLED" :
            return {...state, dashboard: {...state.dashboard, fetching: true, fetched: true, projects:action.payload}};
        default :
            return state;
    }
}