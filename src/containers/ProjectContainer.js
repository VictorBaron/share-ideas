/**
 * Created by victor on 16/03/2017.
 */
import React from 'react'
import { connect } from "react-redux"
import {Project} from "../components/Project"
import axios from "axios"
import * as projectActions from '../redux/actions/projectActions'



const mapStateToProps = (store) => {
    return {
        project: store.project.project,
        dashboard: store.dashboard.dashboard,
    }
};


const mapDispatchToProps = (dispatch) => ({
    onButtonClick() {
        dispatch(projectActions.setProjectTitle("Nouveau Titre"));
        dispatch({
            type: "FETCH_PROJECTS",
            payload: axios.get("https://api.github.com/users/teabow")
        });
    },

});

export const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);