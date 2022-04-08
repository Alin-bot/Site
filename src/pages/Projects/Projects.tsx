import React from 'react'

import './Projects.css';
import projects from '../../resources/projects.json'

export const Projects: React.FC = () => {

    function getProjects(projects: any[]) {
        return (
            projects.map(project => {
                return (
                    <div>
                        {project.title}
                    </div>
                )
            })
        )
    }

  return (
    <div>
        { getProjects(projects) }
    </div>
  )
}