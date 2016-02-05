const alt = require('../alt');

class ProjectActions {
    updateProjects(projects) {
        return projects;
    }

    fetchProjects() {
        return null;
    }

    projectsFailed(errorMessage) {
        return errorMessage;
    }
}

module.exports = alt.createActions(ProjectActions);
