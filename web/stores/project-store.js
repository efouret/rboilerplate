const alt = require('../alt');
const ProjectActions = require('../actions/project-actions');
const ProjectSource = require('../sources/project-source');

class ProjectStore {
    constructor() {
        this.projects = [];
        this.errorMessage = null;
        this.bindListeners({
            handleUpdateProjects: ProjectActions.UPDATE_PROJECTS,
            handleFetchProjects: ProjectActions.FETCH_PROJECTS,
            handleProjectsFailed: ProjectActions.PROJECTS_FAILED
        });

        this.exportPublicMethods({
            getProject: this.getProject
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

    getProject(id) {
        var { projects } = this.getState();
        for (var i = 0; i < projects.length; i += 1) {
            if (projects[i]._id === id) {
                return projects[i];
            }
        }

        return null;
    }
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');
