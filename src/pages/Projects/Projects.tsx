import React from 'react'

import './Projects.css'
import projects from '../../resources/projects.json'
import { NavBar } from '../../components'

const Projects: React.FC = () => {

    function getProjects(projects: any[]) {
        return (
            <>
                <NavBar/>
                {projects.map(project => <div>{project.title}</div>)}
            </>
        )
    }

  return (
    <div>
        { getProjects(projects) }
    </div>
  )
}

export default Projects