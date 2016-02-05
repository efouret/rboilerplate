var React = require('react');
var AltContainer = require('alt-container');
var ProjectStore = require('../stores/ProjectStore');
var ProjectActions = require('../actions/ProjectActions');

var AllProjects = React.createClass({
    render() {
        if (this.props.errorMessage) {
          return (
            <div>{this.props.errorMessage}</div>
          );
        }

        if (ProjectStore.isLoading()) {
        return (
            <div>
            Loading...
            </div>
        )
        }
            
        return (
            <ul>
                {this.props.projects.map((project, i) => {
                    return (
                        <li key={i}>
                            {project.name}
                        </li>
                    );
                })}
            </ul>
        );
    }
});

var Projects = React.createClass({
    componentDidMount() {
        ProjectStore.fetchProjects();
    },
    
    render() {                
        return (
            <div>
                <h1>Projects</h1>
                <AltContainer store={ProjectStore}>
                    <AllProjects />
                </AltContainer>

            </div>
        );
    }
});

module.exports = Projects;