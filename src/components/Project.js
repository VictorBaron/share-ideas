/**
 * Created by VBA3627 on 15/03/2017.
 */
import React from 'react'
import { connect } from "react-redux"
import axios from "axios"
import * as projectActions from '../redux/actions/projectActions'


const mapStateToProps = (store) => {
    return {
        project: store.project.project,
        dashboard: store.dashboard.dashboard,
    }
};


/*const mapDispatchToProps = (dispatch) => {
  return {
      dispatchProjects: dispatch({
          type: "FETCH_PROJECTS",
          payload: axios.get("https://api.github.com/users/teabow")
      }),
      dispatchTitle: dispatch(projectActions.setProjectTitle("Titreuh"))
  }
};*/

export class Project extends React.Component {

    componentWillMount() {
        this.props.dispatch(projectActions.setProjectTitle("Nouveau Titre"));
        /*this.props.dispatchTitle();
        this.props.dispatchProjects();*/
        this.props.dispatch({
            type: "FETCH_PROJECTS",
            payload: axios.get("https://api.github.com/users/teabow")
        });
    }

   render() {

        const {project, dashboard} = this.props;
       return <div>
        <h1>{project.title}</h1>
           <p>{dashboard.projects.data.bio}</p>
           <img src={dashboard.projects.data.avatar_url} alt="Avatar" />
           </div>
   }
}

export const ProjectContainer = connect(mapStateToProps)(Project);