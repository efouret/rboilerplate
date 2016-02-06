const React = require('react');
const AltContainer = require('alt-container');
const ProjectStore = require('../stores/ProjectStore');
const ProjectActions = require('../actions/ProjectActions');
const Button = require('react-bootstrap').Button;

const AllProjects = React.createClass({
    addProject() {
        console.log('New project');
    },
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
            <div>
                <ul>
                    {this.props.projects.map((project, i) => {
                        return (
                            <li key={i}>
                                {project.name}
                            </li>
                        );
                    })}
                </ul>
                <Button bsStyle="default" onClick={this.addProject}>New project</Button>
            </div>
        );
    }
});

const Projects = React.createClass({
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