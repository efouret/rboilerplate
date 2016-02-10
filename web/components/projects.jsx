const React = require('react');
const AltContainer = require('alt-container');
const ProjectStore = require('../stores/project-store');
const ProjectActions = require('../actions/project-actions');
const Button = require('react-bootstrap').Button;

const Link = require('react-router').Link;

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
                                <Link to={`/projects/${project._id}`}>{project.name}</Link>
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
