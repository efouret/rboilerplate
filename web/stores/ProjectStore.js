const alt = require('../alt');
const ProjectActions = require('../actions/ProjectActions');
const ProjectSource = require('../sources/ProjectSource');

class ProjectStore {
    constructor() {
        this.projects = [];
        this.errorMessage = null;
        this.bindListeners({
            handleUpdateProjects: ProjectActions.UPDATE_PROJECTS,
            handleFetchProjects: ProjectActions.FETCH_PROJECTS,
            handleProjectsFailed: ProjectActions.PROJECTS_FAILED
        });      
        
        this.exportAsync(ProjectSource);
    }

    handleUpdateProjects(response) {
        this.projects = response.data;
        this.errorMessage = null;
    }

    handleFetchProjects() {
        this.projects = [];
    }

    handleProjectsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }    
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');
