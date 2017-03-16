/**
 * Created by VBA3627 on 15/03/2017.
 */
import React from 'react'

export class Project extends React.Component {

    componentWillMount() {
        this.props.onButtonClick()
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

