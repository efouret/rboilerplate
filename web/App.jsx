const ReactDOM = require('react-dom');
const React = require('react');

const Projects = require('./components/Projects.jsx');
const Project = require('./components/Project.jsx');

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const browserHistory  = require('react-router').browserHistory ;

const App = React.createClass({
    render() {                
        return (
            <div>
                <Link to="/projects">Projects</Link>
                {this.props.children}
            </div>
        );
    }
});


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="projects" component={Projects} />
      <Route path="projects/:projectId" component={Project}/>      
    </Route>
  </Router>,
  document.getElementById('ReactApp')
);