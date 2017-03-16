/**
 * Created by VBA3627 on 15/03/2017.
 */
import { combineReducers } from 'redux'
import project from './ProjectReducer'
import user from './UserReducer'
import dashboard from './DashboardReducer'

export default combineReducers({
    project,
    user,
    dashboard
});