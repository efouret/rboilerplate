const ProjectActions = require('../actions/ProjectActions');
const axios = require('axios');

const ProjectSource = {
    fetchProjects() {
        return {
            remote() {
                return axios.get('http://localhost:3000/projects');        
            },
            
            local() {
                return null;
            },
            
            success: ProjectActions.updateProjects,
            error: ProjectActions.projectsFailed,
            loading: ProjectActions.fetchProjects
        }
    }
};

module.exports = ProjectSource;